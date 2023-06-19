import { TypedEnum } from "./util"

export const FilterType = {
    text: "TEXT",
    toggle: "TOGGLE",
    segment: "SEGMENT",
    select: "SELECT",
    excludableSelect: "EXCLUDABLE_SELECT",
    multiSelect: "MULTI_SELECT",
    excludableMultiSelect: "EXCLUDABLE_MULTI_SELECT",
    sort: "SORT",
    ascendableSort: "ASCENDABLE_SORT",
    number: "NUMBER"
} as const
export type FilterType = TypedEnum<typeof FilterType>

type TypedFilter = {
    type: FilterType
}

export type Filter = (TextFilterBase | ToggleFilterBase | SegmentFilterBase | SelectFilterBase | ExcludableSelectFilterBase | MultiSelectFilterBase | ExcludableMultiSelectFilterBase | SortFilterBase | AscendableSortFilterBase | NumberFilterBase) & TypedFilter

export type FilterBase<Value extends FilterValue> = {
    id: string,
    value: Value,
    name: string
}



type SegmentFilterOption = {
    id: string,
    name: string
    selected: boolean
}
type SelectFilterOption = SegmentFilterOption
type ExcludableSelectFilterOption = SelectFilterOption & {
    excluded: boolean
}
type SortFilterOption = SelectFilterOption
type AscendableSortFilterOption = SortFilterOption & {
    ascending: boolean
}

type FilterValue = string | boolean | number | SegmentFilterOption[] | SelectFilterOption[] | ExcludableSelectFilterOption[] | SortFilterOption[] | AscendableSortFilterOption[] | null



type FilterConstructor<Filter extends FilterBase<FilterValue>> = (filter: Filter) => Filter & TypedFilter



export type TextFilterBase = FilterBase<string> & {
    placeholder?: string
}
export type TextFilter = TextFilterBase & { type: "TEXT" }

export const createTextFilter: FilterConstructor<TextFilterBase> = (filter: TextFilterBase) => { return { type: "TEXT", ...filter } as TextFilter }



export type ToggleFilterBase = FilterBase<boolean>
export type ToggleFilter = ToggleFilterBase & { type: "TOGGLE" }

export const createToggleFilter: FilterConstructor<ToggleFilterBase> = (filter: ToggleFilterBase) => { return { type: "TOGGLE", ...filter } as ToggleFilter }



export type SegmentFilterBase = FilterBase<SegmentFilterOption[]>
export type SegmentFilter = SegmentFilterBase & { type: "SEGMENT" }

export const createSegmentFilter: FilterConstructor<SegmentFilterBase> = (filter: SegmentFilterBase) => { return { type: "SEGMENT", ...filter } as SegmentFilter }



export type SelectFilterBase = FilterBase<SelectFilterOption[]>
export type SelectFilter = SelectFilterBase & { type: "SELECT" }

export const createSelectFilter: FilterConstructor<SelectFilterBase> = (filter: SelectFilterBase) => { return { type: "SELECT", ...filter } as SelectFilter}



export type ExcludableSelectFilterBase = FilterBase<ExcludableSelectFilterOption[]>
export type ExcludableSelectFilter = ExcludableSelectFilterBase & { type: "EXCLUDABLE_SELECT" }

export const createExcludableSelectFilter: FilterConstructor<ExcludableSelectFilterBase> = (filter: ExcludableSelectFilterBase) => { return { type: "EXCLUDABLE_SELECT", ...filter } as ExcludableSelectFilter }



export type MultiSelectFilterBase = FilterBase<SelectFilterOption[]>
export type MultiSelectFilter = MultiSelectFilterBase & { type: "MULTI_SELECT" }

export const createMultiSelectFilter: FilterConstructor<MultiSelectFilterBase> = (filter: MultiSelectFilterBase) => { return { type: "MULTI_SELECT", ...filter } as MultiSelectFilter }



export type ExcludableMultiSelectFilterBase = FilterBase<ExcludableSelectFilterOption[]>
export type ExcludableMultiSelectFilter = ExcludableMultiSelectFilterBase & { type: "EXCLUDABLE_MULTI_SELECT" }

export const createExcludableMultiSelectFilter: FilterConstructor<ExcludableMultiSelectFilterBase> = (filter: ExcludableMultiSelectFilterBase) => { return { type: "EXCLUDABLE_MULTI_SELECT", ...filter } as ExcludableMultiSelectFilter }



export type SortFilterBase = FilterBase<SortFilterOption[]>
export type SortFilter = SortFilterBase & { type: "SORT" }

export const createSortFilter: FilterConstructor<SortFilterBase> = (filter: SortFilterBase) => { return { type: "SORT", ...filter } as SortFilter }


export type AscendableSortFilterBase = FilterBase<AscendableSortFilterOption[]>
export type AscendableSortFilter = AscendableSortFilterBase & { type: "ASCENDABLE_SORT" }

export const createAscendableSortFilter: FilterConstructor<AscendableSortFilterBase> = (filter: AscendableSortFilterBase) => { return { type: "ASCENDABLE_SORT", ...filter } as AscendableSortFilter }



export type NumberFilterBase = FilterBase<number> & {
    lowerBound: number,
    upperBound: number,
    step?: number,
    allowsCustomInput?: boolean
}
export type NumberFilter = NumberFilterBase & { type: "NUMBER" }

export const createNumberFilter: FilterConstructor<NumberFilter> = (filter: NumberFilterBase) => { return { type: "NUMBER", ...filter } as NumberFilter }

export type FilterGroup = {
    header?: string,
    footer?: string,
    filters: Filter[]
}

export const createFilterGroup = (group: FilterGroup) => group