import React from 'react';
import './Overview.css'; // ไฟล์ CSS สำหรับสไตล์

function Overview() {
  // ข้อมูลที่สร้างขึ้นเพื่อใช้แสดงผลในหน้า Overview
  const totalSales = 15000;
  const totalSoldItems = 100;
  const newCustomers = 10;
  const growthRate = 20; // เปอร์เซ็นต์อัตราการเติบโตเมื่อเทียบกับเดือนที่แล้ว

  // ข้อมูลสำหรับกราฟแสดงยอดขายในแต่ละวันของเดือนปัจจุบัน
  const salesData = [
    { day: '1', amount: 500 },
    { day: '2', amount: 700 },
    { day: '3', amount: 1000 },
    { day: '4', amount: 900 },
    // เพิ่มข้อมูลสำหรับวันที่ต่อไปตามต้องการ
  ];

  // รายการสินค้าขายดี 5 อันดับแรก
  const topProducts = [
    { name: 'Product A', quantitySold: 20 },
    { name: 'Product B', quantitySold: 15 },
    { name: 'Product C', quantitySold: 12 },
    { name: 'Product D', quantitySold: 10 },
    { name: 'Product E', quantitySold: 8 },
  ];

  return (
    <div className="overview-container">
      <h1>Overview</h1>
      <div className="summary">
        <div className="summary-item">
          <h2>Total Sales</h2>
          <p>${totalSales}</p>
        </div>
        <div className="summary-item">
          <h2>Total Sold Items</h2>
          <p>{totalSoldItems}</p>
        </div>
        <div className="summary-item">
          <h2>New Customers</h2>
          <p>{newCustomers}</p>
        </div>
        <div className="summary-item">
          <h2>Growth Rate</h2>
          <p>{growthRate}%</p>
        </div>
      </div>
      <div className="sales-chart">
        {/* สร้างกราฟแสดงยอดขายในแต่ละวัน */}
        {/* อาจใช้ Chart.js หรือ Recharts เพื่อสร้างกราฟได้ */}
      </div>
      <div className="top-products">
        <h2>Top Selling Products</h2>
        <ul>
          {topProducts.map((product, index) => (
            <li key={index}>
              <span>{product.name}</span>
              <span>{product.quantitySold} sold</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Overview;
