/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef, useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import style from "./style.module.scss";

export const InputPassword = forwardRef(({ label, error, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(false);
  const type = isHidden ? "text" : "password";

  return (
    <div className={style.inputBox}>
      <label className="label">{label}</label>
      <div className={style.inputGrid}>
        <input className="inpt" type={type} ref={ref} {...rest} />
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <FaRegEye size={21} /> : <FaRegEyeSlash size={21} />}
        </button>
      </div>
      {error ? <p className="paragraph error">{error.message}</p> : null}
    </div>
  );
});
