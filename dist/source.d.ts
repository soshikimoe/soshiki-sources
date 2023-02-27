import type { Entry, TextChapter, ImageChapter, VideoEpisode, TextChapterDetails, ImageChapterDetails, VideoEpisodeDetails, EntryResults, EntryResultsInfo } from "./entry";
import { FetchOptions } from "./fetch";
import { Filter } from "./filter";
import { Listing } from "./listing";
export declare abstract class TextSource {
    abstract getListing(previousInfo: EntryResultsInfo | null, listing: Listing): Promise<EntryResults>;
    abstract getSearchResults(previousInfo: EntryResultsInfo | null, query: string, filters: Filter[]): Promise<EntryResults>;
    abstract getEntry(id: string): Promise<Entry>;
    abstract getChapters(id: string): Promise<TextChapter[]>;
    abstract getChapterDetails(id: string, entryId: string): Promise<TextChapterDetails>;
    abstract getFilters(): Promise<Filter[]>;
    abstract getListings(): Promise<Listing[]>;
    abstract getSettings(): Promise<Filter[]>;
    _getListing(callback: (results: EntryResults) => void, error: (error: any) => void, previousInfo: EntryResultsInfo | null, listing: Listing): void;
    _getSearchResults(callback: (results: EntryResults) => void, error: (error: any) => void, previousInfo: EntryResultsInfo | null, query: string, filters: Filter[]): void;
    _getEntry(callback: (entry: Entry) => void, error: (error: any) => void, id: string): void;
    _getChapters(callback: (chapter: TextChapter[]) => void, error: (error: any) => void, id: string): void;
    _getChapterDetails(callback: (details: TextChapterDetails) => void, error: (error: any) => void, id: string, entryId: string): void;
    _getFilters(callback: (filters: Filter[]) => void, error: (error: any) => void): void;
    _getListings(callback: (listings: Listing[]) => void, error: (error: any) => void): void;
    _getSettings(callback: (settings: Filter[]) => void, error: (error: any) => void): void;
}
export declare abstract class ImageSource {
    abstract getListing(previousInfo: EntryResultsInfo | null, listing: Listing): Promise<EntryResults>;
    abstract getSearchResults(previousInfo: EntryResultsInfo | null, query: string, filters: Filter[]): Promise<EntryResults>;
    abstract getEntry(id: string): Promise<Entry>;
    abstract getChapters(id: string): Promise<ImageChapter[]>;
    abstract getChapterDetails(id: string, entryId: string): Promise<ImageChapterDetails>;
    abstract getFilters(): Promise<Filter[]>;
    abstract getListings(): Promise<Listing[]>;
    abstract getSettings(): Promise<Filter[]>;
    abstract modifyImageRequest(url: string, options: FetchOptions): Promise<{
        url: string;
        options: FetchOptions;
    }>;
    _getListing(callback: (results: EntryResults) => void, error: (error: any) => void, previousInfo: EntryResultsInfo | null, listing: Listing): void;
    _getSearchResults(callback: (results: EntryResults) => void, error: (error: any) => void, previousInfo: EntryResultsInfo | null, query: string, filters: Filter[]): void;
    _getEntry(callback: (entry: Entry) => void, error: (error: any) => void, id: string): void;
    _getChapters(callback: (chapter: ImageChapter[]) => void, error: (error: any) => void, id: string): void;
    _getChapterDetails(callback: (details: ImageChapterDetails) => void, error: (error: any) => void, id: string, entryId: string): void;
    _getFilters(callback: (filters: Filter[]) => void, error: (error: any) => void): void;
    _getListings(callback: (listings: Listing[]) => void, error: (error: any) => void): void;
    _getSettings(callback: (settings: Filter[]) => void, error: (error: any) => void): void;
    _modifyImageRequest(callback: (data: {
        url: string;
        options: FetchOptions;
    }) => void, error: (error: any) => void, url: string, options: FetchOptions): void;
}
export declare abstract class VideoSource {
    abstract getListing(previousInfo: EntryResultsInfo | null, listing: Listing): Promise<EntryResults>;
    abstract getSearchResults(previousInfo: EntryResultsInfo | null, query: string, filters: Filter[]): Promise<EntryResults>;
    abstract getEntry(id: string): Promise<Entry>;
    abstract getEpisodes(id: string): Promise<VideoEpisode[]>;
    abstract getEpisodeDetails(id: string, entryId: string): Promise<VideoEpisodeDetails>;
    abstract getFilters(): Promise<Filter[]>;
    abstract getListings(): Promise<Listing[]>;
    abstract getSettings(): Promise<Filter[]>;
    abstract modifyVideoRequest(url: string, options: FetchOptions): Promise<{
        url: string;
        options: FetchOptions;
    }>;
    _getListing(callback: (results: EntryResults) => void, error: (error: any) => void, previousInfo: EntryResultsInfo | null, listing: Listing): void;
    _getSearchResults(callback: (results: EntryResults) => void, error: (error: any) => void, previousInfo: EntryResultsInfo | null, query: string, filters: Filter[]): void;
    _getEntry(callback: (entry: Entry) => void, error: (error: any) => void, id: string): void;
    _getEpisodes(callback: (chapter: VideoEpisode[]) => void, error: (error: any) => void, id: string): void;
    _getEpisodeDetails(callback: (details: VideoEpisodeDetails) => void, error: (error: any) => void, id: string, entryId: string): void;
    _getFilters(callback: (filters: Filter[]) => void, error: (error: any) => void): void;
    _getListings(callback: (listings: Listing[]) => void, error: (error: any) => void): void;
    _getSettings(callback: (settings: Filter[]) => void, error: (error: any) => void): void;
    _modifyVideoRequest(callback: (data: {
        url: string;
        options: FetchOptions;
    }) => void, error: (error: any) => void, url: string, options: FetchOptions): void;
}
