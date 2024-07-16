import React, { useState} from 'react';
import { useCart } from '../context/CartContext';
import './Menu.css';

const menuItems = [
    { id: 1, name: 'Chocolate Cake', price: 30, category: 'Cakes', rating: 4.5, review: 'Delicious chocolate cake', imageUrl: '/images/bakery-items/chocolate_cake.jpeg' },
    { id: 2, name: 'Dozen Vanilla Cupcake', price: 30, category: 'Cupcakes', rating: 4.0, review: 'Tasty vanilla cupcake', imageUrl: '/images//bakery-items/vanilla-cupcake.jpeg' },
    { id: 3, name: 'Dozen Blueberry Muffin', price: 25, category: 'Muffins', rating: 4.2, review: 'Fresh blueberry muffin', imageUrl: '/images/bakery-items/blueberry-muffin.jpeg' },
    { id: 4, name: 'Red Velvet Cake', price: 30, category: 'Cakes', rating: 4.8, review: 'Delicious red velvet cake', imageUrl: '/images/bakery-items/red-velvet.jpeg' },
    { id: 5, name: 'Dozen Strawberry Tart', price: 30, category: 'Tarts', rating: 4.6, review: 'Sweet and tangy strawberry tart', imageUrl: '/images/bakery-items/strawberry-tart.jpeg' },
    { id: 6, name: 'Lemon Meringue Pie', price: 25, category: 'Pies', rating: 4.7, review: 'Tangy lemon meringue pie', imageUrl: '/images/bakery-items/lemon-meingue.webp' },
    { id: 7, name: 'Dozen Chocolate Chip Cookie', price: 15, category: 'Cookies', rating: 4.4, review: 'Classic chocolate chip cookie', imageUrl: '/images/bakery-items/cookies.jpeg' },
    { id: 8, name: 'Raspberry Cheesecake', price: 35, category: 'Cakes', rating: 4.9, review: 'Rich raspberry cheesecake', imageUrl: '/images/bakery-items/cheesecake.webp' },
    { id: 9, name: 'Dozen Almond Croissant', price: 25, category: 'Pastries', rating: 4.3, review: 'Buttery almond croissant', imageUrl: '/images/bakery-items/amond-croissants.webp' },
    { id: 10, name: 'Banana Bread', price: 15, category: 'Breads', rating: 4.5, review: 'Moist banana bread', imageUrl: '/images/bakery-items/banana-bread.jpeg' },
    { id: 11, name: 'Apple Pie', price: 20, category: 'Pies', rating: 4.6, review: 'Classic apple pie', imageUrl: '/images/bakery-items/apple-pie.jpeg' },
    { id: 12, name: 'Carrot Cake', price: 24, category: 'Cakes', rating: 4.7, review: 'Spiced carrot cake', imageUrl: '/images/bakery-items/carrot-cakes.jpeg' },
    { id: 13, name: 'Peach Cobbler', price: 20, category: 'Cobblers', rating: 4.5, review: 'Sweet peach cobbler', imageUrl: '/images/bakery-items/peach-cobbler.jpeg' },
    { id: 17, name: 'Custom Cake - Chocolate Cake with Vanilla Icing', price: 35, category: 'Custom Cakes', rating: 4.8, review: 'Chocolate cake with creamy vanilla icing', imageUrl: '/images/bakery-items/custom-vanilla.jpeg' },
    { id: 18, name: 'Custom Cake - Vanilla Cake with Vanilla Icing', price: 35, category: 'Custom Cakes', rating: 4.7, review: 'Classic vanilla cake with vanilla icing', imageUrl: '/images/bakery-items/vanilla-custom.webp' },
    { id: 19, name: 'Custom Cake - Chocolate Cake with Chocolate Icing', price: 35, category: 'Custom Cakes', rating: 4.9, review: 'Decadent chocolate cake with chocolate icing', imageUrl: '/images/bakery-items/chocolate-custom.jpeg' },
    { id: 20, name: 'Custom Bakery Item', price: 40, category: 'Custom Bakery Items', rating: 4.8, review: 'Your choice of a custom bakery item', imageUrl: '/images/bakery-items/chocolate-custom2.jpeg' }
];
  

