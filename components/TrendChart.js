import React from 'react';

import { Line } from 'react-chartjs-2';
import { useTheme } from 'styled-components';

function TrendChart({ labels, label, chartData }) {
  const { colors } = useTheme();

  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: chartData,
        fill: true,
        backgroundColor: colors.card,
        borderColor: colors.primary,
      },
    ],
  };

  return <Line data={data} />;
}

export default TrendChart;
