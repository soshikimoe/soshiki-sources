type FilterType = {
    type: "text" | "toggle" | "segment" | "select" | "excludableSelect" | "multiSelect" | "excludableMultiSelect" | "sort" | "ascendableSort" | "number" | "range";
};
export type Filter = (TextFilter | ToggleFilter | SegmentFilter | SelectFilter | ExcludableSelectFilter | MultiSelectFilter | ExcludableMultiSelectFilter | SortFilter | AscendableSortFilter | NumberFilter | RangeFilter) & FilterType;
export type FilterBase<Value extends FilterValue> = {
    id: string;
    value: Value;
    name: string;
};
type FilterValue = string | boolean | number | string[] | [number, number] | [string, boolean] | [string, boolean][] | null;
export type TextFilter = FilterBase<string> & {
    placeholder?: string;
};
export declare const createTextFilter: (filter: TextFilter) => FilterBase<string> & {
    placeholder?: string | undefined;
} & FilterType;
export type ToggleFilter = FilterBase<boolean>;
export declare const createToggleFilter: (filter: ToggleFilter) => ToggleFilter & FilterType;
export type SegmentFilter = FilterBase<string> & {
    selections: string[];
};
export declare const createSegmentFilter: (filter: SegmentFilter) => FilterBase<string> & {
    selections: string[];
} & FilterType;
export type SelectFilter = FilterBase<string | null> & {
    selections: string[];
};
export declare const createSelectFilter: (filter: SelectFilter) => FilterBase<string | null> & {
    selections: string[];
} & FilterType;
export type ExcludableSelectFilter = FilterBase<[string, boolean] | null> & {
    selections: string[];
};
export declare const createExcludableSelectFilter: (filter: ExcludableSelectFilter) => FilterBase<[string, boolean] | null> & {
    selections: string[];
} & FilterType;
export type MultiSelectFilter = FilterBase<string[]> & {
    selections: string[];
};
export declare const createMultiSelectFilter: (filter: MultiSelectFilter) => FilterBase<string[]> & {
    selections: string[];
} & FilterType;
export type ExcludableMultiSelectFilter = FilterBase<[string, boolean][]> & {
    selections: string[];
};
export declare const createExcludableMultiSelectFilter: (filter: ExcludableMultiSelectFilter) => FilterBase<[string, boolean][]> & {
    selections: string[];
} & FilterType;
export type SortFilter = FilterBase<string | null> & {
    selections: string[];
};
export declare const createSortFilter: (filter: SortFilter) => FilterBase<string | null> & {
    selections: string[];
} & FilterType;
export type AscendableSortFilter = FilterBase<[string, boolean] | null> & {
    selections: string[];
};
export declare const createAscendableSortFilter: (filter: AscendableSortFilter) => FilterBase<[string, boolean] | null> & {
    selections: string[];
} & FilterType;
export type NumberFilter = FilterBase<number> & {
    lowerBound: number;
    upperBound: number;
    step?: number;
    allowsCustomInput?: boolean;
};
export declare const createNumberFilter: (filter: NumberFilter) => FilterBase<number> & {
    lowerBound: number;
    upperBound: number;
    step?: number | undefined;
    allowsCustomInput?: boolean | undefined;
} & FilterType;
export type RangeFilter = FilterBase<[number, number]> & {
    lowerBound: number;
    upperBound: number;
    step?: number;
};
export declare const createRangeFilter: (filter: RangeFilter) => FilterBase<[number, number]> & {
    lowerBound: number;
    upperBound: number;
    step?: number | undefined;
} & FilterType;
export {};
