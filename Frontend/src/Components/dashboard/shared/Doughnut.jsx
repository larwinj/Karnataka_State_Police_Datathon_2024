import { useTheme } from "@mui/material/styles";
import ReactEcharts from "echarts-for-react";

export default function DoughnutChart({ height, color = [] }) {
  const theme = useTheme();

  const option = {
    legend: {
      show: true,
      itemGap: 20,
      icon: "circle",
      bottom: 0,
      textStyle: { color: theme.palette.text.secondary, fontSize: 12, fontFamily: "roboto" }
    },
    tooltip: { show: false, trigger: "item", formatter: "{a} <br/>{b}: {c} ({d}%)" },
    xAxis: [{ axisLine: { show: false }, splitLine: { show: false } }],
    yAxis: [{ axisLine: { show: false }, splitLine: { show: false } }],

    series: [
      {
        name: "Overall pending Cases",
        type: "pie",
        radius: ["45%", "65%"],
        center: ["50%", "40%"],
        avoidLabelOverlap: false,
        hoverOffset: 5,
        stillShowZeroSum: false,
        label: {
          normal: {
            show: false,
            position: "center", // shows the description data to center, turn off to show in right side
            textStyle: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: "roboto" },
            formatter: "{a}"
          },
          emphasis: {
            show: true,
            textStyle: { fontSize: "14", fontWeight: "normal" },
            formatter: "{b} \n{c} ({d}%)"
          }
        },
        labelLine: { normal: { show: false } },
        data: [
          { value: 20, name: "SARAVANAMPATTI" },
          { value: 15, name: "PEELAMEDU" },
          { value: 14, name: "KUNIAMUTHUR" },
          { value: 30, name: "SINGANALLUR" },
          { value: 16, name: "SELVAPURAM" },
          { value: 10, name: "UKKADAM" }
        ],
        itemStyle: {
          emphasis: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0, 0, 0, 0.5)" }
        }
      }
    ]
  };

  return <ReactEcharts style={{ height: '300px' }} option={{ ...option, color: [...color] }} />;
}
