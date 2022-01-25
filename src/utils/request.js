import { getToken } from './auth';


const host = process.env.REACT_APP_BACKEND_HOST;
const API = `${host}`;

const isJSON = (response = '') => {
    const contentType = response.headers.get('content-type');
    return contentType && contentType.indexOf('application/json') >= 0;
};

const updateOptions = (options) => {
    const update = { ...options };
    const token = getToken();

    if (token && !update.withoutToken) {
        // don't send token for login & register
        update.headers = {
            ...update.headers,
            Authorization: `Bearer ${token}`
        };
    }

    return update;
};

const request = (payload) => fetch(payload)
    .then((response) => {
        if (!response.ok) {
            // status beyond 200-299
            return Promise.reject(response);
        }

        return isJSON(response) ? response.json() : response.text();
    })
    .then((result) => result)
    .catch((error) => {
        const newErrorPayload = {
            error: true,
            status: error.status,
            message: error.statusText,
            url: error.url
        };

        if (isJSON(error)) {
            return error.json()
                .then((result) => {
                    let errorMessage;

                    if (result.ErrorMessage) {
                        errorMessage = result.ErrorMessage;
                    }

                    if (result.error?.innererror?.message) {
                        errorMessage = result.error.innererror.message;
                    }

                    // eslint-disable-next-line prefer-promise-reject-errors
                    return Promise.reject({
                        ...newErrorPayload,
                        message: errorMessage
                    });
                });
        }

        return Promise.reject(payload);
    });

const createRequest = (url, options, api) => {
    let target;
    if (api) { target = api + url; } else { target = API + url; }
    const requestBody = new Request(target, updateOptions(options));
    return request(requestBody);
};

export const get = (url, headers = {}, api) => {
    const options = { method: 'GET', headers };
    return createRequest(url, options, api);
};

export const post = (url, formData, headers = {}, withoutToken = false, api) => {
    const options = {
        method: 'POST', body: formData, headers, withoutToken
    };
    return createRequest(url, options, api);
};

export const put = (url, formData, headers = {}, api) => {
    const options = { method: 'PUT', body: formData, headers };
    return createRequest(url, options, api);
};

export const remove = (url, headers = {}, api) => {
    const options = { method: 'DELETE', headers };
    return createRequest(url, options, api);
};
