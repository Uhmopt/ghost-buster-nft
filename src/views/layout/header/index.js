import { Grid } from "@mui/material";
import React from "react";
import CustomFab from "views/components/CustomFab";
import CustomText from "views/components/CustomText";

export default function Header({ pageName = "" }) {
  const notHome = pageName === "mint" || pageName === "stake";

  return (
    <div>
      <Grid container justifyContent="space-between">
        <Grid item>
          <CustomFab
            color={notHome ? "gray-500" : "transparent"}
            transparent={notHome ? 50 : 20}
          >
            {notHome ? <CustomText>White Paper</CustomText> : "White Paper"}
          </CustomFab>
        </Grid>
        <Grid item>
          <CustomFab
            color={notHome ? "gray-500" : "transparent"}
            transparent={notHome ? 50 : 20}
          >
            {notHome ? <CustomText>Connect</CustomText> : "Connect"}
          </CustomFab>
        </Grid>
      </Grid>
    </div>
  );
}
