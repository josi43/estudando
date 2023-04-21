import React from "react";
import "../App.css";

export const Input = (props) => {
    const placeholder = ""
  return (
    <form>
      <div className="mb-3">
        <input
          type={props.lacuna}
          className="form-control"
          placeholder={ props.lacuna=="password" ? "Senha": props.lacuna}
        />
      </div>
    </form>
  );
};
