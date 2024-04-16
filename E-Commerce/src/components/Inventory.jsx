import React from 'react';
import './Inventory.css';
import SaleReport from './SaleReport.json';
import InventoryIcon from '@mui/icons-material/Inventory';
function Inventory() {
  return (
    <div className='inventory-container'>
      <h1 style={{ textAlign: "center", paddingTop: "3rem" }}>Inventory<InventoryIcon/></h1>
      <div className="products-list">
        {SaleReport.map((product, index) => (
          <div className="product-card" key={index}>
            <h2>{product.grocery}</h2>
            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Quantity:</strong> {product.amount}</p>
            <p><strong>Status:</strong> {product.amount > 0 ? 'In Stock' : 'Out of Stock'}</p>
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
