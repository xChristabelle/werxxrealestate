import { styled } from "@mui/system";

export const FormWrap = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  "@media screen and (max-width: 400px)": {
    height: "80%",
  },
});

export const FormContent = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  "@media screen and (max-width: 480px)": {
    padding: 0, // Remove padding
  },
});

export const Form = styled("form")({
  maxWidth: "600px",
  height: "auto",
  width: "100%",
  zIndex: 1,
  display: "grid",
  margin: "0 auto",

  "@media screen and (max-width: 768px)": {
    padding: "32px 0", // Change padding to 32px top and bottom, 0 left and right
    boxShadow: "none",
    border: "none",
  },

  "@media screen and (max-width: 400px)": {
    padding: "32px 0", // Change padding to 32px top and bottom, 0 left and right
  },
});

export const FormLabel = styled("label")({
  marginBottom: "8px",
  fontSize: "14px",
  color: "#000",
});

export const FormInput = styled("input")({
  padding: "16px 16px",
  marginBottom: "16px",
  border: "none",
  borderRadius: "4px",
});

export const FormTextArea = styled("textarea")({
  padding: "16px 16px",
  marginBottom: "16px",
  border: "none",
  borderRadius: "4px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.9)", // match Form box-shadow
  width: "100%",
});

export const FormSelect = styled("select")({
  padding: "16px 16px",
  marginBottom: "16px",
  border: "none",
  borderRadius: "4px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.9)", // match Form box-shadow
  width: "100%",
});

export const FormButton = styled("button")({
  background: "#01bf71",
  padding: "16px 0",
  border: "none",
  borderRadius: "4px",
  color: "#000",
  fontSize: "20px",
  cursor: "pointer",
});

export const Text = styled("span")({
  textAlign: "center",
  marginTop: "16px",
  color: "#fff",
  fontSize: "14px",
});

export const FormH1 = styled("h1")({
  marginBottom: "16px",
  color: "#fff",
  fontSize: "20px",
  fontWeight: 400,
  textAlign: "center",
});

export const FormRow = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "16px",
  padding: "0 10px",

  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
    padding: "0",
  },
});

export const HalfWidthInput = styled("input")({
  padding: "16px 16px",
  marginBottom: "8px",
  border: "none",
  borderRadius: "4px",  
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.9)",
  width: "100%",
  boxSizing: "border-box",

  "@media screen and (max-width: 768px)": {
    width: "100%",
  },
});

export const InfoContainer = styled("div", {
  lightBg: false,
})`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "transparent")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    padding-bottom: 250px;
  }
`;

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

export const Column3 = styled("div")({
  padding: "5px",
  gridArea: "col2",
});

export const TextWrapper = styled("div")({
  maxWidth: "540px",
  paddingTop: "0",
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

export const Heading = styled("h1") ({
  fontSize: '32px',
  lineHeight: 1.1,
  fontWeight: 600,
  color:  "#010606",
  "@media screen and (max-width: 480px)": {
    fontSize: '32px',
  }
})

export const Subtitle = styled("p")({
  maxWidth: "440px",
  fontSize: "18px",
  lineHeight: "24px",
  color: "#010606",
});

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
