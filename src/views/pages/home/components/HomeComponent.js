import { Telegram, Twitter } from "@mui/icons-material";
import { Container, Grid, IconButton, Stack } from "@mui/material";
import React from "react";
import CustomButton from "views/components/CustomButton";
import CustomFabContainer from "views/components/CustomFabContainer";
import CustomText from "views/components/CustomText";
import GhostBuster from "views/components/GhostBuster";
import Logo from "views/components/Logo";

export default function HomeComponent() {
  return (
    <Container maxWidth="xs" className="h-full">
      <Stack className="h-full" justifyContent="center" spacing={6}>
        {/* Logo */}
        <Logo />

        {/* Main Image */}
        <GhostBuster />

        {/* Play button */}
        <CustomButton variant="outlined">
          <CustomText size="2xl">Enter Mansion</CustomText>
        </CustomButton>

        {/* Menus */}
        <Grid container justifyContent="space-around">
          <Grid item>
            <CustomButton to="/mint">Mint</CustomButton>
          </Grid>
          <Grid item>
            <CustomButton to="/lab">Lab (vault)</CustomButton>
          </Grid>
          <Grid item>
            <CustomButton to="/stake">Stake</CustomButton>
          </Grid>
        </Grid>

        {/* Social */}
        <CustomFabContainer>
          <IconButton size="small">
            <Telegram htmlColor="white" />
          </IconButton>
          <IconButton size="small">
            <Twitter htmlColor="white" />
          </IconButton>
        </CustomFabContainer>
      </Stack>
    </Container>
  );
}
