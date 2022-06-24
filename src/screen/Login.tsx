import { Alert, Typography } from "@mui/material";
import FormCustom from "component/Form/FormCustom";
import React from "react";
import { Page } from "./Page";

function Login() {
  return (
    <Page title="Đăng nhập" component={[<LoginNotice />, <LoginForm />]} />
  );
}

const LoginForm = () => {
  return <FormCustom />;
};

const LoginNotice = () => {
  const alertItemText = [
    "Bạn quên mật khẩu? bấm vào đây để lấy lại.",
    "Bạn chưa có tài khoản? bấm vào đây để đăng ký mới",
    "Liên hệ admin: zalo 090.445.4444 hoặc Telegram +84904454444",
  ];
  return (
    <Alert severity="info">
      {alertItemText.map((item, index) => (
        <Typography key={index} variant="body2">
          {index + 1}. {item}
        </Typography>
      ))}
    </Alert>
  );
};

export default Login;
