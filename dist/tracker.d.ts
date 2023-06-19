import { ImageEntryResults, TextEntryResults, VideoEntryResults } from "./entry";
import { ImageHistory, TextHistory, VideoHistory } from "./history";
import { TypedEnum } from "./util";
export declare const MediaType: {
    readonly text: "TEXT";
    readonly image: "IMAGE";
    readonly video: "VIDEO";
};
export type MediaType = TypedEnum<typeof MediaType>;
declare global {
    const setLoginStatus: (status: boolean, sourceId: string) => void;
}
export declare abstract class Tracker {
    abstract id: string;
    abstract getAuthUrl(): string;
    abstract handleResponse(url: string): Promise<void>;
    abstract logout(): void;
    abstract getLibrary(mediaType: MediaType): Promise<string[]>;
    abstract getHistory(mediaType: MediaType, id: string): Promise<TextHistory | ImageHistory | VideoHistory | null>;
    abstract setHistory(mediaType: MediaType, id: string, history: TextHistory | ImageHistory | VideoHistory): Promise<void>;
    abstract deleteHistory(mediaType: MediaType, id: string): Promise<void>;
    abstract getSearchResults(mediaType: MediaType, query: string, page: number): Promise<TextEntryResults | ImageEntryResults | VideoEntryResults>;
    _getAuthUrl(): string;
    _logout(): void;
    _handleResponse(callback: () => void, error: (error: any) => void, url: string): void;
    _getLibrary(callback: (library: string[]) => void, error: (error: any) => void, mediaType: MediaType): void;
    _getHistory(callback: (history: TextHistory | ImageHistory | VideoHistory | null) => void, error: (error: any) => void, mediaType: MediaType, id: string): void;
    _setHistory(callback: () => void, error: (error: any) => void, mediaType: MediaType, id: string, history: TextHistory | ImageHistory | VideoHistory): void;
    _deleteHistory(callback: () => void, error: (error: any) => void, mediaType: MediaType, id: string): void;
    _getSearchResults(callback: (results: TextEntryResults | ImageEntryResults | VideoEntryResults) => void, error: (error: any) => void, mediaType: MediaType, query: string, page: number): void;
    setLoginStatus(status: boolean): void;
    getSettingsValue(id: string): any;
    getStorageValue(id: string): any;
    setStorageValue(id: string, value: any): void;
    getKeychainValue(id: string): any;
    setKeychainValue(id: string, value: string): void;
}
