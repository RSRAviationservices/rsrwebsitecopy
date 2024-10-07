import React, { useState, useEffect } from 'react';
import './ProductFilter.css';

const ProductFilter = () => {
  const [companyFilter, setCompanyFilter] = useState('');
  const [productFilter, setProductFilter] = useState('');
  const [companies, setCompanies] = useState(['abc', 'abd', 'esd']);
  const [productCategories, setProductCategories] = useState(['category1', 'category2', 'category3']);

  const handleFilter = () => {
    // Check if both company and product are selected
    if (companyFilter && productFilter) {
      // Simulate API call
      fetch('https://example-api.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          company: companyFilter,
          product: productFilter,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('API Response:', data);
          // Handle the API response here
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      alert('Please select both a company and a product.');
    }
  };

  return (
    <div className="product-filter">
      <div className="filter-controls">
        <select
          className="filter-select"
          value={companyFilter}
          onChange={(e) => setCompanyFilter(e.target.value)}
        >
          <option value="">Shop By Company</option>
          {companies.map((company, index) => (
            <option key={index} value={company}>{company}</option>
          ))}
        </select>
        <select
          className="filter-select"
          value={productFilter}
          onChange={(e) => setProductFilter(e.target.value)}
        >
          <option value="">Shop by Category</option>
          {productCategories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        <button className="filter-button" onClick={handleFilter}>Filter</button>
      </div>
    </div>
  );
};

export default ProductFilter;
