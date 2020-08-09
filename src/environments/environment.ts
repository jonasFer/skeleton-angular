import { EnvironmentInterface } from '../app/core/interfaces/environment-interface';

export const environment: EnvironmentInterface = {
    production: false,
    uri: {
        api: 'http://localhost:8080',
        projeto: 'http://localhost:4000',
    },
};
