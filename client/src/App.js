import "./App.css";
import Homepage from "./pages/home/Homepage";
import Settings from "./pages/settings/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "./context/Context";
import Topbar from "./Dashboard/scenes/global/Topbar";
import Sidebar from "./Dashboard/scenes/global/Sidebar";
import Dashboard from "./Dashboard/scenes/dashboard";
import Team from "./Dashboard/scenes/team";
import Invoices from "./Dashboard/scenes/invoices";
import Contacts from "./Dashboard/scenes/contacts";
import Form from "./Dashboard/scenes/form";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Dashboard/theme";
import Calendar from "./Dashboard/scenes/calendar/calendar";
import LawyerList from "./Clients/Lawyers List/LawyerList";
import About from "./Lawyers/Lawyer About/about";
import Details from "./Clients/FileCase/Details";
import Requests from "./Clients/Request List/Requests";
import Id from "./Lawyers/Lawyer Id/LawyerId";
import Landing from "./pages/LandingPage/Landing";
import Clientid from "./Clients/Client Id/Clientid";
import ClientList from "./Lawyers/Client List/ClientList";
import ClientAbout from "./Clients/Clients About/ClientAbout";
import PostsCard from "./Clients/Request List/PostsCard";
import Profile from "./Clients/Profile/Profile";
import ChatRegister from "./chat/pages/ChatRegister";
import ChatLogin from "./chat/pages/ChatLogin";
import SetAvatar from "./chat/components/SetAvatar";
import Chat from "./chat/pages/Chat";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const { user } = useContext(Context);
  return (
    <Router>
      {/* <TopBars /> */}
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="Dashboard_app">
            {user ? <Sidebar user={user} isSidebar={isSidebar} /> : ""}
            <main className="content" style={{ width: "100%" }}>
              {user ? <Topbar setIsSidebar={isSidebar} /> : ""}
              <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/lawyers" element={<Homepage />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/login" element={user ? <LawyerList /> : <Id />} />
                <Route path="/chatregister" element={<ChatRegister />} />
                <Route path="/chatlogin" element={<ChatLogin />} />
                <Route path="/setAvatar" element={<SetAvatar />} />
                <Route path="/chat" element={<Chat />} />
                <Route
                  path="/register"
                  element={user ? <LawyerList /> : <Id />}
                />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/lawyerlist" element={<LawyerList />} />
                <Route path="/clientlist" element={<ClientList />} />
                <Route path="/about" element={<About />} />
                <Route path="/Details" element={<Details />} />
                <Route path="/postcard" element={<PostsCard />} />
                <Route path="/requestlist" element={<Requests />} />
                <Route path="/lawyers/:id" element={<About />} />
                <Route path="/client/:id" element={<ClientAbout />} />
                <Route path="/settings" element={<Settings />}></Route>
                <Route path="/lawyerlogin" element={<Id />} />
                <Route path="/clientlogin" element={<Clientid />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  );
}

export default App;
