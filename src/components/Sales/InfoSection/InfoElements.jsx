import { styled } from "@mui/system";

export const InfoContainer = styled("div")(({ lightBg }) => ({
  color: "#fff",
  background: lightBg ? "#f9f9f9" : "transparent",
  "@media screen and (max-width: 768px)": {
    padding: "100px 0",
  },
}));

export const InfoWrapper = styled("div")({
  display: "grid",
  zIndex: 1,
  height: "860px",
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 24px",
  justifyContent: "center",
});

export const InfoRow = styled("div")(({ imgStart }) => ({
  display: "grid",
  gridAutoColumns: "minmax(auto, 1fr)",
  alignItems: "center",
  gridTemplateAreas: imgStart
    ? "'col2 col1'"
    : "'col1 col2'",
  "@media screen and (max-width: 768px)": {
    gridTemplateAreas: imgStart
      ? "'col1' 'col2'"
      : "'col1 col1' 'col2 col2'",
  },
}));

export const Column1 = styled("div")({
  marginBottom: "15px",
  padding: "0px 15px",
  gridArea: "col1",
});

export const Column2 = styled("div")({
  marginBottom: "15px",
  padding: "0 15px",
  gridArea: "col2",
});

export const TextWrapper = styled("div")({
  maxWidth: "540px",
  paddingTop: "0",
  paddingBottom: "60px",
});

export const TopLine = styled("p")({
  color: "#01bf71",
  fontSize: "16px",
  lineHeight: "16px",
  fontWeight: 700,
  letterSpacing: "1.4px",
  textTransform: "uppercase",
  marginBottom: "16px",
});

export const Heading = styled("h1")(({ lightText }) => ({
  marginBottom: "24px",
  fontSize: "32px",
  lineHeight: 1.1,
  fontWeight: 600,
  color: lightText ? "#f7f8fa" : "#010606",
  "@media screen and (max-width: 480px)": {
    fontSize: "32px",
  },
}));

export const Subtitle = styled("p")(({ darkText }) => ({
  maxWidth: "440px",
  marginBottom: "35px",
  fontSize: "18px",
  lineHeight: "24px",
  color: darkText ? "#010606" : "#fff",
}));

export const BtnWrap = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
});

export const ImgWrap = styled("div")({
  maxWidth: "555px",
  height: "100%",
});

export const Img = styled("img")({
  width: "100%",
  margin: "0 0 10px 0",
  paddingRight: "0",
});
