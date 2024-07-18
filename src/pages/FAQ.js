import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  { id: 1, question: 'What are your opening hours?', answer: 'We are open Monday to Friday from 9:00 AM to 9:00 PM and on weekends from 10:00 AM to 8:00 PM.' },
  { id: 2, question: 'Do you offer vegan or gluten-free options?', answer: 'Yes, we have a selection of vegan and gluten-free products available. Please contact us for more details. ' },
  { id: 3, question: 'How can I place an order?', answer: 'You can place an order through our website or by calling us at +1 705-999-0102.' },
  { id: 4, question: 'Do you deliver?', answer: 'Yes, we offer delivery services within our city!.' },
  { id: 5, question: 'Can I customize my order?', answer: 'Yes, we offer customization options for many of our products. Please contact us to discuss your requirements.' },
  { id: 6, question: 'What payment methods do you accept?', answer: 'We accept all major credit cards and cash for in-store purchases.' },
  { id: 8, question: 'Can I cancel or change my order?', answer: 'Yes, you can cancel or change your order within 24 hours of placing it. Please contact us as soon as possible.' },
  { id: 9, question: 'What is your return policy?', answer: 'We do not accept returns on food items, but if there is an issue with your order, please contact us and we will do our best to resolve it.' },
  { id: 10, question: 'Do you offer catering services?', answer: 'Yes, we offer catering services for events and parties. Please contact us to discuss your needs.' },
];

const itemsPerPage = 5;

function FAQ() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(faqs.length / itemsPerPage);

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
  const currentItems = faqs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="faq-page">
      <div className="hero-section">
        <div className="hero-image">
          <img src="/images/hero-cake.jpg" alt="FAQ" />
        </div>
        <div className="hero-text">
          <h1>Frequently Asked Questions</h1>
        </div>
      </div>
      <div className="faq-content">
        {currentItems.map(faq => (
          <div className="faq-item" key={faq.id}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
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

export default FAQ;
