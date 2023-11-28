import React, {useLayoutEffect, useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeSettings } from "@/theme";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { setInitialCDAList } from "@/state";
import { useGetCDAListQuery } from "@/state/api";

import Sales from "@/scenes/Sales";
import Layout from "@/scenes/layout";
import Dashboard from "@/scenes/dashboard";
import Inbox from "@/scenes/inbox";
import Office from "@/scenes/office";
import MarketingCenter from "@/scenes/marketing_center";
import Events from "@/scenes/events";
import Admin from "@/scenes/admin";
import Performance from "@/scenes/performance";
import Users from "@/scenes/users";
import SignIn from "@/scenes/credentials/signin";
import SignUp from "@/scenes/credentials/signup";
import Overview from "@/scenes/overview";
import Properties from "@/scenes/properties";
import AddProperties from "@/scenes/properties/add"; 
import Agents from "@/scenes/agents"; 
import AddAgents from "@/scenes/agents/add"; 
import ImportProperties from "@/scenes/properties/import";
import Newsfeed from "@/scenes/newsfeed";
import Transaction from "@/scenes/transaction";
import AddTransaction from "@/scenes/transaction/add";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const dispatch = useDispatch();
  const { data: cdaListData } = useGetCDAListQuery();

  useLayoutEffect(() => {
    if (cdaListData) {
      dispatch(setInitialCDAList(cdaListData));
    }
  }, [dispatch, cdaListData]);

  return (
    <React.Fragment>
      <BrowserRouter> 
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Sales />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
              <Route path="/overview" element={<Overview />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/transaction" element={<Transaction />} />
              <Route path="/transaction/add" element={<AddTransaction />} />
              <Route path="/newsfeed" element={<Newsfeed />} />
              <Route path="/office" element={<Office />} />
              <Route path="/marketing-center" element={<MarketingCenter />} />
              <Route path="/events" element={<Events />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/agents/add" element={<AddAgents />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/add" element={<AddProperties />} />
              <Route path="/properties/import" element={<ImportProperties />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/users" element={<Users />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
