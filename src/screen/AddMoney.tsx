import React from "react";
import { CardCustom } from "component/Layout/CardCustom";
import { color } from "styles";
import { Page } from "./Page";

function AddMoney() {
  const content = ["Ví Momo, Zalo Pay, ViettelPay", "100k = 1250 bạc"];
  const formItem = ["userName", "passWord", "captcha"];
  const listComponent = [
    <CardCustom title="Thẻ Reset" content={content} color={color.card_green} />,
    <CardCustom title="Bank" content={content} color={color.card_yellow} />,
    <CardCustom title="Bank" content={content} color={color.card_blue} />,
  ];
  const listComponentLength = listComponent.length;

  console.log("length", listComponentLength);
  return (
    <Page
      title="Nạp tiền"
      formItem={formItem}
      component={listComponent}
      listComponentLength={listComponentLength}
      helperText="Bạn có vấn đề cần hỗ trợ, vui lòng nhắn tin đến Zalo/Viber/Telegram +84904.45.44.44. Các cách nạp thẻ:

      "
    ></Page>
  );
}

export default AddMoney;
