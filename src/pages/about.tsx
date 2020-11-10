/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2020-11-10 15:45:09
 * @Last Modified by: idzeir
 * @Last Modified time: 2020-11-10 17:07:47
 */
import { useEffect, useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import Actions from "../actions";
import { wrapper } from "../store";

const About = ({ tick = 0 }: { tick: number }) => {
  const [time, setTime] = useState({ tick, isServer: true });

  useEffect(() => {
    const task = setInterval(() => {
      setTime({ ...time, tick: time.tick + 3000, isServer: false });
    }, 3000);

    return () => {
      clearInterval(task);
    };
  }, [time]);

  return (
    <ul>
      <li style={{ color: time.isServer ? "#f00" : "#00f" }}>
        <Link href="/">
          <a>当前时间: {new Date(time.tick).toString()}</a>
        </Link>
      </li>
    </ul>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(({ store }) => {
  console.log("2. Page.getServerSideProps uses the store to dispatch things");
  store.dispatch({
    type: Actions.TICKER,
    payload: new Date(
      "Tue Nov 10 2020 16:00:00 GMT+0800 (中国标准时间)"
    ).getTime(),
  });
});

export default connect((state: any) => ({
  tick: state.get("about").get("tick"),
}))(About);
