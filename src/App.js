import * as React from "react";
import "./App.css";
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";
import Homepage from "./components/homepage";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Notif from "./components/notif";
import Alert from "./components/alert";
import Teampage from "./components/Teampage";
import { FullContextProvider } from "./context";


function App() {
  return (

    <div className="App">
      <FullContextProvider>
        <Router>
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/notif" Component={Notif} />
            <Route path="/alert" Component={Alert} />
            <Route path="/dashboard/teams" Component={Teampage} />
          </Routes>
        </Router>
      </FullContextProvider>
    </div>
  );
}

export default App;
