
import React, { useState } from 'react';
import img71 from '../../Resource/oems/71.jpg';
import './Products.css';

// Sample data for products
const products = [
  { productName: "Poxylube CP-200", partNumber: "DFL-L200-C02-AA4", specification: "9150-01-655-8645", company: "NSN" },
  { productName: "#099", partNumber: "E199-G75", specification: "BDF319019", company: "BAE Systems" },
  { productName: "#099", partNumber: "E199-G75", specification: "EAA1734D045", company: "Boeing" },
  { productName: "#099", partNumber: "E199-G75", specification: "MIL-PRF-46010 Color 1", company: "Department of Defense (DoD)" },
  { productName: "#099", partNumber: "E199-G75", specification: "MIL-STD-171", company: "Department of Defense (DoD)" },
  { productName: "#099", partNumber: "E199-G75", specification: "209-62A", company: "Eaton Corporation" },
  { productName: "#099", partNumber: "E199-G75", specification: "MS34.52-01", company: "Hamilton Sundstrand" },
  { productName: "#099", partNumber: "E199-G75", specification: "MS34.52-12", company: "Hamilton Sundstrand" },
  { productName: "#099", partNumber: "E199-G75", specification: "EMS 52402 Y Type I", company: "Honeywell International, Inc." },
  { productName: "#099", partNumber: "E199-G75", specification: "EMS 52402 Y Type XII", company: "Honeywell International, Inc." },
  { productName: "#099", partNumber: "E199-G75", specification: "LMT00221", company: "Lockheed Martin" },
  { productName: "#099", partNumber: "E199-G75", specification: "HMS4-1078 Type IX", company: "Boeing" },
  { productName: "#099", partNumber: "E199-G75", specification: "S-1738", company: "NATO Code" },
  { productName: "#099", partNumber: "E199-G75", specification: "RB0140-007", company: "ROCKETDYNE" },
  { productName: "#099", partNumber: "E199-G75", specification: "SAE-AS5272 Type III", company: "SAE Standard" },
  { productName: "#099", partNumber: "E199-G75", specification: "1390303", company: "Teledyne" },
  { productName: "#099", partNumber: "E199-G75", specification: "HS248 Type A1", company: "Hamilton Sundstrand" },
  { productName: "#099", partNumber: "E199-G75", specification: "HS248 Type A7", company: "Hamilton Sundstrand" },
  { productName: "#099", partNumber: "E199-G75", specification: "BMS3-8 Type VI Class 4", company: "Boeing" },
  { productName: "#099", partNumber: "E199-G75", specification: "1E2194A", company: "Caterpillar" },
  { productName: "#099 Gallon", partNumber: "E199-G75", specification: "9150-01-416-9506", company: "NSN" },
  { productName: "#099", partNumber: "E199-G75", specification: "SP1638470", company: "Cobham" },
  { productName: "#099", partNumber: "E199-G75", specification: "SS8866", company: "Sikorsky" },
  { productName: "#099", partNumber: "E199-G75", specification: "PWA36204", company: "Pratt & Whitney" },
  { productName: "28A", partNumber: "E628-G35", specification: "HMS4-1078 Type I", company: "Boeing" },
  { productName: "28A", partNumber: "E628-G35", specification: "HMS4-1078 Type VIII", company: "Boeing" },
  { productName: "28A", partNumber: "E628-G35", specification: "HMS4-1078 Type XI", company: "Boeing" },
  { productName: "28A Aerosol", partNumber: "E628-G35", specification: "59992031", company: "Andrew Communication Systems" },
  { productName: "28A Aerosol", partNumber: "E628-G35", specification: "MIL-L-23398 Type II", company: "Department of Defense (DoD)" },
  { productName: "28A Aerosol", partNumber: "E628-G35", specification: "MIL-PRF-46147 Type I Form 2", company: "Department of Defense (DoD)" },
  { productName: "28A Aerosol", partNumber: "E628-G35", specification: "172A1702", company: "General Dynamics" },
  { productName: "28A Aerosol", partNumber: "E628-G35", specification: "NAV-Sea-5544161", company: "Naval Sea Systems Command" },
  { productName: "28A Aerosol", partNumber: "E628-G35", specification: "9150-01-360-1905", company: "NSN" },
  { productName: "28A Aerosol", partNumber: "E628-G35", specification: "9150-01-566-7396", company: "NSN" },
  { productName: "28A Aerosol", partNumber: "E628-G35", specification: "9150-01-606-7446", company: "NSN" },
  { productName: "28A AEROSOL", partNumber: "E628-G35", specification: "9150-01-260-2534", company: "NSN" },
  { productName: "28A Aerosol", partNumber: "E628-G35", specification: "77A107393P2", company: "Lockheed Martin" },
  { productName: "#238 Aerosol *replaced by 28A", partNumber: "E635-G75", specification: "MIL-L-23398 Amendment 2 Type II", company: "Department of Defense (DoD)" },
  { productName: "#238 Aerosol *replaced by 28A", partNumber: "E635-G75", specification: "MIL-STD-171 Type II", company: "Department of Defense (DoD)" },
  { productName: "#238 Aerosol *replaced by 28A", partNumber: "E635-G75", specification: "HMS4-1078 Type I", company: "Boeing" },
  { productName: "#238 Aerosol *replaced by 28A", partNumber: "E635-G75", specification: "HMS4-1078 Type XI", company: "Boeing" },
  { productName: "28A", partNumber: "E728-G35", specification: "BMS3-8 Type VI Class 2", company: "Boeing" },
  { productName: "28A", partNumber: "E728-G35", specification: "BMS3-8 Type VII Class 1", company: "Boeing" },
  { productName: "28A", partNumber: "E728-G35", specification: "1E2194B", company: "Caterpillar" },
  { productName: "9A", partNumber: "E750-G75", specification: "AS5272 Type II (Formerly MIL-L-46010 Type II)", company: "Department of Defense (DoD)" },
  { productName: "LC-300 - Gallon (LC300)", partNumber: "V765-G75", specification: "9150-00-985-7255", company: "NSN" },
  { productName: "LC-300 - Pint (LC300)", partNumber: "V765-G75", specification: "9150-00-834-5608", company: "NSN" }
  // Add the remaining products in this format...
];


const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.specification.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <h2 className="product-title">{product.productName}</h2>
            <img src={img71} alt="Distributor 71" className="distributor-logo" />
            <p><strong>Product Name:</strong> SANDSTROM {product.productName}</p>
            <p><strong>OEM:</strong> SANDSTROM</p>
            <p><strong>Part Number:</strong> {product.partNumber}</p>
            <p><strong>Specification:</strong> {product.specification}</p>
            <p><strong>Company:</strong> {product.company}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;