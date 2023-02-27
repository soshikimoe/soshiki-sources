"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = exports.createFetchOptions = void 0;
const createFetchOptions = (options) => options;
exports.createFetchOptions = createFetchOptions;
const fetch = (url, options) => {
    return new Promise((resolve, reject) => {
        __fetch__(url, options !== null && options !== void 0 ? options : {}, resolve, reject);
    });
};
exports.fetch = fetch;
