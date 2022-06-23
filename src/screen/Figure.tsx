import { Alert } from "@mui/material";
import { TableCustom } from "component/Layout/TableCustom";
import React from "react";
import { Page } from "./Page";

function Figure() {
  return (
    <>
      <Page
        title="Lựa chọn nhân vật"
        component={
          <Alert severity="error">
            Bạn chưa chọn nhân vật nào cho tài khoản
          </Alert>
        }
      ></Page>
      ;
      <Page title="Nhân vật thuộc tài khoản" component={<TableCustom />}></Page>
      ;
    </>
  );
}

export default Figure;
