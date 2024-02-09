import MockAdapter from "axios-mock-adapter";

export const startMock = (axios) => {

    const mock = new MockAdapter(axios, {
        delayResponse: 1000,
        onNoMatch: 'passthrough'
    });

    mock.onPost("/some_backend_url").reply(
        function (config) {
            return [
                200, {
                    "status": true
                }
            ]
    });
};