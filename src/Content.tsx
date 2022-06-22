import React from "react";
import { Page } from "./Page";

function Content() {
  const formItem = ["userName", "passWord", "captcha"];
  return <Page title="Đăng nhập" formItem={formItem}></Page>;
}

export default Content;
