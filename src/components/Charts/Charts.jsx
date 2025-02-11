import React, { useState } from "react";
import { Card, Row, Col, Typography } from "antd";
import { PieChart } from "./PieChart";
import { LineChart } from "./LineChart";
import { generateLineChartData, generatePieData } from "../../Utils";
import { TimePeriodSelector } from "../DropDown/PeriodSelector";

const { Title } = Typography;

export const DashboardSecondRow = ({ title }) => {

  const [timePeriod, setTimePeriod] = useState("week");
  const [lineChartData, setLineChartData] = useState(generateLineChartData("week"));
  const [pieChartData, setPieChartData] = useState(generatePieData("week"));

  const handleDropdownChange = (value) => {
    setTimePeriod(value);
    setLineChartData(generateLineChartData(value));
    setPieChartData(generatePieData(value));
  };

  return (
    <Row className="mt-[20px]" gutter={[34, 34]}>
      <Col xs={24} sm={12} md={24} lg={12}>
        <Card className="shadow-lg border-none">
          <div className="flex">
            <Title level={5}>{title[0]}</Title>
            <TimePeriodSelector timePeriod={timePeriod} onChange={handleDropdownChange} />
          </div>
          <LineChart lineChartData={lineChartData} />
        </Card>
      </Col>

      <Col xs={24} sm={12} md={24} lg={12}>
        <Card className="shadow-lg border-none">
          <div className="flex">
            <Title level={5}>{title[1]}</Title>
            <TimePeriodSelector timePeriod={timePeriod} onChange={handleDropdownChange} />
          </div>
          <PieChart pieChartData={pieChartData} />
        </Card>
      </Col>
    </Row>
  );
};
