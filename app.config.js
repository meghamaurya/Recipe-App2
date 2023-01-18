import 'dotenv/config';

export default {
    name: 'recipe-app',
    version: '1.0.0',
    extra: {
        API_KEY: process.env.API_KEY
    },
};