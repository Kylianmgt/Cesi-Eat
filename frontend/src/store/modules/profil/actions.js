import api from '../../../api';


// export default {
//     register({ }, userCredentials) {
//         return api.post('/auth/register', userCredentials)
//             .then(async (response) => {
//                 await setToken(response.token);
//                 await setUserData(response.data);

//                 return response.data;
//             })
//             .catch((error) => error.response);
//     },
// }

export default {
    createClientProfil({ }, userCredentials) {
        return api.post('/upload', userCredentials, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
    createDeliveryProfil({ }, userCredentials) {
        return api.post('/upload/multiple-files', files, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
    createRestoProfil({ }, userCredentials) {
        return api.delete(`/file/delete/${filename}`);
    },
};
