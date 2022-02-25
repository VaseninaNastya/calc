import { ITheme } from "./themeInterface";

const theme: ITheme = {
  colors: {
    blue: "#28518E",
    lightBlue: "#3A77D1",
    white: "#FFFFFF",
    lightGray: "#F2F2F2",
    pink: "#FF9797",
  },
  fonts: {
    smallHeight: "24px",
    mediumHeight: "36px",
    bigHeight: "56px",
    smallLineHeight: "32px",
    mediumLineHeight: "80px",
    bigLineHeight: "88px",
    smallWeight: "500",
    bigWeight: "700",
    normalType: "normal",
  },
  shadows: {
    boshadow1: "0px 10.267672538757324px 19.7840518951416px 0px #0000002D",
    boxShadow2: "0px 24.720600128173828px 47.63237380981445px 0px #0000003A",
    boxShadow3: "0px 82px 158px 0px #00000059",
    boxShadow4: "0px 4px 4px 0px #00000040",
  },
  rgba: {
    lightestWhite: "rgba(255,255,255,0.12)",
    lighterWhite: "rgba(255,255,255,0.2)",
    lightWhite: "rgba(255,255,255,0.35)",
  },
};

export default theme;
