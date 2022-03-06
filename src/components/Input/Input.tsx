import { FC } from "react";
import { InputElement } from "./Input.elements";
import { Dispatch, SetStateAction } from "react";
import { maxInputLetters } from "../../constants/calculatorConstants";

interface IInput {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

const Input: FC<IInput> = ({ inputValue, setInputValue }) => {
  const handlerInput = (target: HTMLInputElement) => {
    const res =
      target.value.match(/([0-9*%c√×+,.\-/])*/g)?.[0] === target.value;
    if (res) setInputValue(target.value);
    target.focus();
  };

  return (
    <InputElement
      value={inputValue}
      onChange={({ target }) => handlerInput(target)}
      maxLength={maxInputLetters}
    />
  );
};
export default Input;
