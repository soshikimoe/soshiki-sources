export type FetchOptions = {
    method?: string,
    headers?: {[key: string]: string},
    body?: string
}

export const createFetchOptions = (options: FetchOptions) => options

export const fetch: (url: string, options?: FetchOptions) => Promise<SoshikiResponse> = (url: string, options?: FetchOptions) => {
    return new Promise((resolve, reject) => {
        __fetch__(url, options ?? {}, resolve, reject)
    })
}

declare global {
    export const __fetch__: (url: string, options: { body?: string, headers?: {[key: string]: string}, method?: string }, resolve: (value: SoshikiResponse) => void, reject: (reason?: any) => void) => void
}

type SoshikiResponse = {
    data: string,
    status: number,
    statusText: string,
    headers: {[key: string]: string}
}

