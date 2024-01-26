import { toast } from "react-toastify";

export const customToast = (message, type = 'success') => {
  return toast[type](message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    progress: undefined,
    theme: "light",
  });
}