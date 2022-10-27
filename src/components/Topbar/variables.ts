import { SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";

//*************************************any a corriger**************************************************** */

export interface TopBarProps {
  setCtx: SetStateAction<Object>;
}

export const disconnect = (navigate : NavigateFunction, setter : any ,msg : string) => {
  localStorage.clear();
  toast.success(msg, { autoClose: 2000 });
  setTimeout(() => {
    navigate("/evolufit");
    setter(null);
  }, 2200);
};

