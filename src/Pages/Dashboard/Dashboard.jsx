import React from "react";
import { Card, Row, Col } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { widgetsData } from "../../Utils";
import { WidgetChart } from "../../components/Charts/WidgetChart";
import { DashboardSecondRow } from "../../components/Charts/Charts";
import { TopSellingTable } from "../../components/TableComponent/TopSellingTable";
import { RightCard } from "../../components/AdCard/AdCard";
import Premium from "../../assets/images/premium.jpeg";

export const Dashboard = () => {
  return (
    <div className="px-5 py-2">
      <Row gutter={[34, 34]}>
        {widgetsData.map((widget, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card className="shadow-lg border-none">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="text-xl">{widget.icon}</div>
                    <div className="text-gray-600 text-sm">{widget.title}</div>
                  </div>
                  <div className="text-4xl py-2 font-bold">{widget.price}</div>
                  <div
                    className={`flex items-center text-sm ${
                      widget.isUp ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {widget.isUp ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                    <span className="ml-1">
                      {widget.change} {widget.time}
                    </span>
                  </div>
                </div>

                <div className="w-[50%] h-[100px]">
                  <WidgetChart isUp={widget.isUp} />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <DashboardSecondRow title={["Sales Analytics", "Sales by Category"]} />

      <Row className="mt-[20px]" gutter={[32, 32]}>
        <Col xs={24} sm={24} md={16} lg={18} className="flex">
          <Card className="shadow-lg border-none w-[100%] flex-1">
            <TopSellingTable />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={8} lg={6} className="flex">
          <div className="shadow-lg border-none flex-1">
            <RightCard
              image={Premium}
              trendingText="Trending now"
              vsYesterdayText="vs yesterday"
              productText="Single color blazer"
              price="$999"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
