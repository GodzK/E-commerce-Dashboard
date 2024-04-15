import React from 'react';
import './Inventory.css';
import data from './data.json';
import InventoryIcon from '@mui/icons-material/Inventory';
function Inventory() {
  return (
    <div className='inventory-container'>
      <h1 style={{ textAlign: "center", paddingTop: "3rem" }}>Inventory<InventoryIcon/></h1>
      <div className="products-list">
        {data.map((product, index) => (
          <div className="product-card" key={index}>
            <h2>{product.grocery}</h2>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Quantity:</strong> {product.quantity}</p>
            <p><strong>Status:</strong> {product.quantity > 0 ? 'In Stock' : 'Out of Stock'}</p>
            <div className="product-actions">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Inventory;
