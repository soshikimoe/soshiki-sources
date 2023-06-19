import type { 
    Entry, 
    TextChapter, 
    ImageChapter,
    VideoEpisode,
    TextChapterDetails,
    ImageChapterDetails,
    VideoEpisodeDetails,
    EntryResults,
    EntryResultsInfo
} from "./entry"
import { FetchOptions } from "../../fetch"
import { Filter } from "./filter"
import { Listing } from "./listing"

export abstract class TextSource {
    abstract id: string

    abstract getListing(previousInfo: EntryResultsInfo | null, listing: Listing): Promise<EntryResults>
    abstract getSearchResults(previousInfo: EntryResultsInfo | null, query: string, filters: Filter[]): Promise<EntryResults>
    abstract getEntry(id: string): Promise<Entry>
    abstract getChapters(id: string): Promise<TextChapter[]>
    abstract getChapterDetails(id: string, entryId: string): Promise<TextChapterDetails>
    abstract getFilters(): Promise<Filter[]>
    abstract getListings(): Promise<Listing[]>
    abstract getSettings(): Promise<Filter[]>
    _getListing(callback: (results: EntryResults) => void, error: (error: any) => void, previousInfo: EntryResultsInfo | null, listing: Listing): void {
        this.getListing(previousInfo, listing).then(callback).catch(error)
    }
    _getSearchResults(callback: (results: EntryResults) => void, error: (error: any) => void, previousInfo: EntryResultsInfo | null, query: string, filters: Filter[]): void {
        this.getSearchResults(previousInfo, query, filters).then(callback).catch(error)
    }
    _getEntry(callback: (entry: Entry) => void, error: (error: any) => void, id: string): void {
        this.getEntry(id).then(callback).catch(error)
    }
    _getChapters(callback: (chapter: TextChapter[]) => void, error: (error: any) => void, id: string): void {
        this.getChapters(id).then(callback).catch(error)
    }
    _getChapterDetails(callback: (details: TextChapterDetails) => void, error: (error: any) => void, id: string, entryId: string): void {
        this.getChapterDetails(id, entryId).then(callback).catch(error)
    }
    _getFilters(callback: (filters: Filter[]) => void, error: (error: any) => void): void {
        this.getFilters().then(callback).catch(error)
    }
    _getListings(callback: (listings: Listing[]) => void, error: (error: any) => void): void {
        this.getListings().then(callback).catch(error)
    }
    _getSettings(callback: (settings: Filter[]) => void, error: (error: any) => void): void {
        this.getSettings().then(callback).catch(error)
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

export abstract class ImageSource {
    abstract id: string

    abstract getListing(previousInfo: EntryResultsInfo | null, listing: Listing): Promise<EntryResults>
    abstract getSearchResults(previousInfo: EntryResultsInfo | null, query: string, filters: Filter[]): Promise<EntryResults>
    abstract getEntry(id: string): Promise<Entry>
    abstract getChapters(id: string): Promise<ImageChapter[]>
    abstract getChapterDetails(id: string, entryId: string): Promise<ImageChapterDetails>
    abstract getFilters(): Promise<Filter[]>
    abstract getListings(): Promise<Listing[]>
    abstract getSettings(): Promise<Filter[]>
    abstract modifyImageRequest(url: string, options: FetchOptions): Promise<{url: string, options: FetchOptions}>
    _getListing(callback: (results: EntryResults) => void, error: (error: any) => void, previousInfo: EntryResultsInfo | null, listing: Listing): void {
        this.getListing(previousInfo, listing).then(callback).catch(error)
    }
    _getSearchResults(callback: (results: EntryResults) => void, error: (error: any) => void, previousInfo: EntryResultsInfo | null, query: string, filters: Filter[]): void {
        this.getSearchResults(previousInfo, query, filters).then(callback).catch(error)
    }
    _getEntry(callback: (entry: Entry) => void, error: (error: any) => void, id: string): void {
        this.getEntry(id).then(callback).catch(error)
    }
    _getChapters(callback: (chapter: ImageChapter[]) => void, error: (error: any) => void, id: string): void {
        this.getChapters(id).then(callback).catch(error)
    }
    _getChapterDetails(callback: (details: ImageChapterDetails) => void, error: (error: any) => void, id: string, entryId: string): void {
        this.getChapterDetails(id, entryId).then(callback).catch(error)
    }
    _getFilters(callback: (filters: Filter[]) => void, error: (error: any) => void): void {
        this.getFilters().then(callback).catch(error)
    }
    _getListings(callback: (listings: Listing[]) => void, error: (error: any) => void): void {
        this.getListings().then(callback).catch(error)
    }
    _getSettings(callback: (settings: Filter[]) => void, error: (error: any) => void): void {
        this.getSettings().then(callback).catch(error)
    }
    _modifyImageRequest(callback: (data: {url: string, options: FetchOptions}) => void, error: (error: any) => void, url: string, options: FetchOptions): void {
        this.modifyImageRequest(url, options).then(callback).catch(error)
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

export abstract class VideoSource {
    abstract id: string

    abstract getListing(previousInfo: EntryResultsInfo | null, listing: Listing): Promise<EntryResults>
    abstract getSearchResults(previousInfo: EntryResultsInfo | null, query: string, filters: Filter[]): Promise<EntryResults>
    abstract getEntry(id: string): Promise<Entry>
    abstract getEpisodes(id: string): Promise<VideoEpisode[]>
    abstract getEpisodeDetails(id: string, entryId: string): Promise<VideoEpisodeDetails>
    abstract getFilters(): Promise<Filter[]>
    abstract getListings(): Promise<Listing[]>
    abstract getSettings(): Promise<Filter[]>
    abstract modifyVideoRequest(url: string, options: FetchOptions): Promise<{url: string, options: FetchOptions}>
    _getListing(callback: (results: EntryResults) => void, error: (error: any) => void, previousInfo: EntryResultsInfo | null, listing: Listing): void {
        this.getListing(previousInfo, listing).then(callback).catch(error)
    }
    _getSearchResults(callback: (results: EntryResults) => void, error: (error: any) => void, previousInfo: EntryResultsInfo | null, query: string, filters: Filter[]): void {
        this.getSearchResults(previousInfo, query, filters).then(callback).catch(error)
    }
    _getEntry(callback: (entry: Entry) => void, error: (error: any) => void, id: string): void {
        this.getEntry(id).then(callback).catch(error)
    }
    _getEpisodes(callback: (chapter: VideoEpisode[]) => void, error: (error: any) => void, id: string): void {
        this.getEpisodes(id).then(callback).catch(error)
    }
    _getEpisodeDetails(callback: (details: VideoEpisodeDetails) => void, error: (error: any) => void, id: string, entryId: string): void {
        this.getEpisodeDetails(id, entryId).then(callback).catch(error)
    }
    _getFilters(callback: (filters: Filter[]) => void, error: (error: any) => void): void {
        this.getFilters().then(callback).catch(error)
    }
    _getListings(callback: (listings: Listing[]) => void, error: (error: any) => void): void {
        this.getListings().then(callback).catch(error)
    }
    _getSettings(callback: (settings: Filter[]) => void, error: (error: any) => void): void {
        this.getSettings().then(callback).catch(error)
    }
    _modifyVideoRequest(callback: (data: {url: string, options: FetchOptions}) => void, error: (error: any) => void, url: string, options: FetchOptions): void {
        this.modifyVideoRequest(url, options).then(callback).catch(error)
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
