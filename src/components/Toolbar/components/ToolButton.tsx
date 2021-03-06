import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ToolButtonProps {
  content: string;
  isSelected: boolean;
  path: string;
}

export const ToolButton: React.FC<ToolButtonProps> = ({
  content,
  isSelected,
  path,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };

  return (
    <Button
      sx={{
        borderColor: "secondary.main",
        bgcolor: `${isSelected ? "primary.main" : "background.default"}`,
        color: "white",
        fontWeight: "600",
        fontSize: "14px",
        textTransform: "none",
        padding: "5px 16px",
        ":hover": {
          bgcolor: `${isSelected ? "primary.main" : "secondary.main"}`,
        },
      }}
      onClick={() => {
        if (!isSelected) handleClick();
      }}
    >
      {content}
    </Button>
  );
};
