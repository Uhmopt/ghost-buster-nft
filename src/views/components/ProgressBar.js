import { formatArray } from "lib/arrayObject";
import { toNumber } from "lib/math";
import React from "react";
import BlackContainer from "./BlackContainer";
import CustomText from "./CustomText";

const BottomLabel = ({
  isCurrent = false,
  value = 0,
  total = 1,
  label = "",
}) => {
  total = toNumber(total) ? toNumber(total) : 1;
  return (
    <div
      className={[
        "absolute bg-gray-300 border-black",
        isCurrent ? "w-1 h-24" : "h-16 w-2 border-2",
        "top-1/2 ",
      ].join(" ")}
      style={{ left: `${(toNumber(value) / total) * 100}%` }}
    >
      <div className="absolute bottom-0 translate-y-full -translate-x-1/2 whitespace-nowrap">
        {isCurrent ? (
          <div>
            <CustomText size="xl">Current</CustomText>
            <CustomText size="xl">
              {value} / {total}
            </CustomText>
          </div>
        ) : (
          <CustomText>{label}</CustomText>
        )}
      </div>
    </div>
  );
};

const TopLabel = ({ value = 0, total = 1, label = "" }) => {
  total = toNumber(total) ? toNumber(total) : 1;
  return (
    <div
      className={[
        "absolute",
        "w-2 h-16 bg-gray-300",
        "border-2 border-black",
        "top-1/2 -translate-y-full",
      ].join(" ")}
      style={{ left: `${(toNumber(value) / total) * 100}%` }}
    >
      <div className="absolute top-0 -translate-y-full -translate-x-1/2">
        <CustomText>{label}</CustomText>
      </div>
    </div>
  );
};
export default function ProgressBar({
  value = 1,
  total = 1,
  label = "",
  labels = [],
}) {
  total = toNumber(total) ? toNumber(total) : 1;
  return (
    <div>
      <BlackContainer className={["p-4 w-full h-20", "relative"].join(" ")}>
        <div
          style={{ width: `${(toNumber(value) / total) * 100}%` }}
          className={["bg-gray-300", "h-full rounded-4xl", "relative"].join(
            " "
          )}
        ></div>
        <BottomLabel isCurrent value={value} total={total} label={"current"} />

        {formatArray(labels).map((item, itemIndex) =>
          itemIndex % 2 ? (
            <TopLabel
              key={itemIndex}
              value={item?.value}
              total={total}
              label={item?.label}
            />
          ) : (
            <BottomLabel
              key={itemIndex}
              value={item?.value}
              total={total}
              label={item?.label}
            />
          )
        )}
      </BlackContainer>
    </div>
  );
}
