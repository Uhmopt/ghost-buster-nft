import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import CustomButton from "views/components/CustomButton";
import CustomText from "views/components/CustomText";
import GhostBuster from "views/components/GhostBuster";
import Logo from "views/components/Logo";
import SocialButtons from "views/components/SocialButtons";

export default function HomeComponent() {
  return (
    <Container maxWidth="xs" className="h-full">
      <Stack className="h-full" justifyContent="center" spacing={6}>
        {/* Logo */}
        <Logo />

        {/* Main Image */}
        <div className="flex justify-center">
          <GhostBuster />
        </div>

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
        <SocialButtons />
      </Stack>
    </Container>
  );
}
