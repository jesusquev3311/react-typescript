import React, { useState } from "react";
import { Sub } from "../types.d.tsx";

interface FormState {
  inputValues: Sub;
}

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    nick: "",
    avatar: "",
    subMonths: 0,
    description: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValues.nick}
        onChange={handleChange}
        name="nick"
        placeholder="nick"
      />
      <input
        type="text"
        value={inputValues.avatar}
        onChange={handleChange}
        name="avatar"
        placeholder="avatar"
      />
      <input
        type="number"
        value={inputValues.subMonths}
        onChange={handleChange}
        name="subMonths"
        placeholder="subMonths"
      />
      <textarea
        value={inputValues.description}
        onChange={handleChange}
        name="description"
        placeholder="description"
      />
      <button type="submit">save new sub</button>
    </form>
  );
};

export default Form;
