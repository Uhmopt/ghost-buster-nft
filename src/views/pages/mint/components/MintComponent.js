import { Add, Remove } from "@mui/icons-material";
import { Container, Grid, IconButton, Stack } from "@mui/material";
import React from "react";
import BlackContainer from "views/components/BlackContainer";
import CustomFab from "views/components/CustomFab";
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
              <BlackContainer className="flex items-center p-2">
                <IconButton>
                  <Remove htmlColor="white" />
                </IconButton>
                <CustomText size="5xl">1</CustomText>
                <IconButton>
                  <Add htmlColor="white" />
                </IconButton>
              </BlackContainer>
            </Grid>

            <Grid item>
              <CustomFab color="black">
                <CustomText size="2xl">MINT</CustomText>
              </CustomFab>
            </Grid>
          </Grid>

          <CustomFab color="black">
            <CustomText size="xl">BUY $GHOOST</CustomText>
          </CustomFab>

          <CustomFab color="black" to="/">
            <CustomText size="xl">BACK</CustomText>
          </CustomFab>
        </Stack>
      </Stack>
    </Container>
  );
}
