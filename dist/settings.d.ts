declare const _default: undefined;
export default _default;
declare global {
    export const getSettingsValue: (id: string, sourceId: string) => any;
    export const getStorageValue: (id: string, sourceId: string) => any;
    export const setStorageValue: (id: string, value: any, sourceId: string) => void;
    export const getKeychainValue: (id: string, sourceId: string) => string | null;
    export const setKeychainValue: (id: string, value: string, sourceId: string) => void;
}
