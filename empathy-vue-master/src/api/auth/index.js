import request from "./request";
import qs from 'qs';

export default {
    refreshToken: function (refresh_token) {
        return request.get(`refresh_token?refresh_token=${refresh_token}`);
    },
    getToken: function () {

        const clientId = '';
        const clientSecret = '';

        const headers = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: clientId,
                password: clientSecret,
            },
        };
        const data = {
            grant_type: 'client_credentials',
        };
        return request.post(
            'token',
            qs.stringify(data),
            headers
        )
    }
};
