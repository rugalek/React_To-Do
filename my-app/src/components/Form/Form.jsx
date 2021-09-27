import { useState } from "react";

import { Button } from "../Button";
import { Input } from "../Input";

function getId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export function Form({ onClick }) {
  const [text, setText] = useState("");

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  const onClickAdd = (e) => {
    e.preventDefault();
    const todoshka = {
      text: text,
      checked: false,
      id: getId(),
    };

    onClick(todoshka);

    setText("");
  };
  const keySubmit = (e) => {
    if (e.key === "Enter") {
      onClickAdd(e);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "10px",
        fontSize: "5px",
      }}
    >
      <Input value={text} onChange={onChangeInput} onKeyDown={keySubmit} placeholder="Сделай же что-нибудь!" />
      <Button text="+" onClick={onClickAdd} />
    </div>
  );
}
