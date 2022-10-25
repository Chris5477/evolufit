import { toast } from "react-toastify";

export const initialState = {
  firstName: "",
  lastName: "",
  yearsOld: "",
  email: "",
  size: "",
  weight: "",
  gender: "homme",
  pseudo: "",
  password: "",
};

export const signup = (e, state, navigate) => {
  e.preventDefault();
  const isValid = Object.values(state).every((value) => value);
  if (!isValid) {
    toast.error("Veuillez remplir tous les champs !", { autoClose: 2000, theme: "colored" });
  } else {
    toast.success("Compte crée avec succès !", { autoClose: 1400, theme: "colored" });
    localStorage.setItem("data", "test"); // /!\ A MODIFIER PLUS TART
    alert("L'inscription n'est pas encore actif ...!")
    // setTimeout(() => navigate("/evolufit/profil"), 1500);
  }
};