const categories = ['All', 'Cakes', 'Cupcakes', 'Muffins', 'Tarts', 'Cookies', 'Breads', 'Pies', 'Cobblers', 'Custom Cakes'];
const priceRanges = ['All', 'Under $25', '$25-$30', 'Above $30'];
const ratings = ['All', '4 & Up', '3 & Up', '2 & Up'];

function Menu() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  const [showNotification, setShowNotification] = useState(false);
  const [sortBy, setSortBy] = useState('Relevance');
  const { dispatch, cartItems } = useCart();
  const itemsPerPage = 5;

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', item });
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const updateCartItemQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_FROM_CART', itemId });
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', itemId, quantity });
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
    setCurrentPage(1);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const filterItems = (items) => {
    return items.filter(item => {
      const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
      const priceMatch = selectedPriceRange === 'All' || (selectedPriceRange === 'Under $25' && item.price < 25) || (selectedPriceRange === '$25-$30' && item.price >= 25 && item.price <= 30) || (selectedPriceRange === 'Above $30' && item.price > 30);
      const ratingMatch = selectedRating === 'All' || (selectedRating === '4 & Up' && item.rating >= 4) || (selectedRating === '3 & Up' && item.rating >= 3) || (selectedRating === '2 & Up' && item.rating >= 2);
      return categoryMatch && priceMatch && ratingMatch;
    });
  };

  const sortItems = (items) => {
    switch (sortBy) {
      case 'Price':
        return items.sort((a, b) => a.price - b.price);
      case 'Reviews':
        return items.sort((a, b) => b.rating - a.rating);
      case 'Relevance':
      default:
        return items;
    }
  };

  const filteredItems = sortItems(filterItems(menuItems));
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map(number => (
      <li
        key={number}
        id={number}
        onClick={handleClick}
        className={currentPage === number ? 'active' : ''}
      >
        {number}
      </li>
    ));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const getItemQuantity = (itemId) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const isInCart = (itemId) => {
    return cartItems.some(item => item.id === itemId);
  };

  return (
    <div className="menu-page">
      <div className="hero-section">
        <div className="hero-image">
          <img src="/images/hero-cake.jpg" alt="Menu" />
        </div>
        <div className="hero-text">
          <h1>Menu</h1>
        </div>
      </div>
      {showNotification && <div className="notification">Item added to cart!</div>}
      <div className="filters">
        <div className="filter-dropdown">
          <label htmlFor="category-filter">Filter by Category:</label>
          <select id="category-filter" value={selectedCategory} onChange={handleCategoryChange}>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <label htmlFor="price-filter">Filter by Price:</label>
          <select id="price-filter" value={selectedPriceRange} onChange={handlePriceRangeChange}>
            {priceRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
          <label htmlFor="rating-filter">Filter by Rating:</label>
          <select id="rating-filter" value={selectedRating} onChange={handleRatingChange}>
            {ratings.map(rating => (
              <option key={rating} value={rating}>{rating === 'All' ? rating : `★ ${rating}`}</option>
            ))}
          </select>
        </div>
        <div className="sort-dropdown">
          <label htmlFor="sort-by">Sort by:</label>
          <select id="sort-by" value={sortBy} onChange={handleSortChange}>
            <option value="Relevance">Relevance</option>
            <option value="Price">Price</option>
            <option value="Reviews">Reviews</option>
          </select>
        </div>
        <p>Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredItems.length)} of {filteredItems.length} results</p>
      </div>
      <div className="menu-grid">
        {currentItems.map(item => (
          <div className="menu-item" key={item.id}>
            <div className="menu-item-image" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <p>Rating: ★ {item.rating}</p>
            <p>{item.review}</p>
            {isInCart(item.id) ? (
              <div className="quantity-controls">
                <button onClick={() => updateCartItemQuantity(item.id, getItemQuantity(item.id) - 1)}>-</button>
                <span>{getItemQuantity(item.id)}</span>
                <button onClick={() => updateCartItemQuantity(item.id, getItemQuantity(item.id) + 1)}>+</button>
              </div>
            ) : (
              <button onClick={() => addToCart(item)}>Add to cart</button>
            )}
          </div>
        ))}
      </div>
      <ul id="page-numbers">
        {renderPageNumbers()}
        {currentPage < totalPages && <li onClick={() => setCurrentPage(currentPage + 1)}>Next</li>}
      </ul>
    </div>
  );
}

export default Menu;