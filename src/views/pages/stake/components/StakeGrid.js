import { Grid } from "@mui/material";
import { formatArray } from "lib/arrayObject";
import React from "react";
import StakeCard from "./StakeCard";

export default function StakeGrid({ data = [] }) {
  return (
    <div className={["h-48 overflow-auto"].join(" ")}>
      <Grid container spacing={4}>
        {formatArray(data).map((item, itemIndex) => (
          <Grid key={itemIndex} item lg={3} md={3} sm={3} xs={6}>
            <StakeCard data={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
