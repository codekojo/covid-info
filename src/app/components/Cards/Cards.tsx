import React from "react";
import { Grid } from "@mui/material";
import CardContentItem from "./CardContentItem";
import styles from "./Cards.module.css";
const Cards: React.FC<any | {}> = ({
  confirmed,
  recovered,
  deaths,
  lastUpdate,
}) => {
  const CardInfo = [
    {
      name: "Infected",
      keywordCOVID: "active cases of",
      data: confirmed,
      lastUpdate,
    },
    {
      name: "Recovered",
      keywordCOVID: "recoveries from",
      data: recovered,
      lastUpdate,
    },
    {
      name: "Deaths",
      keywordCOVID: "deaths caused by",
      data: deaths,
      lastUpdate,
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={2} justifyContent="center">
        {CardInfo.map((e) => {
          return <CardContentItem {...e} />;
        })}
      </Grid>
    </div>
  );
};

export default Cards;
