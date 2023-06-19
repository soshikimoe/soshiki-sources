"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFilterGroup = exports.createNumberFilter = exports.createAscendableSortFilter = exports.createSortFilter = exports.createExcludableMultiSelectFilter = exports.createMultiSelectFilter = exports.createExcludableSelectFilter = exports.createSelectFilter = exports.createSegmentFilter = exports.createToggleFilter = exports.createTextFilter = exports.FilterType = void 0;
exports.FilterType = {
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
};
const createTextFilter = (filter) => { return Object.assign({ type: "TEXT" }, filter); };
exports.createTextFilter = createTextFilter;
const createToggleFilter = (filter) => { return Object.assign({ type: "TOGGLE" }, filter); };
exports.createToggleFilter = createToggleFilter;
const createSegmentFilter = (filter) => { return Object.assign({ type: "SEGMENT" }, filter); };
exports.createSegmentFilter = createSegmentFilter;
const createSelectFilter = (filter) => { return Object.assign({ type: "SELECT" }, filter); };
exports.createSelectFilter = createSelectFilter;
const createExcludableSelectFilter = (filter) => { return Object.assign({ type: "EXCLUDABLE_SELECT" }, filter); };
exports.createExcludableSelectFilter = createExcludableSelectFilter;
const createMultiSelectFilter = (filter) => { return Object.assign({ type: "MULTI_SELECT" }, filter); };
exports.createMultiSelectFilter = createMultiSelectFilter;
const createExcludableMultiSelectFilter = (filter) => { return Object.assign({ type: "EXCLUDABLE_MULTI_SELECT" }, filter); };
exports.createExcludableMultiSelectFilter = createExcludableMultiSelectFilter;
const createSortFilter = (filter) => { return Object.assign({ type: "SORT" }, filter); };
exports.createSortFilter = createSortFilter;
const createAscendableSortFilter = (filter) => { return Object.assign({ type: "ASCENDABLE_SORT" }, filter); };
exports.createAscendableSortFilter = createAscendableSortFilter;
const createNumberFilter = (filter) => { return Object.assign({ type: "NUMBER" }, filter); };
exports.createNumberFilter = createNumberFilter;
const createFilterGroup = (group) => group;
exports.createFilterGroup = createFilterGroup;
