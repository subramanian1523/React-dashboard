import React from "react";
import { Select } from "antd";

const { Option } = Select;

export const TimePeriodSelector = ({ timePeriod, onChange }) => {
  return (
    <Select
      value={timePeriod}
      style={{ width: 120, position: "absolute", right: "5%" }}
      onChange={onChange}
    >
      <Option value="week">Week</Option>
      <Option value="month">Month</Option>
      <Option value="year">Year</Option>
      <Option value="day">Day</Option>
    </Select>
  );
};
