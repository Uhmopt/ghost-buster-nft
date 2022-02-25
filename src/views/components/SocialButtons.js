import { Telegram, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import CustomFabContainer from "views/components/CustomFabContainer";

export default function SocialButtons() {
  return (
    <CustomFabContainer>
      <IconButton size="small">
        <Telegram htmlColor="white" />
      </IconButton>
      <IconButton size="small">
        <Twitter htmlColor="white" />
      </IconButton>
    </CustomFabContainer>
  );
}
