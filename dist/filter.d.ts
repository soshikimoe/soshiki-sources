import { TypedEnum } from "./util";
export declare const FilterType: {
    readonly text: "TEXT";
    readonly toggle: "TOGGLE";
    readonly segment: "SEGMENT";
    readonly select: "SELECT";
    readonly excludableSelect: "EXCLUDABLE_SELECT";
    readonly multiSelect: "MULTI_SELECT";
    readonly excludableMultiSelect: "EXCLUDABLE_MULTI_SELECT";
    readonly sort: "SORT";
    readonly ascendableSort: "ASCENDABLE_SORT";
    readonly number: "NUMBER";
};
export type FilterType = TypedEnum<typeof FilterType>;
type TypedFilter = {
    type: FilterType;
};
export type Filter = (TextFilterBase | ToggleFilterBase | SegmentFilterBase | SelectFilterBase | ExcludableSelectFilterBase | MultiSelectFilterBase | ExcludableMultiSelectFilterBase | SortFilterBase | AscendableSortFilterBase | NumberFilterBase) & TypedFilter;
export type FilterBase<Value extends FilterValue> = {
    id: string;
    value: Value;
    name: string;
};
type SegmentFilterOption = {
    id: string;
    name: string;
    selected: boolean;
};
type SelectFilterOption = SegmentFilterOption;
type ExcludableSelectFilterOption = SelectFilterOption & {
    excluded: boolean;
};
type SortFilterOption = SelectFilterOption;
type AscendableSortFilterOption = SortFilterOption & {
    ascending: boolean;
};
type FilterValue = string | boolean | number | SegmentFilterOption[] | SelectFilterOption[] | ExcludableSelectFilterOption[] | SortFilterOption[] | AscendableSortFilterOption[] | null;
type FilterConstructor<Filter extends FilterBase<FilterValue>> = (filter: Filter) => Filter & TypedFilter;
export type TextFilterBase = FilterBase<string> & {
    placeholder?: string;
};
export type TextFilter = TextFilterBase & {
    type: "TEXT";
};
export declare const createTextFilter: FilterConstructor<TextFilterBase>;
export type ToggleFilterBase = FilterBase<boolean>;
export type ToggleFilter = ToggleFilterBase & {
    type: "TOGGLE";
};
export declare const createToggleFilter: FilterConstructor<ToggleFilterBase>;
export type SegmentFilterBase = FilterBase<SegmentFilterOption[]>;
export type SegmentFilter = SegmentFilterBase & {
    type: "SEGMENT";
};
export declare const createSegmentFilter: FilterConstructor<SegmentFilterBase>;
export type SelectFilterBase = FilterBase<SelectFilterOption[]>;
export type SelectFilter = SelectFilterBase & {
    type: "SELECT";
};
export declare const createSelectFilter: FilterConstructor<SelectFilterBase>;
export type ExcludableSelectFilterBase = FilterBase<ExcludableSelectFilterOption[]>;
export type ExcludableSelectFilter = ExcludableSelectFilterBase & {
    type: "EXCLUDABLE_SELECT";
};
export declare const createExcludableSelectFilter: FilterConstructor<ExcludableSelectFilterBase>;
export type MultiSelectFilterBase = FilterBase<SelectFilterOption[]>;
export type MultiSelectFilter = MultiSelectFilterBase & {
    type: "MULTI_SELECT";
};
export declare const createMultiSelectFilter: FilterConstructor<MultiSelectFilterBase>;
export type ExcludableMultiSelectFilterBase = FilterBase<ExcludableSelectFilterOption[]>;
export type ExcludableMultiSelectFilter = ExcludableMultiSelectFilterBase & {
    type: "EXCLUDABLE_MULTI_SELECT";
};
export declare const createExcludableMultiSelectFilter: FilterConstructor<ExcludableMultiSelectFilterBase>;
export type SortFilterBase = FilterBase<SortFilterOption[]>;
export type SortFilter = SortFilterBase & {
    type: "SORT";
};
export declare const createSortFilter: FilterConstructor<SortFilterBase>;
export type AscendableSortFilterBase = FilterBase<AscendableSortFilterOption[]>;
export type AscendableSortFilter = AscendableSortFilterBase & {
    type: "ASCENDABLE_SORT";
};
export declare const createAscendableSortFilter: FilterConstructor<AscendableSortFilterBase>;
export type NumberFilterBase = FilterBase<number> & {
    lowerBound: number;
    upperBound: number;
    step?: number;
    allowsCustomInput?: boolean;
};
export type NumberFilter = NumberFilterBase & {
    type: "NUMBER";
};
export declare const createNumberFilter: FilterConstructor<NumberFilter>;
export type FilterGroup = {
    header?: string;
    footer?: string;
    filters: Filter[];
};
export declare const createFilterGroup: (group: FilterGroup) => FilterGroup;
export {};
