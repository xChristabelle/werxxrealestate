import { styled } from "@mui/system";
import { Link } from "react-scroll";

export const Button = styled(Link)(({ primary, big, dark, fontBig }) => ({
  borderRadius: "50px",
  background: primary ? "#01bf71" : "#010606",
  whiteSpace: "nowrap",
  padding: big ? "14px 48px" : "12px 30px",
  color: dark ? "#010606" : "#fff",
  fontSize: fontBig ? "20px" : "16px",
  outline: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    transition: "all 0.2s ease-in-out",
    background: primary ? "#fff" : "#01bf71",
  },
}));
