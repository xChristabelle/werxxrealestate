import { styled } from "@mui/system";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled("nav")(({ scrollNav }) => ({
  background: scrollNav ? "#444444" : "transparent",
  height: "120px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1rem",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 10,
  boxShadow: scrollNav ? "0px 0px 10px rgba(0, 0, 0, 1)" : "none",
  transition: "0.5s all ease",
  "@media screen and (max-width: 960px)": {
    position: scrollNav ? "fixed" : "sticky",
  },
}));


export const NavbarContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  height: "80px",
  zIndex: 1,
  width: "100%",
  padding: "0 24px",
  maxWidth: "1100px",
});

export const NavLogo = styled(LinkRouter)({
  color: "#fff",
  justifySelf: "flex-start",
  cursor: "pointer",
  fontSize: "1rem",
  display: "flex",
  alignItems: "center",
  marginLeft: "24px",
  textDecoration: "none",
});

export const MobileIcon = styled("div")({
  display: "none",
  "@media screen and (max-width: 768px)": {
    display: "block",
    position: "absolute",
    top: 0,
    right: 0,
    transform: "translate(-100%, 60%)",
    fontSize: "1.8rem",
    cursor: "pointer",
    color: "#fff",
  },
});

export const NavMenu = styled("ul")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  listStyle: "none",
  textAlign: "center",
  margin: "auto",
  "@media screen and (max-width: 768px)": {
    display: "none",
  },
});

export const NavItem = styled("li")({
  height: "80px",
});

export const NavLinks = styled(LinkScroll)({
  color: "#fff",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  padding: "0 1rem",
  height: "100%",
  cursor: "pointer",
  "&.active": {
    borderBottom: "3px solid #01bf71",
  },
});

export const NavBtn = styled("nav")({
  display: "flex",
  alignItems: "center",
  "@media screen and (max-width: 768px)": {
    display: "none",
  },
});

export const NavBtnLink = styled("a")({
  borderRadius: "50px",
  background: "#01bf71",
  whiteSpace: "nowrap",
  padding: "10px 22px",
  color: "#010606",
  fontSize: "16px",
  outline: "none",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  textDecoration: "none",
  "&:hover": {
    transition: "all 0.2s ease-in-out",
    background: "#fff",
    color: "#010606",
  },
});
