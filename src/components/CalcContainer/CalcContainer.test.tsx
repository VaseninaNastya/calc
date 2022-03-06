import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import CalcContainer from "./CalcContainer";
import { buttonsNames, invalidCode } from "../../constants/calculatorConstants";

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
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
} = buttonsNames;

const CalcRenderer = () => (
  <ThemeProvider theme={theme}>
    <CalcContainer />
  </ThemeProvider>
);

describe("test calculator", () => {
  beforeEach(() => {
    render(<CalcRenderer />);
  });

  it("checking arithmetic operations", () => {
    const equallyButton = screen.getByTestId(equally);
    const cancelButton = screen.getByTestId(cancel);
    const multiplicationButton = screen.getByTestId(multiplication);
    const squareRootButton = screen.getByTestId(squareRoot);
    const percentButton = screen.getByTestId(percent);
    const plusButton = screen.getByTestId(plus);
    const minusButton = screen.getByTestId(minus);
    const divideButton = screen.getByTestId(divide);
    const commaButton = screen.getByTestId(comma);
    const zeroButton = screen.getByTestId(zero);
    const twoZerosButton = screen.getByTestId(twoZeros);

    const oneButton = screen.getByTestId(one);
    const twoButton = screen.getByTestId(two);
    const threeButton = screen.getByTestId(three);
    const fourButton = screen.getByTestId(four);
    const fiveButton = screen.getByTestId(five);
    const sixButton = screen.getByTestId(six);
    const sevenButton = screen.getByTestId(seven);
    const eightButton = screen.getByTestId(eight);
    const nineButton = screen.getByTestId(nine);

    fireEvent.click(oneButton);
    fireEvent.click(zeroButton);
    fireEvent.click(multiplicationButton);
    fireEvent.click(fourButton);
    fireEvent.click(equallyButton);
    expect(screen.getByText("40")).toBeInTheDocument();
    fireEvent.click(twoButton);
    fireEvent.click(twoZerosButton);
    fireEvent.click(percentButton);
    fireEvent.click(threeButton);
    fireEvent.click(plusButton);
    fireEvent.click(nineButton);
    fireEvent.click(equallyButton);
    expect(screen.getByText("11")).toBeInTheDocument();
    fireEvent.click(fiveButton);
    fireEvent.click(twoZerosButton);
    fireEvent.click(cancelButton);
    fireEvent.click(minusButton);
    fireEvent.click(sixButton);
    fireEvent.click(equallyButton);
    expect(screen.getByText("44")).toBeInTheDocument();
    fireEvent.click(squareRootButton);
    fireEvent.click(sevenButton);
    fireEvent.click(equallyButton);
    expect(screen.getByText("2.64")).toBeInTheDocument();
    fireEvent.click(eightButton);
    fireEvent.click(commaButton);
    fireEvent.click(eightButton);
    fireEvent.click(divideButton);
    fireEvent.click(twoButton);
    fireEvent.click(equallyButton);
    expect(screen.getByText("4.4")).toBeInTheDocument();
    fireEvent.click(eightButton);
    fireEvent.click(squareRootButton);
    fireEvent.click(equallyButton);
    expect(screen.getByText(invalidCode)).toBeInTheDocument();
  });
});
