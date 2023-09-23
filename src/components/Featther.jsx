import React from "react";
import styles from "./Featther.module.css";

function Featther({ type }) {
  return (
    <div
      className={`feather absolute ${styles[type]} w-[20rem] h-[23rem] rounded-full`}
    ></div>
  );
}

export default Featther;
