import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";

export const changeValue = (e: ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<any>>, state: Object) => {
  const { value, name, id } = e.target;
  if (name === "gender") {
    setter({ ...state, [name]: id });
  } else {
    setter({ ...state, [name]: value });
  }
};

export const createData = (e: FormEvent, state: any) => {
  e.preventDefault();
  const isValid = Object.values(state).every((value) => value);
  if (!isValid) {
    toast.error("Veuillez remplir tous les champs", { autoClose: 2000, theme: "colored" });
  } else {
    alert("Aucune base de donnée est disponible pour le moment");
  }
};

export const login = (setter: Dispatch<SetStateAction<string>>, mock: any, navigate: NavigateFunction) => {
  setter(mock);
  localStorage.setItem("data", JSON.stringify(mock));
  setTimeout(() => navigate("/evolufit/profil"), 2500);
};
