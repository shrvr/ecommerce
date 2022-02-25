import { css } from "styled-components";
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 451px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 824px) and (min-width: 451px) {
      ${props}
    }
  `;
};
