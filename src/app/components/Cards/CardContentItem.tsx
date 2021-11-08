import React from "react";
import { Grid, Card, Typography, CardContent } from "@mui/material";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

interface PropsData {
  name: string;
  keywordCOVID: string;
  data: {
    value: number;
    detail: string;
  };
  lastUpdate: string;
}

const CardContentItem: React.FC<PropsData> = ({
  name,
  keywordCOVID,
  lastUpdate,
  data,
}) => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      lg={3}
      component={Card}
      className={cx(styles.card, styles[name])}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5">
          <CountUp
            start={0}
            end={data?.value || 0}
            duration={2.5}
            separator=","
          />
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2">
          Number of {keywordCOVID} COVID-19
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default CardContentItem;
