import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { color } from "styles";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AllInboxOutlinedIcon from "@mui/icons-material/AllInboxOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

function Sidebar() {
  const sidebarItem = [
    {
      name: "Nhân vật",
      icon: <AccountCircleOutlinedIcon />,
    },
    {
      name: "Nạp thẻ",
      icon: <AttachMoneyOutlinedIcon />,
    },
    {
      name: "Hòm đồ",
      icon: <AllInboxOutlinedIcon />,
    },
    {
      name: "Thông báo",
      icon: <HomeOutlinedIcon />,
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: color.sidebar,
        color: color.lightWhite,
        height: "fit-content",
        minHeight: "100vh",
        paddingLeft: "10px",
      }}
    >
      {sidebarItem.map((item, index) => (
        <Stack
          direction="row"
          key={index}
          sx={{ padding: "10px", alignItems: "center" }}
          gap={2}
        >
          <>{item.icon}</>
          <Typography variant="body2">{item.name}</Typography>
        </Stack>
      ))}
    </Box>
  );
}

export default Sidebar;
