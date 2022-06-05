import api from '../../../api';


export default {
    register({ }, userCredentials) {
        return api.post('/auth/register', userCredentials)
            .then(async (response) => {
                await setToken(response.token);
                await setUserData(response.data);

                return response.data;
            })
            .catch((error) => error.response);
    },
}