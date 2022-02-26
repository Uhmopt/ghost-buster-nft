import { Grid, Stack } from "@mui/material";
import React from "react";
import CustomText from "views/components/CustomText";
import StakedContainer from "./components/StakedContainer";
import StakeFooter from "./components/StakeFooter";
import UnStakedContainer from "./components/UnStakedContainer";

export default function StakeComponent() {
  return (
    <Stack
      className="h-full"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <CustomText shadow size="6xl">
        STAKING
      </CustomText>

      <div className="w-full">
        <Grid container spacing={4} justifyContent="center">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            {/* un stake */}
            <UnStakedContainer />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            {/* stake */}
            <StakedContainer />
          </Grid>
        </Grid>
      </div>

      <StakeFooter />
    </Stack>
  );
}
