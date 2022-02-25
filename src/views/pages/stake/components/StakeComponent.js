import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import CustomFab from "views/components/CustomFab";
import CustomText from "views/components/CustomText";

export default function StakeComponent() {
  return (
    <Container maxWidth="sm" className="h-full">
      <Stack className="h-full" justifyContent="center" spacing={12}>
        <CustomText shadow size="6xl">
          STAKING
        </CustomText>

        <Stack justifyContent="center" spacing={4} className="pt-8">
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <CustomFab color="black">
                <CustomText size="xl">MINT NOW</CustomText>
              </CustomFab>
            </Grid>

            <Grid item>
              <CustomFab color="black">
                <CustomText size="xl">BUY $GHOOST</CustomText>
              </CustomFab>
            </Grid>
          </Grid>

          <CustomFab color="black" to="/">
            <CustomText size="xl">BACK</CustomText>
          </CustomFab>
        </Stack>
      </Stack>
    </Container>
  );
}
