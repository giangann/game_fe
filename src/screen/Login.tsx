import { Alert, Typography } from "@mui/material";
import React from "react";
import { Page } from "./Page";

function Login() {
  return <Page title="Đăng nhập" component={<LoginNotice />} />;
}

const LoginNotice = () => {
  const alertItemText = [
    "Bạn quên mật khẩu? bấm vào đây để lấy lại.",
    "Bạn chưa có tài khoản? bấm vào đây để đăng ký mới",
    "Liên hệ admin: zalo 090.445.4444 hoặc Telegram +84904454444",
  ];
  return (
    <Alert severity="info">
      {alertItemText.map((item, index) => (
        <Typography variant="body2">
          {index + 1}. {item}
        </Typography>
      ))}
    </Alert>
  );
};

export default Login;
