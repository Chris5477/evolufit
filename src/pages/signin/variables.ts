import { FormEvent } from "react";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";

interface InisitalStateTypes {
  firstName: string;
  lastName: string;
  yearsOld: string;
  email: string;
  size: string;
  weight: string;
  gender: string;
  password: string;
}

export const initialState: InisitalStateTypes = {
  firstName: "",
  lastName: "",
  yearsOld: "",
  email: "",
  size: "",
  weight: "",
  gender: "homme",
  password: "",
};

export const signup = (e: FormEvent, state: InisitalStateTypes, navigate: NavigateFunction) => {
  e.preventDefault();
  const isValid = Object.values(state).every((value) => value);
  if (!isValid) {
    toast.error("Veuillez remplir tous les champs !", { autoClose: 2000, theme: "colored" });
  } else {
    toast.success("Compte crée avec succès !", { autoClose: 1400, theme: "colored" });
    localStorage.setItem("data", "test"); // /!\ A MODIFIER PLUS TART
    alert("L'inscription n'est pas encore actif ...!");
    // setTimeout(() => navigate("/evolufit/profil"), 1500);
  }
};
