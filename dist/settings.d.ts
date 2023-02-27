declare const _default: undefined;
export default _default;
declare global {
    export const getSettingsValue: (id: string) => any;
    export const getStorageValue: (id: string) => any;
    export const setStorageValue: (id: string, value: any) => void;
    export const getKeychainValue: (id: string) => string | null;
    export const setKeychainValue: (id: string, value: string) => void;
}
