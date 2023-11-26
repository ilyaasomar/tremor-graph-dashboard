"use client";

import { AreaChart, Card, Title } from "@tremor/react";

const generateData = () => {
  let dataset = [];
  const dates = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  for (let date of dates) {
    dataset.push({
      date,
      income: Math.round(200 + Math.random() * 20 - 10),
      expnse: Math.round(130 + Math.random() * 20 - 10),
    });
  }

  return dataset;
};

const mockDataset = generateData();
console.log(mockDataset);

export default function Chart() {
  return (
    <Card className="mt-8">
      <Title className="mb-2">My admin dashboard</Title>
      <AreaChart
        className="mt-4 h-80"
        defaultValue={0}
        data={mockDataset}
        categories={["income", "expnse"]}
        index="date"
        colors={["blue", "red", "green"]}
        allowDecimals={false}
        yAxisWidth={60}
        noDataText="No data. Run your first test to get started!"
      />
    </Card>
  );
}
