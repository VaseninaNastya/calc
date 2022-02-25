import styled from "styled-components";
import { INDENT } from "../../styles";
import theme from "../../styles/theme";

export const InputElement = styled.input`
  font-size: ${theme.fonts.smallHeight};
  font-weight: ${theme.fonts.smallWeight};
  width: 100%;
  height: 27px;
  padding: ${INDENT.none};
  border: none;
  background-color: inherit;
  color: ${theme.colors.lightGray};
  text-align: right;
  vertical-align: bottom;
  display: flex;
  text-align: end;
  padding-top: 90px;
`;
