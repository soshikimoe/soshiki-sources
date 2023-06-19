import { TypedEnum } from "./util"

export type TextHistory = {
    id: string,
    sourceId: string,
    chapter: number,
    volume?: number,
    percent: number,
    score?: number,
    status: HistoryStatus
}

export type ImageHistory = {
    id: string,
    sourceId: string,
    chapter: number,
    volume?: number,
    page: number,
    score?: number,
    status: HistoryStatus
}

export type VideoHistory = {
    id: string,
    sourceId: string,
    episode: number,
    season?: number,
    timestamp: number,
    score?: number,
    status: HistoryStatus
}


export const HistoryStatus = {
    completed: "COMPLETED",
    inProgress: "IN_PROGRESS",
    planned: "PLANNED",
    dropped: "DROPPED",
    paused: "PAUSED",
    unknown: "UNKNOWN"
} as const
export type HistoryStatus = TypedEnum<typeof HistoryStatus>
