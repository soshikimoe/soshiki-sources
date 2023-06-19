export type TypedEnum<T> = T[keyof T];
export type OnlyRequire<T, K extends keyof T> = Required<Pick<T, K>> & Partial<Omit<T, K>>;
