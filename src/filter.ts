type FilterType = {
    type: "text" | "toggle" | "segment" | "select" | "excludableSelect" | "multiSelect" | "excludableMultiSelect" | "sort" | "ascendableSort" | "number" | "range"
}

export type Filter = (TextFilter | ToggleFilter | SegmentFilter | SelectFilter | ExcludableSelectFilter | MultiSelectFilter | ExcludableMultiSelectFilter | SortFilter | AscendableSortFilter | NumberFilter | RangeFilter) & FilterType

export type FilterBase<Value extends FilterValue> = {
    id: string,
    value: Value,
    name: string
}

type FilterValue = string | boolean | number | string[] | [number, number] | [string, boolean] | [string, boolean][] | null

export type TextFilter = FilterBase<string> & {
    placeholder?: string
}

export const createTextFilter = (filter: TextFilter) => { return {type: "text", ...filter } as TextFilter & FilterType }

export type ToggleFilter = FilterBase<boolean>

export const createToggleFilter = (filter: ToggleFilter) => { return {type: "toggle", ...filter } as ToggleFilter & FilterType }

export type SegmentFilter = FilterBase<string> & {
    selections: string[]
}

export const createSegmentFilter = (filter: SegmentFilter) => { return {type: "segment", ...filter } as SegmentFilter & FilterType }

export type SelectFilter = FilterBase<string | null> & {
    selections: string[]
}

export const createSelectFilter = (filter: SelectFilter) => { return {type: "select", ...filter } as SelectFilter & FilterType }

export type ExcludableSelectFilter = FilterBase<[string, boolean] | null> & {
    selections: string[]
}

export const createExcludableSelectFilter = (filter: ExcludableSelectFilter) => { return {type: "excludableSelect", ...filter } as ExcludableSelectFilter & FilterType }

export type MultiSelectFilter = FilterBase<string[]> & {
    selections: string[]
}

export const createMultiSelectFilter = (filter: MultiSelectFilter) => { return {type: "multiSelect", ...filter } as MultiSelectFilter & FilterType }

export type ExcludableMultiSelectFilter = FilterBase<[string, boolean][]> & {
    selections: string[]
}

export const createExcludableMultiSelectFilter = (filter: ExcludableMultiSelectFilter) => { return {type: "excludableMultiSelect", ...filter } as ExcludableMultiSelectFilter & FilterType }

export type SortFilter = FilterBase<string | null> & {
    selections: string[]
}

export const createSortFilter = (filter: SortFilter) => { return {type: "sort", ...filter } as SortFilter & FilterType }

export type AscendableSortFilter = FilterBase<[string, boolean] | null> & {
    selections: string[]
}

export const createAscendableSortFilter = (filter: AscendableSortFilter) => { return {type: "ascendableSort", ...filter } as AscendableSortFilter & FilterType }

export type NumberFilter = FilterBase<number> & {
    lowerBound: number,
    upperBound: number,
    step?: number,
    allowsCustomInput?: boolean
}

export const createNumberFilter = (filter: NumberFilter) => { return {type: "number", ...filter } as NumberFilter & FilterType }

export type RangeFilter = FilterBase<[number, number]> & {
    lowerBound: number,
    upperBound: number,
    step?: number
}

export const createRangeFilter = (filter: RangeFilter) => { return {type: "range", ...filter } as RangeFilter & FilterType }