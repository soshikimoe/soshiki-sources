import type { TextChapterDetails, ImageChapterDetails, VideoEpisodeDetails, TextEntryResults, ImageEntryResults, VideoEntryResults, TextChapterResults, TextEntry, ImageEntry, VideoEntry, ImageChapterResults, VideoEpisodeResults, IdentifiedTextEntryResults, IdentifiedImageEntryResults, IdentifiedVideoEntryResults, IdentifiedVideoEpisodeResults, IdentifiedImageChapterResults, IdentifiedTextChapterResults } from "./entry";
import { FetchOptions } from "./fetch";
import { Filter, FilterGroup } from "./filter";
import { Listing } from "./listing";
export declare abstract class TextSource {
    abstract id: string;
    abstract getListing(listing: Listing, page: number): Promise<TextEntryResults>;
    abstract getSearchResults(query: string, page: number, filters: Filter[]): Promise<TextEntryResults>;
    abstract getEntry(id: string): Promise<TextEntry>;
    abstract getChapters(id: string, page: number): Promise<TextChapterResults>;
    abstract getChapterDetails(id: string, entryId: string): Promise<TextChapterDetails>;
    abstract getFilters(): Promise<FilterGroup[]>;
    abstract getListings(): Promise<Listing[]>;
    abstract getSettings(): Promise<FilterGroup[]>;
    _getListing(callback: (results: IdentifiedTextEntryResults) => void, error: (error: any) => void, listing: Listing, page: number): void;
    _getSearchResults(callback: (results: IdentifiedTextEntryResults) => void, error: (error: any) => void, query: string, page: number, filters: Filter[]): void;
    _getEntry(callback: (entry: TextEntry & {
        sourceId: string;
    }) => void, error: (error: any) => void, id: string): void;
    _getChapters(callback: (chapter: IdentifiedTextChapterResults) => void, error: (error: any) => void, id: string, page: number): void;
    _getChapterDetails(callback: (details: TextChapterDetails) => void, error: (error: any) => void, id: string, entryId: string): void;
    _getFilters(callback: (filters: FilterGroup[]) => void, error: (error: any) => void): void;
    _getListings(callback: (listings: Listing[]) => void, error: (error: any) => void): void;
    _getSettings(callback: (settings: FilterGroup[]) => void, error: (error: any) => void): void;
    getSettingsValue(id: string): any;
    getStorageValue(id: string): any;
    setStorageValue(id: string, value: any): void;
    getKeychainValue(id: string): any;
    setKeychainValue(id: string, value: string): void;
}
export declare abstract class ImageSource {
    abstract id: string;
    abstract getListing(listing: Listing, page: number): Promise<ImageEntryResults>;
    abstract getSearchResults(query: string, page: number, filters: Filter[]): Promise<ImageEntryResults>;
    abstract getEntry(id: string): Promise<ImageEntry>;
    abstract getChapters(id: string, page: number): Promise<ImageChapterResults>;
    abstract getChapterDetails(id: string, entryId: string): Promise<ImageChapterDetails>;
    abstract getFilters(): Promise<FilterGroup[]>;
    abstract getListings(): Promise<Listing[]>;
    abstract getSettings(): Promise<FilterGroup[]>;
    abstract modifyImageRequest(url: string, options: FetchOptions): Promise<{
        url: string;
        options: FetchOptions;
    }>;
    _getListing(callback: (results: IdentifiedImageEntryResults) => void, error: (error: any) => void, listing: Listing, page: number): void;
    _getSearchResults(callback: (results: IdentifiedImageEntryResults) => void, error: (error: any) => void, query: string, page: number, filters: Filter[]): void;
    _getEntry(callback: (entry: ImageEntry & {
        sourceId: string;
    }) => void, error: (error: any) => void, id: string): void;
    _getChapters(callback: (chapter: IdentifiedImageChapterResults) => void, error: (error: any) => void, id: string, page: number): void;
    _getChapterDetails(callback: (details: ImageChapterDetails) => void, error: (error: any) => void, id: string, entryId: string): void;
    _getFilters(callback: (filters: FilterGroup[]) => void, error: (error: any) => void): void;
    _getListings(callback: (listings: Listing[]) => void, error: (error: any) => void): void;
    _getSettings(callback: (settings: FilterGroup[]) => void, error: (error: any) => void): void;
    _modifyImageRequest(callback: (data: {
        url: string;
        options: FetchOptions;
    }) => void, error: (error: any) => void, url: string, options: FetchOptions): void;
    getSettingsValue(id: string): any;
    getStorageValue(id: string): any;
    setStorageValue(id: string, value: any): void;
    getKeychainValue(id: string): any;
    setKeychainValue(id: string, value: string): void;
}
export declare abstract class VideoSource {
    abstract id: string;
    abstract getListing(listing: Listing, page: number): Promise<VideoEntryResults>;
    abstract getSearchResults(query: string, page: number, filters: Filter[]): Promise<VideoEntryResults>;
    abstract getEntry(id: string): Promise<VideoEntry>;
    abstract getEpisodes(id: string, page: number): Promise<VideoEpisodeResults>;
    abstract getEpisodeDetails(id: string, entryId: string): Promise<VideoEpisodeDetails>;
    abstract getFilters(): Promise<FilterGroup[]>;
    abstract getListings(): Promise<Listing[]>;
    abstract getSettings(): Promise<FilterGroup[]>;
    abstract modifyVideoRequest(url: string, options: FetchOptions): Promise<{
        url: string;
        options: FetchOptions;
    }>;
    _getListing(callback: (results: IdentifiedVideoEntryResults) => void, error: (error: any) => void, listing: Listing, page: number): void;
    _getSearchResults(callback: (results: IdentifiedVideoEntryResults) => void, error: (error: any) => void, query: string, page: number, filters: Filter[]): void;
    _getEntry(callback: (entry: VideoEntry & {
        sourceId: string;
    }) => void, error: (error: any) => void, id: string): void;
    _getEpisodes(callback: (episode: IdentifiedVideoEpisodeResults) => void, error: (error: any) => void, id: string, page: number): void;
    _getEpisodeDetails(callback: (details: VideoEpisodeDetails) => void, error: (error: any) => void, id: string, entryId: string): void;
    _getFilters(callback: (filters: FilterGroup[]) => void, error: (error: any) => void): void;
    _getListings(callback: (listings: Listing[]) => void, error: (error: any) => void): void;
    _getSettings(callback: (settings: FilterGroup[]) => void, error: (error: any) => void): void;
    _modifyVideoRequest(callback: (data: {
        url: string;
        options: FetchOptions;
    }) => void, error: (error: any) => void, url: string, options: FetchOptions): void;
    getSettingsValue(id: string): any;
    getStorageValue(id: string): any;
    setStorageValue(id: string, value: any): void;
    getKeychainValue(id: string): any;
    setKeychainValue(id: string, value: string): void;
}
