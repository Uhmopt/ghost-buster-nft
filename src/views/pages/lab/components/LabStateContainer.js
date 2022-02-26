import { Grid } from "@mui/material";
import { formatArray } from "lib/arrayObject";
import React from "react";
import StateCard from "views/components/StateCard";

export default function LabStateContainer({ data = [] }) {
  return (
    <div className="w-full">
      <Grid container spacing={4} justifyContent="center">
        {formatArray(data).map((item, itemIndex) => (
          <Grid key={itemIndex} item lg={4} md={4} sm={12} xs={12}>
            <StateCard data={item ?? {}} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
