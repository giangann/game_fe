import { Box, Container, Grid, Stack, styled, Typography } from "@mui/material";
import React from "react";
import userAvatar from "assets/images/user_avatar.png";
import vietnamFlag from "assets/images/vietnam_flag.png";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Brightness6RoundedIcon from "@mui/icons-material/Brightness6Rounded";
import { color } from "styles";
import { fontWeight } from "@mui/system";

function Header() {
  return (
    <Grid container>
      <Grid
        item
        xs={2}
        sx={{
          backgroundColor: color.logo,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <TypographyBranch>Vương Mệnh</TypographyBranch>
        </Container>
      </Grid>
      <Grid item xs={10}>
        <Stack
          direction="row"
          gap={5}
          justifyContent="flex-end"
          p={1}
          pr={4}
          sx={{ backgroundColor: "#2c2c34", alignItems: "center" }}
        >
          <Box>
            <WhiteToogleThemeIcon />
          </Box>
          <Box>
            <img src={vietnamFlag} alt="vietnam flag" />
          </Box>
          <Box>
            <WhiteNotificationIcon />
          </Box>
          <Box>
            <img
              style={{ width: "36px", height: "36px", borderRadius: "50%" }}
              src={userAvatar}
              alt="avatar"
            />{" "}
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

const TypographyBranch = styled(Typography)({
  color: color.logo_text,
  textTransform: "capitalize",
  fontSize: "21px",
  fontWeight: 500,
  textAlign: "center",
});

const WhiteNotificationIcon = styled(NotificationsNoneOutlinedIcon)({
  color: "white",
});

const WhiteToogleThemeIcon = styled(Brightness6RoundedIcon)({
  color: "white",
});

export default Header;
