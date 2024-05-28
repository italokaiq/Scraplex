/* eslint-disable react/prop-types */
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name, react/prop-types
export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div>
      <label className="label">{label}</label>
      <input className="inpt" ref={ref} {...rest} />
      {error ? <p className="paragraph error">{error.message}</p> : null}
    </div>
  );
});
