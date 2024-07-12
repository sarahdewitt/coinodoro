"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useCompletionData } from "../../hooks/completionData"; // Adjust the import path as needed

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CompletionGraph = () => {
  const { dates, counts } = useCompletionData();
  const [backgroundColor, setBackgroundColor] = useState([]);

  useEffect(() => {
    // Create a temporary element with the CSS class to get the computed style
    const tempElement = document.createElement("div");
    tempElement.className = "barColor";
    document.body.appendChild(tempElement);
    const bgColor = window.getComputedStyle(tempElement).backgroundColor;
    document.body.removeChild(tempElement);

    // Set the background color for each bar
    setBackgroundColor(new Array(counts.length).fill(bgColor));
  }, [counts]);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Tasks Completed",
        data: counts,
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "x", // Makes the bars horizontal
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
        grid: {
          display: true,
        },
      },
      y: {
        title: {
          display: true,
          text: "Tasks Completed",
        },
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Tasks Completed: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="font-poppins py-5">
      <Bar
        data={data}
        options={options}
        className="text-sm md:text-base h-screen"
      />
    </div>
  );
};

export default CompletionGraph;
