import { breakpoints } from "./index";

export const media = (key, styles) => `
  @media (min-width: ${breakpoints[key]}px) {
    ${styles}
  }
`;
