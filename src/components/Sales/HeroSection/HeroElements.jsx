import { styled } from "@mui/system";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled("div")({
  background: "#0c0c0c",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 30px",
  height: "800px",
  position: "relative",
  zIndex: 1,

  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 80%)",
    zIndex: 2,
  },
});

export const HeroBg = styled("div")({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
});

export const VideoBg = styled("video")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  background: "#232a34",
});

export const HeroContent = styled("div")({
  zIndex: 3,
  maxWidth: "1200px",
  position: "absolute",
  padding: "8px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const HeroH1 = styled("h1")({
  color: "#fff",
  fontSize: "48px",
  textAlign: "center",

  "@media screen and (max-width: 768px)": {
    fontSize: "40px",
  },

  "@media screen and (max-width: 480px)": {
    fontSize: "32px",
  },
});

export const HeroP = styled("p")({
  color: "#fff",
  fontSize: "32px",
  textAlign: "center",
  maxWidth: "600px",
  fontWeight: 600,
  "@media screen and (max-width: 768px)": {
    fontSize: "28px",
  },

  "@media screen and (max-width: 480px)": {
    fontSize: "26px",
  },
});

export const HeroBtnWrapper = styled("div")({
  marginTop: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const ArrowForward = styled(MdArrowForward)({
  marginLeft: "8px",
  fontSize: "30px",
});

export const ArrowRight = styled(MdKeyboardArrowRight)({
  marginLeft: "8px",
  fontSize: "30px",
});

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

export const InfoRow = styled("div")({
  display: "grid",
  gridAutoColumns: "minmax(auto, 1fr)",
  alignItems: "center",
  gridTemplateAreas: "'col1 col2'",
  "@media screen and (max-width: 768px)": {
    gridTemplateAreas:  "'col2' 'col1'",
  },
});

export const ImgWrap = styled("div")({
  maxWidth: "755px",
  height: "100%",
});

export const Img = styled("img")({
  width: "100%",
  margin: "0 0 10px 0",
  paddingRight: "0",
});
