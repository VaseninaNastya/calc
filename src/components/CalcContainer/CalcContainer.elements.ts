import styled from "styled-components";
import { INDENT } from "../../styles";
import theme from "../../styles/theme";

export const Ground = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.colors.pink};
  padding-top: ${INDENT.fortyEight};
  padding-bottom: ${INDENT.fortyEight};
`;

export const Stroke = styled.div`
  width: 616px;
  height: 876px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background-color: ${theme.rgba.lightestWhite};
  margin: auto;
`;
export const Wrapper = styled.div`
  width: 458px;
  border-radius: 18px;
  padding: ${INDENT.fortyEight};
  display: flex;
  flex-wrap: wrap;
  background: linear-gradient(
    -45deg,
    ${theme.colors.lightBlue},
    ${theme.colors.blue}
  );
  color: ${theme.colors.lightGray};
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Separator = styled.hr`
  width: 100%;
  height: 2px;
  border: none;
  background-color: ${theme.rgba.lightWhite};
  margin-top: ${INDENT.eighteen};
  margin-bottom: ${INDENT.thirtySeven};
`;

export const ButtonWrapper = styled.div`
  font-size: ${theme.fonts.mediumHeight};
  line-height: ${theme.fonts.bigLineHeight};
  font-weight: ${theme.fonts.smallWeight};
  width: 80px;
  height: 80px;
  padding: ${INDENT.none};
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: ${theme.rgba.lightestWhite};
  }
  margin: auto;
`;
