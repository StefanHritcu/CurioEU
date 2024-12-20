import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

// Sample data for GDP (in billion USD)
const data = [
  {
    year: "2020",
    Italy: 1886,
    Romania: 248,
    France: 2603,
    Belgium: 521,
    Germany: 3806,
    Ireland: 450,
  },
  {
    year: "2021",
    Italy: 2101,
    Romania: 284,
    France: 2935,
    Belgium: 594,
    Germany: 4256,
    Ireland: 500,
  },
  {
    year: "2022",
    Italy: 2256,
    Romania: 300,
    France: 3032,
    Belgium: 600,
    Germany: 4457,
    Ireland: 550,
  },
  {
    year: "2023",
    Italy: 2300,
    Romania: 320,
    France: 3100,
    Belgium: 610,
    Germany: 4500,
    Ireland: 580,
  },
];

const DataCharts: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ width: "100%", height: "400px" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        GDP Growth (2020 - 2024)
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Italy"
            stroke="#FF5733"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Romania"
            stroke="#33FF57"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="France"
            stroke="#3357FF"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Belgium"
            stroke="#FF33A1"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Germany"
            stroke="#FFC300"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Ireland"
            stroke="#DA33FF"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default React.memo(DataCharts);
