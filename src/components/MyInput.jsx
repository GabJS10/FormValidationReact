import React, { useState, useEffect } from "react";
import useInputs from "../hooks/useInputs";
function MyInput({ id, name, label, type, ...rest }) {
  const { error, handleBlur } = useInputs();
  return (
    <>
      {type != "textarea" ? (
        <input type={type} name={name} id={id} onBlur={handleBlur} {...rest} />
      ) : (
        <textarea
          name={name}
          cols={50}
          rows={5}
          onBlur={handleBlur}
          {...rest}
        ></textarea>
      )}
      {error && <p style={{color:"red"}}>{error[name]}</p>}
    </>
  );
}

export default MyInput;
