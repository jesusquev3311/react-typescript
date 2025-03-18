import { useReducer } from "react";
import { Sub } from "../types.d";

const INITIAL_STATE = {
  nick: "",
  avatar: "",
  subMonths: 0,
  description: "",
  role: "sub",
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
      return INITIAL_STATE as Sub;
  }
};

const useFormReducer = () => useReducer(formReducer, INITIAL_STATE as Sub);

export default useFormReducer;
