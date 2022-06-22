import React from "react";
import { CardCustom } from "./CardCustom";
import { Page } from "./Page";

function Content() {
  const content = ["Ví Momo, Zalo Pay, ViettelPay", "100k = 1250 bạc"];
  const formItem = ["userName", "passWord", "captcha"];
  return (
    <Page
      title="Đăng nhập"
      content={content}
      formItem={formItem}
      component={<CardCustom />}
    ></Page>
  );
}

export default Content;
