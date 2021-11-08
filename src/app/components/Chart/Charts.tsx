import React from "react";
import { fetchDailyDate } from "../../services/index";
import { Line, Bar } from "react-chartjs-2";
import { CircularProgress } from "@mui/material";
import styles from "./Charts.module.css";

const data = {
  labels: ["1111", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
const Charts: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [dailyData, setDailyData] = React.useState<any | []>([]);
  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetchDailyDate();

        const modifiedData = response.map((e: any) => {
          console.log(e.deaths.total);

          return {
            confirmed: e.confirmed.total,
            deaths: e.deaths.total,
            reportDate: e.reportDate,
          };
        });
        setDailyData(modifiedData);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className={styles.container}>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <Line
          data={{
            labels: dailyData.map((prev: any) => prev.reportDate),
            datasets: [
              {
                label: "Infected",
                data: dailyData.map((prev: any) => prev.confirmed),
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)",
              },
              {
                label: "Deaths",
                data: dailyData.map((prev: any) => prev.deaths),
                fill: false,
                backgroundColor: "rgb(255, 0, 0)",
                borderColor: "rgba(255, 0, 0, 0.2)",
              },
            ],
          }}
        />
      )}
    </section>
  );
};
export default Charts;
