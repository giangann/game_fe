import React from "react";
import { CardCustom } from "component/Layout/CardCustom";
import { color } from "styles";
import { Page } from "./Page";
import { Stack } from "@mui/material";

function AddMoney() {
  return (
    <Page
      title="Nạp tiền"
      // formItem={formItem}
      component={<PayMethod />}
      helperText="Bạn có vấn đề cần hỗ trợ, vui lòng nhắn tin đến Zalo/Viber/Telegram +84904.45.44.44. Các cách nạp thẻ:

      "
    ></Page>
  );
}

interface PayMethodProps {
  listMethod?: React.ReactElement;
  listMethodLength?: number;
}
const PayMethod = () => {
  const content = ["Ví Momo, Zalo Pay, ViettelPay", "100k = 1250 bạc"];
  const listComponent = [
    <CardCustom title="Thẻ Reset" content={content} color={color.card_green} />,
    <CardCustom title="Bank" content={content} color={color.card_yellow} />,
    <CardCustom title="Bank" content={content} color={color.card_blue} />,
  ];

  return (
    <Stack sx={{ justifyContent: "space-between" }} direction="row">
      {listComponent.map((item, index) => item)}
    </Stack>
  );
};

export default AddMoney;
