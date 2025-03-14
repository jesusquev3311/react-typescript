import { useReducer } from "react";
import { Sub } from "../types.d.tsx";

const INITIAL_STATE = {
  nick: "",
  avatar: "",
  subMonths: 0,
  description: "",
};

interface FormState {
  inputValues: Sub;
}

type FormReducerAction =
  | {
      type: "change_value";
      payload: { inputName: string; inputValue: string | number };
    }
  | {
      type: "clear";
    };

const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "change_value": {
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    }
    case "clear":
      return INITIAL_STATE;
  }
};

const useFormReducer = () => useReducer(formReducer, INITIAL_STATE);

export default useFormReducer;
