import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";

const notify = (type: any, text: string, duration: number) => type(text, { autoClose: duration, theme: "colored" });

const login = (setter: Dispatch<SetStateAction<string>>, mock: any, navigate: NavigateFunction) => {
  setter(mock);
  localStorage.setItem("data", JSON.stringify(mock));
  setTimeout(() => navigate("/evolufit/profil"), 2500);
};

export const validationLoginForm = (
  e: FormEvent<HTMLFormElement>,
  pseudo: string,
  password: string,
  setter: Dispatch<SetStateAction<string>>,
  mock: any,
  navigate: NavigateFunction
) => {
  e.preventDefault();
  if (pseudo === "admin" && password === "12345") {
    login(setter, mock, navigate);
    notify(toast.success, "Connexion en cours...", 2500);
  } else if (pseudo && password && (pseudo !== "admin" || password !== "12345")) {
    notify(toast.error, "Identifiants incorrects", 2500);
  } else {
    notify(toast.error, "Veuillez remplir tous les champs !", 2500);
  }
};
