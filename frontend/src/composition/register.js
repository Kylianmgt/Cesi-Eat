import redirectToHome from "./redirectToHome";
import useToast from "./useToast";
import login from "../composition/login";


export default function () {
  const { openToast } = useToast();
  const { redirectTo } = redirectToHome();

  async function userRegister(userFields, profilFields) {
    const userData = {
      ...userFields,
    };
    const profilData = {
      ...profilFields,
    };
    const data = {
      user: userData,
      profil: profilData,
    };
    delete data.user.confirmPassword;

    return this.$store
      .dispatch("register/register", data)
      .then((response) => {
        openToast("Registered with sucess", "success", "top");
        return Promise.resolve();
      })
      .catch(() => {
        openToast("Something was wrong on register", "danger", "top");
        Promise.reject();
      });
  }
  return {
    userRegister,
    openToast,
    redirectTo,
  };
}
