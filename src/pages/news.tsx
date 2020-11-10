/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2020-11-10 17:27:50
 * @Last Modified by:   idzeir
 * @Last Modified time: 2020-11-10 17:27:50
 */
import { NextPage } from "next";

const NewsPage: NextPage<any> = ({ msg }: { msg: string }) => {
  return <div>{msg}</div>;
};

NewsPage.getInitialProps = ({ store }) => {
  console.log(store);
  return { msg: "nihaonihao" };
};

export default NewsPage;
