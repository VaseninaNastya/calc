import { FC } from "react";
import { ResultElement } from "./Result.elements";
import { resultTestId } from "../../constants/calculatorConstants";

interface IResult {
  enterValue: string;
}

const Result: FC<IResult> = ({ enterValue }) => (
  <ResultElement data-testid={resultTestId}>{enterValue}</ResultElement>
);
export default Result;
