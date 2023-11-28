import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  imgStart,
  id,
  topLine,
  lightText,
  headline,
  headlineHighlight,
  darkText,
  description,
  description2,
  button,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  accordion,
  tabs,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const CustomTabPanel = ({ children, value, index, ...other }) => {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography sx={{ color: "black" }}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>
                  {headline}
                  <span style={{ color: "#3DF205" }}>{headlineHighlight}</span>
                </Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                {accordion && (
                  <React.Fragment>
                    <Accordion
                      disableGutters
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>1. Dashboard</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Overview of your numbers that can be displayed as one
                          of your boards.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      disableGutters
                      expanded={expanded === "panel2"}
                      onChange={handleChange("panel2")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>2. Goal Tracking</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Set your goals and the system will track your
                          progress.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      disableGutters
                      expanded={expanded === "panel3"}
                      onChange={handleChange("panel3")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>3. Boards</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Multiple display boards to choose from to suit your
                          needs.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      disableGutters
                      expanded={expanded === "panel4"}
                      onChange={handleChange("panel4")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>4. Light/Dark Boards</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Choose from either a Light or Dark themed board.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </React.Fragment>
                )}
                {tabs && (
                  <React.Fragment>
                    <Box sx={{ width: "100%" }}>
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                          value={value}
                          onChange={handleTabChange}
                          aria-label="basic tabs example"
                        >
                          <Tab
                            label="5. Top Ranking Agents"
                            {...a11yProps(0)}
                            sx={{ color: "black" }}
                          />
                          <Tab
                            label="6. Agent Rankings"
                            {...a11yProps(1)}
                            sx={{ color: "black" }}
                          />
                          <Tab
                            label="7. Agent Player Card"
                            {...a11yProps(2)}
                            sx={{ color: "black" }}
                          />
                        </Tabs>
                      </Box>
                      <CustomTabPanel value={value} index={0}>
                        Top 3 Agent pictures and numbers are clearly displayed
                        on the Dashboard.
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={1}>
                        Agent numbers and rank are displayed on the side of the
                        Dashboard.
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={2}>
                        All Agents have a Player Card tracking their business.
                      </CustomTabPanel>
                    </Box>
                  </React.Fragment>
                )}
                {button && (
                  <BtnWrap>
                    <Button
                      to="home"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLabel}
                    </Button>
                  </BtnWrap>
                )}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
