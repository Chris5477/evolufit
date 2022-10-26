import { toast } from "react-toastify";

const notify = (type, text, duration) => type(text, { autoClose: duration, theme: "colored" });

const login = (setter, mock, navigate) => {
  setter(mock);
  localStorage.setItem("data", JSON.stringify(mock));
  setTimeout(() => navigate("/evolufit/profil"), 2500);
};

export const validationLoginForm = (e, pseudo, password, setter, mock, navigate) => {
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
