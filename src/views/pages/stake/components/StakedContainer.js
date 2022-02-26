import { Stack } from "@mui/material";
import React from "react";
import CustomButton from "views/components/CustomButton";
import CustomFab from "views/components/CustomFab";
import CustomFabContainer from "views/components/CustomFabContainer";
import CustomText from "views/components/CustomText";
import StakeGrid from "./StakeGrid";

export default function StakedContainer() {
  const tempData = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div>
      <CustomFabContainer
        color="black"
        transparent={70}
        className={["p-4 w-full", "relative z-0"].join(" ")}
      >
        <div className="absolute top-4 left-4 z-10">
          <CustomFab color="gray-500" transparent={30}>
            <CustomText>SELECT ALL</CustomText>
          </CustomFab>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <CustomFab color="gray-500" transparent={30}>
            <CustomText>
              AMOUNT CLAIMABLE:
              <br />
              5245.26 TOKEN
            </CustomText>
          </CustomFab>
        </div>

        {/* main */}
        <Stack spacing={2}>
          <CustomText
            shadow
            size="4xl"
            className="underline underline-offset-2"
          >
            STAKED
          </CustomText>

          <div className="flex justify-around">
            <CustomButton>STAKED</CustomButton>
            <CustomButton>RESETING</CustomButton>
            <CustomButton>SKILL TREE</CustomButton>
          </div>

          <StakeGrid data={tempData} />

          <div className="flex justify-evenly">
            <CustomFab color="gray-500" transparent={30}>
              <CustomText size="xl">CLAIM</CustomText>
            </CustomFab>
            <CustomFab color="gray-500" transparent={30}>
              <CustomText size="xl">CLAIM & UNSTAKE</CustomText>
            </CustomFab>
          </div>
        </Stack>
      </CustomFabContainer>
    </div>
  );
}
