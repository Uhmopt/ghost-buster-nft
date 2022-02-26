import { Stack } from "@mui/material";
import React from "react";
import CustomFab from "views/components/CustomFab";
import CustomFabContainer from "views/components/CustomFabContainer";
import CustomText from "views/components/CustomText";
import StakeGrid from "./StakeGrid";

export default function UnStakedContainer() {
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

        {/* main */}
        <Stack spacing={4}>
          <CustomText
            shadow
            size="4xl"
            className="underline underline-offset-2"
          >
            UNSTAKED
          </CustomText>

          <StakeGrid data={tempData} />

          <div className="flex justify-center">
            <CustomFab color="gray-500" transparent={30}>
              <CustomText size="xl">STAKE</CustomText>
            </CustomFab>
          </div>
        </Stack>
      </CustomFabContainer>
    </div>
  );
}
