import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

import { DarkTheme } from "src/theme";
import { Repositories } from "src/pages/Repositories";
import { Developers } from "./pages/Developers";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Repositories />} />
            <Route path="/developers" element={<Developers />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
