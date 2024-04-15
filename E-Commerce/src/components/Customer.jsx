import React, { useState } from 'react';
import './Customer.css';
import data from './data.json';

function Customer() {
  const [search, setSearch] = useState('');

  return (
    <div className='customer-container'>
      <h1 style={{ textAlign: "center", paddingTop: "3rem" }}>Customer</h1>
      <div className="customer-page">
        <input type="text" name="search" className="cus-input" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ชื่อ-สกุล</th>
                <th>สินค้า</th>
                <th>Email</th>
                <th>วันที่สมัคร</th>
              </tr>
            </thead>
            <tbody>
              {data.filter((customer) =>
                customer.first_name.toLowerCase().includes(search) ||
                customer.grocery.toLowerCase().includes(search) ||
                customer.email.toLowerCase().includes(search) ||
                customer.date.toLowerCase().includes(search)
              ).map((customer, index) => (
                <tr key={index}>
                  <td>{customer.first_name}</td>
                  <td>{customer.grocery}</td>
                  <td>{customer.email}</td>
                  <td>{customer.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Customer;
