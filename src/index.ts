const signature = require('randomstring').generate(10);

export * from './classes';
export * from './enum';
export * from './interfaces';

export const utils = {
    signature: (process.env.IS_DEBUG) ? 'sig-debug' : signature
};
