import React from "react";
import { DatePicker, DatePickerProps, Space, TimeRangePickerProps } from "antd";
import "antd/dist/antd.css";

interface IPropsDatePicker {
  setDate: any;
}

const DatePickerPage = (props: IPropsDatePicker) => {
  const onChange = (
    value: DatePickerProps["value"] | TimeRangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    // console.log("Selected Time: ", value);
    // console.log("Formatted Selected Time: ", dateString);
    props.setDate(dateString);
  };

  return (
    <Space direction="vertical" size={12}>
      <DatePicker
        onChange={onChange}
        style={{
          width: 295,
          height: 44,
          borderRadius: 8,
          marginBottom: 40,
        }}
        placeholder="날짜를 택해주세요."
      />
    </Space>
  );
};

export default DatePickerPage;
