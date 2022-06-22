import React from "react";
<<<<<<< HEAD:src/Content.tsx
import { CardCustom } from "./CardCustom";
import { Page } from "./Page";
=======
import { Page } from "../../screen/Page";
>>>>>>> aad61eb226a82b189974a22c1a6ee2483835ea13:src/component/Layout/Content.tsx

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
