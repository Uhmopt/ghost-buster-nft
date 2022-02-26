import { Grid } from "@mui/material";
import React from "react";
import CustomFab from "views/components/CustomFab";
import CustomText from "views/components/CustomText";

export default function StakeFooter() {
  return (
    <div className="w-full">
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

      <CustomFab to="/" color="black" transparent={70} className="mt-8">
        <CustomText size="xl">BACK</CustomText>
      </CustomFab>
    </div>
  );
}
