import React from "react";
import { InputContainer } from "./styled";

function Input({ id, title, type, defaultValue = "", selectValues }) {
  const getInput = () => {
    if (type === "area") {
      return (
        <textarea defaultValue={defaultValue} id={id} name={id} required />
      );
    } else if (type === "select") {
      return (
        <select id={id} name={id} required defaultValue={defaultValue}>
          <option disabled value="">
            -- Selecione uma opção --
          </option>
          {selectValues.map((value) => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      );
    }
    return (
      <input
        type="text"
        defaultValue={defaultValue}
        id={id}
        name={id}
        required
      />
    );
  };

  return (
    <InputContainer>
      <label htmlFor={id}>{title}</label>
      {getInput()}
    </InputContainer>
  );
}

export default Input;
