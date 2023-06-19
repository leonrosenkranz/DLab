import React from "react";

const sizeClasses = {
  txtSairaCondensedRegular24GreenA70001: "font-normal font-sairacondensed",
  txtSairaCondensedRegular24WhiteA700: "font-normal font-sairacondensed",
  txtSairaCondensedLight12: "font-light font-sairacondensed",
  txtSairaCondensedRegular18WhiteA700: "font-normal font-sairacondensed",
  txtSairaCondensedMedium16WhiteA700: "font-medium font-sairacondensed",
  txtSairaCondensedSemiBold30: "font-sairacondensed font-semibold",
  txtSairaCondensedRegular24: "font-normal font-sairacondensed",
  txtSairaCondensedSemiBold10: "font-sairacondensed font-semibold",
  txtSairaCondensedBold30: "font-bold font-sairacondensed",
  txtSairaCondensedBold50: "font-bold font-sairacondensed",
  txtSairaCondensedSemiBold20GreenA70001: "font-sairacondensed font-semibold",
  txtSairaCondensedBold55: "font-bold font-sairacondensed",
  txtSairaCondensedMedium20WhiteA700cc: "font-medium font-sairacondensed",
  txtSairaCondensedRegular40: "font-normal font-sairacondensed",
  txtSairaCondensedMedium13Black900: "font-medium font-sairacondensed",
  txtSairaCondensedSemiBold25: "font-sairacondensed font-semibold",
  txtSairaCondensedMedium20: "font-medium font-sairacondensed",
  txtSairaCondensedSemiBold15Black900: "font-sairacondensed font-semibold",
  txtRobotoRegular40: "font-normal font-roboto",
  txtSairaCondensedBold50WhiteA700cc: "font-bold font-sairacondensed",
  txtSairaCondensedMedium25: "font-medium font-sairacondensed",
  txtSairaCondensedSemiBold20WhiteA700: "font-sairacondensed font-semibold",
  txtSairaCondensedRegular12: "font-normal font-sairacondensed",
  txtSairaCondensedSemiBold40: "font-sairacondensed font-semibold",
  txtSairaCondensedSemiBold20: "font-sairacondensed font-semibold",
  txtSairaCondensedBold40: "font-bold font-sairacondensed",
  txtSairaCondensedRegular18: "font-normal font-sairacondensed",
  txtSairaCondensedBold60: "font-bold font-sairacondensed",
  txtSairaCondensedSemiBold15: "font-sairacondensed font-semibold",
  txtSairaCondensedSemiBold15GreenA70001: "font-sairacondensed font-semibold",
  txtSairaCondensedMedium18: "font-medium font-sairacondensed",
  txtSairaCondensedSemiBold12: "font-sairacondensed font-semibold",
  txtSairaCondensedSemiBold11: "font-sairacondensed font-semibold",
  txtSairaCondensedSemiBold35: "font-sairacondensed font-semibold",
  txtSairaCondensedSemiBold13: "font-sairacondensed font-semibold",
  txtSairaCondensedMedium32: "font-medium font-sairacondensed",
  txtSairaCondensedMedium10: "font-medium font-sairacondensed",
  txtSairaCondensedMedium13: "font-medium font-sairacondensed",
  txtSairaCondensedMedium16: "font-medium font-sairacondensed",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
