import router from '../router';
import redirectToHome from './redirectToHome';
import useToast from './useToast';

export default function () {
  const { openToast } = useToast();
  const { redirectTo } = redirectToHome();

  async function userLogin(userCredentials) {
    const data = {
      email: userCredentials.email,
      password: userCredentials.password,
    };

    return this.$store.dispatch('login/login', data)
      .then((response) => {
        openToast('Logged with sucess', 'success', 'top');
        this.$store.commit('user/setUserData', response);
        console.log(this.$store.state.user.userData);
        this.$store.commit('user/setUserType', response.user.role);
        // router.push('/' + response.user.role);
        return Promise.resolve();
      })
      .catch(() => {
        openToast('Something was wrong on login', 'danger', 'top');
        Promise.reject();
      });
  }


  return {
    userLogin,
    openToast,
    redirectTo,
  };
}
