import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import styled from "@emotion/styled";

export const RadarChart = () => {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  const data = {
    labels: ["React", "Typescript", "Next.js", "JavaScript", "css"],
    datasets: [
      {
        label: "SKILL",
        data: [7, 6, 5, 8, 8],
        backgroundColor: "#3f51304d",
        borderColor: "#3F5130",
        borderWidth: 5,
      },
    ],
  };
  const options: any = {
    elements: {
      point: {
        radius: 0, // 점 제거
      },
    },

    scales: {
      r: {
        pointLabels: {
          font: {
            size: 15,
          },
        },
        grid: {
          lineWidth: 3,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 2,
        },

        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            size: 18,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <ChartWrap>
      <Radar data={data} options={options} />
    </ChartWrap>
  );
};

const ChartWrap = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 500px;
`;
