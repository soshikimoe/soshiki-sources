import { ImageEntryResults, TextEntryResults, VideoEntryResults } from "./entry"
import { ImageHistory, TextHistory, VideoHistory } from "./history"
import { TypedEnum } from "./util"

export const MediaType = {
    text: "TEXT",
    image: "IMAGE",
    video: "VIDEO"
} as const
export type MediaType = TypedEnum<typeof MediaType>

declare global {
    const setLoginStatus: (status: boolean, sourceId: string) => void
}

export abstract class Tracker {
    abstract id: string

    abstract getAuthUrl(): string
    abstract handleResponse(url: string): Promise<void>
    abstract logout(): void
    abstract getLibrary(mediaType: MediaType): Promise<string[]>
    abstract getHistory(mediaType: MediaType, id: string): Promise<TextHistory | ImageHistory | VideoHistory | null>
    abstract setHistory(mediaType: MediaType, id: string, history: TextHistory | ImageHistory | VideoHistory): Promise<void>
    abstract deleteHistory(mediaType: MediaType, id: string): Promise<void>
    abstract getSearchResults(mediaType: MediaType, query: string, page: number): Promise<TextEntryResults | ImageEntryResults | VideoEntryResults>

    _getAuthUrl(): string {
        return this.getAuthUrl()
    }
    _logout(): void {
        this.logout()
    }
    _handleResponse(callback: () => void, error: (error: any) => void, url: string) {
        this.handleResponse(url).then(callback).catch(error)
    }
    _getLibrary(callback: (library: string[]) => void, error: (error: any) => void, mediaType: MediaType) {
        this.getLibrary(mediaType).then(callback).catch(error)
    }
    _getHistory(callback: (history: TextHistory | ImageHistory | VideoHistory | null) => void, error: (error: any) => void, mediaType: MediaType, id: string) {
        this.getHistory(mediaType, id).then(callback).catch(error)
    }
    _setHistory(callback: () => void, error: (error: any) => void, mediaType: MediaType, id: string, history: TextHistory | ImageHistory | VideoHistory) {
        this.setHistory(mediaType, id, history).then(callback).catch(error)
    }
    _deleteHistory(callback: () => void, error: (error: any) => void, mediaType: MediaType, id: string) {
        this.deleteHistory(mediaType, id).then(callback).catch(error)
    }
    _getSearchResults(callback: (results: TextEntryResults | ImageEntryResults | VideoEntryResults) => void, error: (error: any) => void, mediaType: MediaType, query: string, page: number) {
        this.getSearchResults(mediaType, query, page).then(callback).catch(error)
    }

    setLoginStatus(status: boolean) {
        setLoginStatus(status, this.id)
    }
    getSettingsValue(id: string): any {
        return getSettingsValue(id, this.id)
    }
    getStorageValue(id: string): any {
        return getStorageValue(id, this.id)
    }
    setStorageValue(id: string, value: any) {
        setStorageValue(id, value, this.id)
    }
    getKeychainValue(id: string): any {
        return getKeychainValue(id, this.id)
    }
    setKeychainValue(id: string, value: string) {
        setKeychainValue(id, value, this.id)
    }
}