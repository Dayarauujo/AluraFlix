import React from "react";
import { InputContainer } from "./styled";

function Input({ id, title, type, defaultValue }) {
  return (
    <InputContainer>
      <label htmlFor={id}>{title}</label>
      {type === "area" ? (
        <textarea defaultValue={defaultValue} id={id} name={id} required />
      ) : (
        <input
          type="text"
          defaultValue={defaultValue}
          id={id}
          name={id}
          required
        />
      )}
    </InputContainer>
  );
}

export default Input;
