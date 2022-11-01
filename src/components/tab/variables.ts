/* istanbul ignore file */

import { Dispatch, SetStateAction } from "react";

export interface TabProps {
  pathname: string;
  setPathname: Dispatch<SetStateAction<string>>;
  txtAlt: string;
  picture: string;
  url: string;
}
