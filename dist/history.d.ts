import { TypedEnum } from "./util";
export type TextHistory = {
    id: string;
    sourceId: string;
    chapter: number;
    volume?: number;
    percent: number;
    score?: number;
    status: HistoryStatus;
};
export type ImageHistory = {
    id: string;
    sourceId: string;
    chapter: number;
    volume?: number;
    page: number;
    score?: number;
    status: HistoryStatus;
};
export type VideoHistory = {
    id: string;
    sourceId: string;
    episode: number;
    season?: number;
    timestamp: number;
    score?: number;
    status: HistoryStatus;
};
export declare const HistoryStatus: {
    readonly completed: "COMPLETED";
    readonly inProgress: "IN_PROGRESS";
    readonly planned: "PLANNED";
    readonly dropped: "DROPPED";
    readonly paused: "PAUSED";
    readonly unknown: "UNKNOWN";
};
export type HistoryStatus = TypedEnum<typeof HistoryStatus>;
