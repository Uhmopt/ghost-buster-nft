import { Grid, Stack } from "@mui/material";
import image from "assets/icons/icon-m.png";
import { toNumber } from "lib/math";
import React from "react";
import CustomButton from "./CustomButton";
import CustomFab from "./CustomFab";
import CustomFabContainer from "./CustomFabContainer";
import CustomImage from "./CustomImage";
import CustomText from "./CustomText";
import LabelControl from "./LabelControl";

export default function StateCard({ data = {} }) {
  return (
    <div className="w-full">
      <CustomText color="orange-600" outlined={false} size="2xl">
        {data?.label ?? ""}
      </CustomText>
      <CustomFabContainer
        className="py-4 px-8 w-full"
        color="black"
        transparent={50}
      >
        <Stack spacing={4}>
          {/* header */}
          <CustomText size="2xl">FTM Pool</CustomText>

          {/* harvest */}
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <CustomImage src={image} alt="M" />
            </Grid>
            <Grid item>
              <CustomFab color="gray-300" transparent={20}>
                <CustomText size="lg">HARVEST</CustomText>
              </CustomFab>
            </Grid>
          </Grid>

          {/* wallet */}
          <Stack spacing={2}>
            <Stack>
              <CustomText size="xl">0.00000000000</CustomText>
              <CustomText size="lg">FTM Earned</CustomText>
            </Stack>
            <CustomFab color="gray-300" transparent={20}>
              <CustomText size="lg">UNLOCK WALLET</CustomText>
            </CustomFab>
          </Stack>

          {/* prices */}
          <Stack>
            <LabelControl
              size="lg"
              label="APR:"
              control={`${toNumber(data?.apr ?? "")}%`}
            />
            <LabelControl
              size="lg"
              label="Your Stake:"
              control={`${toNumber(data?.stake ?? "")}`}
            />
            <LabelControl
              size="lg"
              label="Total Staked:"
              control={`${toNumber(data?.total ?? "")}`}
            />
          </Stack>

          <CustomButton color="blue-300" size="sm" outlined={false}>
            View Contract
          </CustomButton>
        </Stack>
      </CustomFabContainer>
    </div>
  );
}
