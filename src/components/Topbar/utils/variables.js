import { toast } from "react-toastify";

export const disconnect = (navigate, setter, msg) => {
  localStorage.clear();
  toast.success(msg, { autoClose: 2000 });
  setTimeout(() => {
    navigate("/evolufit");
    setter(null);
  }, 2200);
};
