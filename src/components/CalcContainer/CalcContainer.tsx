import { FC, useState, useEffect, useRef } from "react";
import { buttonsNames, equallyKeys } from "../../constants/calculatorConstants";
import Input from "../Input";
import Result from "../Result";
import {
  Wrapper,
  Stroke,
  Ground,
  ButtonsContainer,
  Separator,
  ButtonWrapper,
} from "./CalcContainer.elements";
import { handlerButton } from "./handlerButton";

const { equally } = buttonsNames;

const { equal, enter } = equallyKeys;

const CalcContainer: FC = () => {
  const [result, setResult] = useState("");
  const [inputValue, setInputValue] = useState("");

  const pressEqually = (e: KeyboardEvent) => {
    if (e.code === (equal || enter)) {
      handlerButton(equally, inputValue, setInputValue, setResult);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", pressEqually);
    return () => {
      document.removeEventListener("keydown", pressEqually);
    };
  }, [inputValue]);

  return (
    <Ground>
      <Stroke>
        <Wrapper>
          <Input inputValue={inputValue} setInputValue={setInputValue} />
          <Result enterValue={result} />
          <Separator />
          <ButtonsContainer>
            {Object.values(buttonsNames).map((innerText) => (
              <ButtonWrapper
                data-testid={innerText}
                key={innerText}
                onClick={() =>
                  handlerButton(innerText, inputValue, setInputValue, setResult)
                }
              >
                {innerText}
              </ButtonWrapper>
            ))}
          </ButtonsContainer>
        </Wrapper>
      </Stroke>
    </Ground>
  );
};

export default CalcContainer;
