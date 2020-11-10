/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2020-11-10 17:22:13
 * @Last Modified by: idzeir
 * @Last Modified time: 2020-11-10 17:23:26
 */
import { NextPage } from "next";
import { useSelector } from "react-redux";
import Actions from "../actions";
import { wrapper } from "../store";

export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  store.dispatch({ type: Actions.TICKER, payload: Date.now() });
});

const Page: NextPage = () => {
  const { tick = 0 } = useSelector((state: any) =>
    state.get("about").get("tick")
  );
  return <div>{new Date(tick).toString()}</div>;
};

export default Page;
