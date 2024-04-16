import React, { useState } from 'react';
import './SalesReport.css'; 
import SaleReport from './SaleReport.json';

function SalesReport() {
  const [search, setSearch] = useState('');

  return (
    <div className="sales-report-container">
      
      <h1 className='sale-header'>Sales Report</h1>
      <div className='sale-input-field'>
        <input
        type="text"
        placeholder="Search by date or product name"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        className='sale-input'
      />
      </div>
      
      <table>
        <thead>
          <tr>
          <th>ID</th>
            <th>วันที่</th>
            <th>ชื่อสินค้า</th>
            <th>จำนวนสินค้า</th>
            <th>ราคา</th>
          </tr>
        </thead>
        <tbody>
          {SaleReport.filter((sale) =>
            sale.date.toLowerCase().includes(search) || sale.grocery.toLowerCase().includes(search)
          ).map((sale, index) => (
            <tr key={index}>
               <td>{sale.id}</td>
              <td>{sale.date}</td>
              <td>{sale.grocery}</td>
              <td>{sale.amount}</td>
              <td>{sale.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesReport;
