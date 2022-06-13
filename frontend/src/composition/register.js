import redirectToHome from './redirectToHome';
import useToast from './useToast';


export default function () {
    const { openToast } = useToast();
    const { redirectTo } = redirectToHome();

    async function userRegister(userFields, profilFields) {
        const userData = {
            ...userFields
        };
        const profilData = {
            ...profilFields
        }
        const data = {
            user: userData,
            profil: profilData
        }
        delete data.user.confirmPassword

        return this.$store.dispatch('register/register', data)
            .then((response) => {
                openToast('Registered with sucess', 'success', 'top');

                // redirectTo(
                //     response.data.userType,
                //     { anyCustomParams: response.customParams },
                //     true,
                // );

                return Promise.resolve();
            })
            .catch(() => {
                openToast('Something was wrong on register', 'danger', 'top');
                Promise.reject();
            });
    }
    // async function clientRegister(userCredentials) {
    //     const data = {
    //         email: userCredentials.email,
    //         password: userCredentials.password,
    //         name: 'test'
    //     };

    //     return this.$store.dispatch('register/register', data)
    //         .then((response) => {
    //             openToast('Registered with sucess', 'success', 'top');

    //             // redirectTo(
    //             //     response.data.userType,
    //             //     { anyCustomParams: response.customParams },
    //             //     true,
    //             // );

    //             return Promise.resolve();
    //         })
    //         .catch(() => {
    //             openToast('Something was wrong on register', 'danger', 'top');
    //             Promise.reject();
    //         });
    // }
    // async function restoRegister(userCredentials) {
    //     const data = {
    //         email: userCredentials.email,
    //         password: userCredentials.password,
    //         name: 'test'
    //     };

    //     return this.$store.dispatch('register/register', data)
    //         .then((response) => {
    //             openToast('Registered with sucess', 'success', 'top');

    //             // redirectTo(
    //             //     response.data.userType,
    //             //     { anyCustomParams: response.customParams },
    //             //     true,
    //             // );

    //             return Promise.resolve();
    //         })
    //         .catch(() => {
    //             openToast('Something was wrong on register', 'danger', 'top');
    //             Promise.reject();
    //         });
    // }
    // async function deliveryRegister(userCredentials) {
    //     const data = {
    //         email: userCredentials.email,
    //         password: userCredentials.password,
    //         name: 'test'
    //     };

    //     return this.$store.dispatch('register/register', data)
    //         .then((response) => {
    //             openToast('Registered with sucess', 'success', 'top');

    //             // redirectTo(
    //             //     response.data.userType,
    //             //     { anyCustomParams: response.customParams },
    //             //     true,
    //             // );

    //             return Promise.resolve();
    //         })
    //         .catch(() => {
    //             openToast('Something was wrong on register', 'danger', 'top');
    //             Promise.reject();
    //         });
    // }

    return {
        userRegister,
        openToast,
        redirectTo,
    };
}