import styled from "styled-components";
import { INDENT } from "../../styles";
import theme from "../../styles/theme";

export const ResultElement = styled.div`
  font-size: ${theme.fonts.bigHeight};
  line-height: ${theme.fonts.mediumLineHeight};
  font-weight: ${theme.fonts.bigWeight};
  width: 100%;
  height: 76px;
  padding: ${INDENT.none};
  border: none;
  display: flex;
  align-items: center;
  justify-content: end;
  :active {
    border: none;
  }
`;
