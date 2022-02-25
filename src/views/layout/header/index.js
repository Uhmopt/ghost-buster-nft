import { Grid } from "@mui/material";
import React from "react";
import CustomFab from "views/components/CustomFab";

export default function Header() {
  return (
    <div>
      <Grid container justifyContent="space-between">
        <Grid item>
          <CustomFab>White Paper</CustomFab>
        </Grid>
        <Grid item>
          <CustomFab>Connect</CustomFab>
        </Grid>
      </Grid>
    </div>
  );
}
