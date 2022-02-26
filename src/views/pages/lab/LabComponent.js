import { Stack } from "@mui/material";
import React from "react";
import CustomFab from "views/components/CustomFab";
import CustomText from "views/components/CustomText";
import LabStateContainer from "./components/LabStateContainer";

const STATES_DATA = [
  { label: "REACT STATE 1", apr: 128.293, stake: 27.999, total: 33827387.393 },
  { label: "REACT STATE 2", apr: 128.293, stake: 27.999, total: 33827387.393 },
  { label: "REACT STATE 3", apr: 128.293, stake: 27.999, total: 33827387.393 },
];

export default function StakeComponent() {
  return (
    <Stack
      className="h-full"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <CustomText shadow size="6xl">
        LAB - VAULT
      </CustomText>

      <LabStateContainer data={STATES_DATA} />

      <CustomFab to="/" color="black" transparent={70}>
        <CustomText size="xl">BACK</CustomText>
      </CustomFab>
    </Stack>
  );
}
