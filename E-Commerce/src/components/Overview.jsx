import React from "react";
import "./Overview.css";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const onLine = [4000, 3000, 2000, 2780, 1890];
const top5Labels = ["รองเท้า", "กระเป๋า", "อาหาร", "เครื่องสำอาง", "เกม"];
const xLabels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun "];
import EqualizerIcon from '@mui/icons-material/Equalizer';
const chartSetting = {
  xAxis: [
    {
      label: "การเติบโต(ยอดขาย)",
    },
  ],
  width: 500,
  height: 400,
};

const dataset = [
  { seoul: 21, month: "Jan" },
  { seoul: 28, month: "Fev" },
  { seoul: 41, month: "Mar" },
  { seoul: 73, month: "Apr" },
  { seoul: 99, month: "May" },
  { seoul: 144, month: "June" },
  { seoul: 295, month: "July" },
  { seoul: 249, month: "Aug" },
  { seoul: 131, month: "Sept" },
  { seoul: 55, month: "Oct" },
  { seoul: 48, month: "Nov" },
  { seoul: 25, month: "Dec" },
];

const valueFormatter = (value) => `${value}ล้านชิ้น`;

function Overview() {
  return (
    <div className="ov-ct">
      <h1 style={{ paddingTop: "5rem", color: "white" }}>Overview<EqualizerIcon/></h1>
      <div className="Overview-container">
        <div className="Overview-item" style={{ maxWidth: "356px" }}>
          <h3>ยอดขายในแต่ละวัน</h3>
          <div className="chart-container">
            <BarChart
              width={500}
              height={300}
              series={[
                { data: pData, label: "ออนไลน์", id: "pvId" },
                { data: uData, label: "หน้าร้าน", id: "uvId" },
              ]}
              xAxis={[{ data: xLabels, scaleType: "band" }]}
            />
          </div>
        </div>
        <div className="Overview-item" style={{ maxWidth: "356px" }}>
          <div className="growth-rate">
            <h3>จำนวนลูกค้า&อัตราการเติบโต(แกนxคือเดือน)</h3>
            <div className="chart-container">
              <LineChart
                xAxis={[{ data: [10, 20, 30, 50] }]}
                series={[
                  {
                    data: [1, 2, 3, 4],
                  },
                ]}
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="Overview-item" style={{ maxWidth: "356px" }}>
          <div className="ss-rate">
            <h3>ยอดขายโดยรวม , จำนวนสินค้าที่ขายได้</h3>
            <div className="chart-container">
              <BarChart
                dataset={dataset}
                yAxis={[{ scaleType: "band", dataKey: "month" }]}
                series={[{ dataKey: "seoul", label: "ยอดขาย", valueFormatter }]}
                layout="horizontal"
                {...chartSetting}
              />
            </div>
          </div>
        </div>
        <div className="Overview-item" style={{ maxWidth: "356px" }}>
          <div className="top-rate">
            <h3>สินค้าขายดี 5 อันดับแรก</h3>
            <div className="chart-container">
              <BarChart
                width={500}
                height={300}
                series={[
                  { data: onLine, label: "ทั้ง online & หน้าร้าน", id: "pvId" },
                ]}
                xAxis={[{ data: top5Labels, scaleType: "band" }]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
