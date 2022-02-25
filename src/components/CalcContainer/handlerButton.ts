import { Dispatch, SetStateAction } from "react";
import {
  buttonsNames,
  invalidCode,
  squareRootMath,
  operandsForCalc,
} from "../../constants/calculatorConstants";

const {
  equally,
  cancel,
  multiplication,
  squareRoot,
  plus,
  minus,
  percent,
  divide,
  comma,
  zero,
  twoZeros,
} = buttonsNames;

const { multiplicationCalc, point } = operandsForCalc;

const operators = [
  plus,
  minus,
  percent,
  divide,
  multiplication,
  multiplicationCalc,
  point,
];

export const handlerButton = (
  innerText: string,
  inputValue: string,
  setInputValue: Dispatch<SetStateAction<string>>,
  setResult: Dispatch<SetStateAction<string>>
) => {
  const { squareStart, squareEnd } = squareRootMath;

  switch (true) {
    case innerText === equally:
      setInputValue("");
      const resaltArr = inputValue.split("");

      const resultWithoutSquares: string[] = [];

      const checkBracket = () => {
        const bracketStaсk: string[] = [];
        resultWithoutSquares.map((item) => {
          const bracketStack: string[] = [];
          if (item === squareStart) bracketStack.push(item);
          if (
            bracketStack[bracketStack.length - 1] === squareStart &&
            operators.includes(item)
          ) {
            bracketStack.pop();
          }
        });
        return !bracketStaсk.length;
      };

      resaltArr.map((item) => {
        switch (true) {
          case Boolean(Number(item)) || item === (zero || twoZeros):
            resultWithoutSquares.push(item);
            break;
          case item === multiplication:
            resultWithoutSquares.push("*");
            break;
          case operators.includes(item):
            if (checkBracket() && resultWithoutSquares.includes(squareStart)) {
              resultWithoutSquares.push(squareEnd);
              resultWithoutSquares.push(item);
            } else {
              resultWithoutSquares.push(item);
            }
            break;
          case item === squareRoot:
            resultWithoutSquares.push(squareStart);
            break;
          case item === comma:
            resultWithoutSquares.push(".");
            break;
          default:
            break;
        }
      });
      if (checkBracket() && resultWithoutSquares.includes(squareStart))
        resultWithoutSquares.push(squareEnd);

      try {
        const uncheckedResult = resultWithoutSquares
          .join("")
          .replace(/^0+/, "");

        const result =
          uncheckedResult.match(/([0-9*%c√×+,.\-/])*/g)?.[0] ===
            uncheckedResult && Math.floor(eval(uncheckedResult) * 100) / 100;

        result ? setResult(String(result)) : setResult("");
      } catch (err) {
        setResult(invalidCode);
      }
      break;
    case innerText === cancel:
      setInputValue(inputValue.slice(0, inputValue.length - 1));
      break;
    default:
      Boolean(inputValue.length)
        ? setInputValue(inputValue + innerText)
        : setInputValue(innerText);
      break;
  }
};
