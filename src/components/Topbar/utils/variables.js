import { toast } from "react-toastify";

export const disconnect = (navigate, setter) => {
  localStorage.clear();
  toast.success("Déconnexion en cours !", { autoClose: 2000, theme: "colored" });
  setTimeout(() => {
    navigate("/evolufit");
    setter(null);
  }, 2200);
};
