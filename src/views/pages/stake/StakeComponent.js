import { Grid, Stack } from "@mui/material";
import React from "react";
import CustomFab from "views/components/CustomFab";
import CustomText from "views/components/CustomText";
import StakedContainer from "./components/StakedContainer";
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

      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <CustomFab to="/mint" color="black" transparent={70}>
            <CustomText size="xl">MINT NOW</CustomText>
          </CustomFab>
        </Grid>

        <Grid item>
          <CustomFab color="black" transparent={70}>
            <CustomText size="xl">BUY $GHOOST</CustomText>
          </CustomFab>
        </Grid>
      </Grid>

      <CustomFab to="/" color="black" transparent={70}>
        <CustomText size="xl">BACK</CustomText>
      </CustomFab>
    </Stack>
  );
}
