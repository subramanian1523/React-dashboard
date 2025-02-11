import {
  DollarOutlined,
  ShoppingOutlined,
  UserOutlined,
  LineChartOutlined,
} from "@ant-design/icons"

export const widgetsData = [
    {
      title: "Today Revenue",
      price: "$2,338",
      icon: <DollarOutlined />,
      change: "+3.5%",
      isUp: true,
      time: "Yesterday",
    },
    {
      title: "Today Visitors",
      price: "$1,200",
      icon: <ShoppingOutlined />,
      change: "-1.2%",
      isUp: false,
      time: "Today",
    },
    {
      title: "Today Transac",
      price: "$892",
      icon: <UserOutlined />,
      change: "+2.8%",
      isUp: true,
      time: "Yesterday",
    },
    {
      title: "Total Product",
      price: "$4,150",
      icon: <LineChartOutlined />,
      change: "-0.9%",
      isUp: false,
      time: "Today",
    },
  ];
  