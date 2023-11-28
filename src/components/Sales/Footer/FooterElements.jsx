import { Link } from "react-router-dom";
import { styled } from "@mui/system";

export const FooterContainer = styled("footer")({
  backgroundColor: "transparent",
});

export const FooterWrap = styled("div")({
  padding: "48px 24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "1100px",
  margin: "0 auto",
});

export const FooterLinksContainer = styled("div")({
  display: "flex",
  justifyContent: "center",

  "@media screen and (max-width: 820px)": {
    paddingTop: "32px",
  },
});

export const FooterLinksWrapper = styled("div")({
  display: "flex",

  "@media screen and (max-width: 820px)": {
    flexDirection: "column",
  },
});

export const FooterLinkItems = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "16px",
  textAlign: "left",
  width: "160px",
  boxSizing: "border-box",
  color: "#fff",

  "@media screen and (max-width: 420px)": {
    margin: "0",
    padding: "10px",
    width: "100%",
  },
});

export const FooterLinkTitle = styled("h1")({
  fontSize: "14px",
  marginBottom: "16px",
});

export const FooterLink = styled(Link)({
  color: "#fff",
  textDecoration: "none",
  marginBottom: "0.5rem",
  fontSize: "14px",

  "&:hover": {
    color: "#01bf71",
    transition: "0.3s ease-out",
  },
});

export const SocialMedia = styled("section")({
  maxWidth: "1000px",
  width: "100%",
});

export const SocialMediaWrap = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1100px",
  margin: "40px auto 0 auto",

  "@media screen and (max-width: 820px)": {
    flexDirection: "column",
  },
});

export const SocialLogo = styled(Link)({
  color: "#fff",
  justifySelf: "start",
  cursor: "pointer",
  textDecoration: "none",
  fontSize: "1.5rem",
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
  fontWeight: "bold",
});

export const WebsiteRights = styled("small")({
  color: "#fff",
  marginBottom: "16px",
});

export const SocialIcons = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "240px",
});

export const SocialIconLink = styled("a")({
  color: "#fff",
  fontSize: "24px",
});
