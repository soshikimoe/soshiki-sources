export type FetchOptions = {
    method?: string;
    headers?: {
        [key: string]: string;
    };
    body?: string;
};
export declare const createFetchOptions: (options: FetchOptions) => FetchOptions;
export declare const fetch: (url: string, options?: FetchOptions) => Promise<SoshikiResponse>;
declare global {
    export const __fetch__: (url: string, options: {
        body?: string;
        headers?: {
            [key: string]: string;
        };
        method?: string;
    }, resolve: (value: SoshikiResponse) => void, reject: (reason?: any) => void) => void;
}
type SoshikiResponse = {
    data: string;
    status: number;
    statusText: string;
    headers: {
        [key: string]: string;
    };
};
export {};
