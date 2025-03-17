import { Sub } from "../../types.d";

import useFormReducer from "../../hooks/formReducerHook";

import {
  Button,
  ButtonGroup,
  Field,
  Input,
  Textarea,
  NativeSelect,
} from "@chakra-ui/react";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}
type FormEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, dispatch] = useFormReducer();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    handleClear();
  };

  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target;

    dispatch({
      type: "change_value",
      payload: { inputName: name, inputValue: value },
    });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
  };
  //TODO: simplify this form into separate components
  return (
    <form onSubmit={handleSubmit}>
      <Field.Root>
        <Field.Label>Nickname</Field.Label>
        <Input
          type="text"
          value={inputValues.nick}
          onChange={handleChange}
          name="nick"
          placeholder="nick"
        />
        <Field.ErrorText>{inputValues.nick?.length}</Field.ErrorText>
      </Field.Root>

      <Field.Root>
        <Field.Label>Role</Field.Label>
        <NativeSelect.Root
          size="md"
          width="320px"
          m={1}
          border={"1px solid"}
          rounded={"sm"}
        >
          <NativeSelect.Field
            placeholder="Select option"
            onChange={handleChange}
            name="role"
            value={inputValues.role}
          >
            <option value="vip">VIP</option>
            <option value="mod">MOD</option>
            <option value="sub">SUB</option>
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Field.Root>

      <Field.Root>
        <Field.Label>Avatar URL</Field.Label>
        <Input
          type="text"
          value={inputValues.avatar}
          onChange={handleChange}
          name="avatar"
          placeholder="avatar"
        />
        <Field.ErrorText>{inputValues.nick?.length}</Field.ErrorText>
      </Field.Root>

      <Field.Root>
        <Field.Label>Subscription Months</Field.Label>
        <Input
          type="number"
          value={inputValues.subMonths}
          onChange={handleChange}
          name="subMonths"
          placeholder="subMonths"
        />
        <Field.ErrorText>{inputValues.nick?.length}</Field.ErrorText>
      </Field.Root>

      <Field.Root>
        <Field.Label>Subscription Months</Field.Label>
        <Textarea
          value={inputValues.description}
          onChange={handleChange}
          name="description"
          placeholder="description"
        />
      </Field.Root>

      <ButtonGroup variant={"solid"} mt={4}>
        <Button type="button" onClick={handleClear} colorPalette="gray">
          clear
        </Button>
        <Button type="submit" colorPalette="purple">
          save new sub
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default Form;
