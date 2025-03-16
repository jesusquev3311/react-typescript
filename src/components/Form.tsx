import { Sub } from "../types.d";

import useFormReducer from "../hooks/formReducerHook";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, dispatch] = useFormReducer();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    handleClear();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    dispatch({
      type: "change_value",
      payload: { inputName: name, inputValue: value },
    });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
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
      <button type="button" onClick={handleClear}>
        clear
      </button>
      <button type="submit">save new sub</button>
    </form>
  );
};

export default Form;
