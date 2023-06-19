import { EntryResults, EntryResultsInfo } from "./entry"


export type History = {
    /** The ID of the entry that the history entry corresponds to. */
    id: string,
    /** The page that the user is currently on, if applicable. */
    page?: number,
    /** The chapter that the user is currently on, if applicable. */
    chapter?: number,
    /** The volume that the user is currently on, if applicable. */
    volume?: number,
    /** The timestamp, in seconds, that the user is currently at, if applicable. */
    timestamp?: number,
    /** The episode that the user is currently on, if applicable. */
    episode?: number,
    /** The percent of the text that has been read, if applicable. */
    percent?: number,
    /** The score that the user has given the entry, if one has been given. */
    score?: number,
    /** The watching or reading status of the entry. */
    status: History.Status
}

export namespace History {
    export enum Status {
        COMPLETED = "COMPLETED",
        IN_PROGRESS = "IN_PROGRESS",
        PLANNED = "PLANNED",
        DROPPED = "DROPPED",
        PAUSED = "PAUSED",
        UNKNOWN = "UNKNOWN"
    }
}

export const createHistory = (history: History) => history

export enum MediaType {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO"
}

export abstract class Tracker {
    abstract getAuthUrl(): string
    abstract handleResponse(url: string): Promise<void>
    abstract logout(): void
    abstract getHistory(mediaType: MediaType, id: string): Promise<History | null>
    abstract setHistory(mediaType: MediaType, id: string, history: History): Promise<void>
    abstract deleteHistory(mediaType: MediaType, id: string): Promise<void>
    abstract getSearchResults(previousInfo: EntryResultsInfo | null, mediaType: MediaType, query: string): Promise<EntryResults>

    _getAuthUrl(): string {
        return this.getAuthUrl()
    }
    _logout(): void {
        this.logout()
    }
    _handleResponse(callback: () => void, error: (error: any) => void, url: string) {
        this.handleResponse(url).then(callback).catch(error)
    }
    _getHistory(callback: (history: History | null) => void, error: (error: any) => void, mediaType: MediaType, id: string) {
        this.getHistory(mediaType, id).then(callback).catch(error)
    }
    _setHistory(callback: () => void, error: (error: any) => void, mediaType: MediaType, id: string, history: History) {
        this.setHistory(mediaType, id, history).then(callback).catch(error)
    }
    _deleteHistory(callback: () => void, error: (error: any) => void, mediaType: MediaType, id: string) {
        this.deleteHistory(mediaType, id).then(callback).catch(error)
    }
    _getSearchResults(callback: () => void, error: (error: any) => void, previousInfo: EntryResultsInfo | null, mediaType: MediaType, query: string) {
        this.getSearchResults(previousInfo, mediaType, query).then(callback).catch(error)
    }
}