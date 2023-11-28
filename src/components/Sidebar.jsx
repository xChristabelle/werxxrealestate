import React, { useEffect, useState } from "react";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  DashboardOutlined,
  PointOfSaleOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  InboxOutlined,
  BusinessOutlined,
  BarChartOutlined,
  EventOutlined,
  PersonOutlined,
  SupportAgentOutlined,
  HouseOutlined,
  ExpandLess,
  ExpandMore,
  ArticleOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "@/components/FlexBetween";
import profileImage from "@/assets/profile.png";
const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Overview",
    icon: <DashboardOutlined />,
  },
  {
    text: "User",
    icon: null,
  },
  {
    text: "Inbox",
    icon: <InboxOutlined />,
  },
  {
    text: "Transaction",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Newsfeed",
    icon: <ArticleOutlined />,
  },
  {
    text: "Office",
    icon: <BusinessOutlined />,
  },
  {
    text: "Marketing Center",
    text_link: "marketing-center",
    icon: <BarChartOutlined />,
  },
  {
    text: "Events",
    icon: <EventOutlined />,
  },
  {
    text: "Agents",
    icon: <SupportAgentOutlined />,
    collapsable: true,
    children: [
      {
        text: "View Agents",
        text_link: "agents",
        icon: <SupportAgentOutlined />,
      },
      {
        text: "Add Agents",
        text_link: "agents/add",
        icon: <SupportAgentOutlined />,
      },
    ],
  },
  {
    text: "Properties",
    icon: <HouseOutlined />,
    collapsable: true,
    children: [
      {
        text: "View Properties",
        text_link: "properties",
        icon: <HouseOutlined />,
      },
      {
        text: "Add Properties",
        text_link: "properties/add",
        icon: <HouseOutlined />,
      },
      {
        text: "Import Properties",
        text_link: "properties/import",
        icon: <HouseOutlined />,
      },
    ],
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Users",
    icon: <PersonOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
    const handleOutsideClick = (event) => {
      // Close all collapsibles when clicking outside the collapsible area
      if (isSidebarOpen && event.target.closest(".MuiDrawer-paper") === null) {
        setOpen({});
      }
    };

    // Add event listener for clicks outside the collapsible area
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [pathname, isSidebarOpen]);

  const handleClick = (text) => {
    setOpen((prevOpen) => {
      const newOpen = { ...prevOpen };

      // Close all collapsibles except the one being clicked
      Object.keys(newOpen).forEach((key) => {
        if (key !== text && newOpen[key]) {
          newOpen[key] = false;
        }
      });

      // Toggle the state of the clicked collapsible
      newOpen[text] = !newOpen[text];

      return newOpen;
    });
  };

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    WERX
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(
                ({ text, text_link, icon, collapsable, children }) => {
                  if (!icon) {
                    return (
                      <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                        {text}
                      </Typography>
                    );
                  }
                  const lcText =
                    text_link != null
                      ? text_link.toLowerCase()
                      : text.toLowerCase();
                  const isOpen = Boolean(open[text]);
                  return (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={
                        children
                          ? { flexDirection: "column", alignItems: "start" }
                          : {}
                      }
                    >
                      {collapsable ? (
                        <React.Fragment>
                          <ListItemButton
                            onClick={() => handleClick(text)}
                            sx={{
                              backgroundColor:
                                active === lcText
                                  ? theme.palette.secondary[300]
                                  : "transparent",
                              color:
                                active === lcText
                                  ? theme.palette.primary[600]
                                  : theme.palette.secondary[100],
                              width: "100%",
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                ml: "2rem",
                                color:
                                  active === lcText
                                    ? theme.palette.primary[600]
                                    : theme.palette.secondary[200],
                              }}
                            >
                              {icon}
                            </ListItemIcon>
                            <ListItemText primary={text} />

                            {isOpen ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>
                          <Collapse
                            in={isOpen}
                            timeout="auto"
                            unmountOnExit
                            sx={{ width: "100%" }}
                          >
                            <List component="div" disablePadding>
                              <Collapse
                                in={isOpen}
                                sx={{
                                  flexDirection: "column",
                                  alignItems: "end",
                                }}
                              >
                                {children.map((child) => (
                                  <ListItemButton
                                    key={child.text}
                                    sx={{ pl: "2rem" }}
                                    onClick={() => {
                                      navigate(
                                        `/${child.text_link.toLowerCase()}`
                                      );
                                      setActive(child.text_link.toLowerCase());
                                    }}
                                  >
                                    <ListItemIcon
                                      sx={{
                                        display: "flex",
                                        justifyContent: "end",
                                      }}
                                    >
                                      {child.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={child.text}
                                      sx={{
                                        display: "flex",
                                        paddingLeft: 3,
                                      }}
                                    />
                                  </ListItemButton>
                                ))}
                              </Collapse>
                            </List>
                          </Collapse>
                        </React.Fragment>
                      ) : (
                        <ListItemButton
                          onClick={() => {
                            navigate(`/${lcText}`);
                            setActive(lcText);
                          }}
                          sx={{
                            backgroundColor:
                              active === lcText
                                ? theme.palette.secondary[300]
                                : "transparent",
                            color:
                              active === lcText
                                ? theme.palette.primary[600]
                                : theme.palette.secondary[100],
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              ml: "2rem",
                              color:
                                active === lcText
                                  ? theme.palette.primary[600]
                                  : theme.palette.secondary[200],
                            }}
                          >
                            {icon}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                          {active === lcText && (
                            <ChevronRightOutlined sx={{ ml: "auto" }} />
                          )}
                        </ListItemButton>
                      )}
                    </ListItem>
                  );
                }
              )}
            </List>
          </Box>

          <Box
            position="absolute"
            bottom="2rem"
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "100px",
            }}
          >
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.firstName} {user.middleName} {user.lastName}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px ",
                }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
