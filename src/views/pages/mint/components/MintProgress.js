import React from "react";
import ProgressBar from "views/components/ProgressBar";

export default function MintProgress({ value = 2165 }) {
  return (
    <div>
      <ProgressBar
        value={value}
        total={5000}
        labels={[
          { label: "Gen0", value: 1000 },
          { label: "$20k $GHOOST", value: 2000 },
          { label: "$40k $GHOOST", value: 3000 },
          { label: "$60k $GHOOST", value: 4000 },
        ]}
      />
    </div>
  );
}
