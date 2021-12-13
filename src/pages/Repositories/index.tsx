import React from "react";
import { Box } from "@mui/material";

import { Topbar } from "src/components/Topbar";
import { Paper } from "src/components/Paper";
import { RepositoryFeed } from "./components/RepositoryFeed";
import { NavItemType } from "src/types/NavItemType";

export const Repositories: React.FC = () => {
  const navItems: NavItemType[] = [
    {
      label: "Spoken Language:",
      categories: ["Any", "English"],
    },
    {
      label: "Language:",
      categories: ["Any", "Python"],
    },
    {
      label: "Date range:",
      categories: ["Today", "Week"],
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.secondary",
        minHeight: "100vh",
      }}
    >
      <Topbar content="See what the GitHub community is most excited about today." />
      <Box sx={{ padding: "40px 16px" }}>
        <Paper navItems={navItems} isRepoSelected={true}>
          <RepositoryFeed />
        </Paper>
      </Box>
    </Box>
  );
};
