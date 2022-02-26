import { Add, Remove } from "@mui/icons-material";
import { Container, Grid, IconButton, Stack } from "@mui/material";
import React from "react";
import CustomFab from "views/components/CustomFab";
import CustomFabContainer from "views/components/CustomFabContainer";
import CustomText from "views/components/CustomText";
import MintProgress from "./MintProgress";

export default function MintComponent() {
  return (
    <Container maxWidth="sm" className="h-full">
      <Stack className="h-full" justifyContent="center" spacing={12}>
        <CustomText shadow size="6xl">
          MINT NFTs
        </CustomText>

        <MintProgress />

        <Stack justifyContent="center" spacing={4} className="pt-8">
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <CustomFabContainer
                color="black"
                transparent={70}
                className="flex items-center p-2"
              >
                <IconButton>
                  <Remove htmlColor="white" />
                </IconButton>
                <CustomText size="5xl">1</CustomText>
                <IconButton>
                  <Add htmlColor="white" />
                </IconButton>
              </CustomFabContainer>
            </Grid>

            <Grid item>
              <CustomFab color="black" transparent={70}>
                <CustomText size="2xl">MINT</CustomText>
              </CustomFab>
            </Grid>
          </Grid>

          <CustomFab color="black" transparent={70}>
            <CustomText size="xl">BUY $GHOOST</CustomText>
          </CustomFab>

          <CustomFab to="/" color="black" transparent={70}>
            <CustomText size="xl">BACK</CustomText>
          </CustomFab>
        </Stack>
      </Stack>
    </Container>
  );
}
