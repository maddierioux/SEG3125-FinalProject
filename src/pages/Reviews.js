import React, { useState } from 'react';
import './Reviews.css';

const reviews = [
    { id: 1, date: '2024-05-21', customerName: 'Jane Doe', product: 'Chocolate Cake', rating: 5, review: 'Amazing chocolate cake!' },
    { id: 2, date: '2024-05-22', customerName: 'John Smith', product: 'Vanilla Cupcake', rating: 4, review: 'Loved the vanilla cupcake!' },
    { id: 3, date: '2024-05-23', customerName: 'Alice Johnson', product: 'Blueberry Muffin', rating: 4, review: 'The blueberry muffin was fresh and delicious.' },
    { id: 4, date: '2024-05-24', customerName: 'Michael Brown', product: 'Red Velvet Cake', rating: 5, review: 'The red velvet cake was divine!' },
    { id: 5, date: '2024-05-25', customerName: 'Emily Davis', product: 'Strawberry Tart', rating: 4, review: 'The strawberry tart was delightful!' },
    { id: 6, date: '2024-05-26', customerName: 'David Wilson', product: 'Lemon Meringue Pie', rating: 5, review: 'Tangy and sweet lemon meringue pie.' },
    { id: 7, date: '2024-05-27', customerName: 'Sarah Lee', product: 'Chocolate Chip Cookie', rating: 4, review: 'Classic chocolate chip cookies, loved it!' },
    { id: 8, date: '2024-05-28', customerName: 'Chris Green', product: 'Raspberry Cheesecake', rating: 5, review: 'The raspberry cheesecake was heavenly!' },
    { id: 9, date: '2024-05-29', customerName: 'Laura White', product: 'Almond Croissant', rating: 4, review: 'Buttery and delicious almond croissant.' },
    { id: 10, date: '2024-05-30', customerName: 'James Clark', product: 'Banana Bread', rating: 5, review: 'Moist and flavorful banana bread.' },
    { id: 11, date: '2024-06-01', customerName: 'Patricia King', product: 'Apple Pie', rating: 5, review: 'Classic apple pie, just like grandma used to make.' },
    { id: 12, date: '2024-06-03', customerName: 'Robert Harris', product: 'Carrot Cake', rating: 5, review: 'Spiced carrot cake with perfect cream cheese frosting.' },
    { id: 13, date: '2024-06-05', customerName: 'Linda Martinez', product: 'Peach Cobbler', rating: 5, review: 'Sweet and delicious peach cobbler.' },
    { id: 14, date: '2024-06-07', customerName: 'Steven Allen', product: 'Pumpkin Pie', rating: 5, review: 'Creamy and flavorful pumpkin pie.' },
    { id: 15, date: '2024-06-09', customerName: 'Karen Scott', product: 'Cherry Danish', rating: 4, review: 'Flaky and delicious cherry danish.' },
    { id: 16, date: '2024-06-11', customerName: 'George Hall', product: 'Chocolate Cake', rating: 5, review: 'Best chocolate cake ever!' },
    { id: 17, date: '2024-06-13', customerName: 'Nancy Young', product: 'Vanilla Cupcake', rating: 4, review: 'Nice and fluffy vanilla cupcakes.' },
    { id: 18, date: '2024-06-15', customerName: 'Mark Nelson', product: 'Blueberry Muffin', rating: 3, review: 'Really enjoyed the blueberry muffin.' },
    { id: 19, date: '2024-06-17', customerName: 'Lisa Carter', product: 'Red Velvet Cake', rating: 5, review: 'Absolutely loved the red velvet cake.' },
    { id: 20, date: '2024-06-19', customerName: 'Paul Edwards', product: 'Strawberry Tart', rating: 4, review: 'Strawberry tart was perfect.' },
  ];
  

const ratings = ['All', 5, 4, 3, 2, 1];

function Reviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRating, setSelectedRating] = useState('All');
  const itemsPerPage = 5;

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
    setCurrentPage(1); // Reset to the first page
  };

  const filterReviews = (reviews) => {
    return reviews.filter(review => {
      const ratingMatch = selectedRating === 'All' || review.rating === Math.trunc(parseInt(selectedRating));
      return ratingMatch;
    });
  };

  const filteredReviews = filterReviews(reviews);
  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage);

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
  const currentItems = filteredReviews.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="reviews-page">
      <div className="hero-section">
        <div className="hero-image">
          <img src="/images/hero-cake.jpg" alt="Reviews" />
        </div>
        <div className="hero-text">
          <h1>Reviews</h1>
        </div>
      </div>
      <div className="filters">
        <div className="filter-dropdown">
          <label htmlFor="rating-filter">Filter by Rating:</label>
          <select id="rating-filter" value={selectedRating} onChange={handleRatingChange}>
            {ratings.map(rating => (
              <option key={rating} value={rating}>{rating === 'All' ? rating : `★ ${rating}`}</option>
            ))}
          </select>
        </div>
        <p>Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredReviews.length)} of {filteredReviews.length} results</p>
      </div>
      <div className="reviews-list">
        {currentItems.map(review => (
          <div className="review-item" key={review.id}>
            <div className="review-item-content">
              <div className="review-details">
                <p><strong>Date:</strong> {review.date}</p>
                <p><strong>Name of Customer:</strong> {review.customerName}</p>
                <p><strong>Product:</strong> {review.product}</p>
                <p><strong>Rating:</strong> {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                <p>{review.review}</p>
              </div>
            </div>
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

export default Reviews;

