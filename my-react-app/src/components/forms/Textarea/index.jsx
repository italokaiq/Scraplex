/* eslint-disable react/prop-types */
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Textarea = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div>
      <div>
        <label className="label">{label}</label>
        <textarea ref={ref} {...rest} />
      </div>
    </div>
  );
});
