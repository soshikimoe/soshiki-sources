import type {
    TextChapterDetails,
    ImageChapterDetails,
    VideoEpisodeDetails,
    TextEntryResults,
    ImageEntryResults,
    VideoEntryResults,
    TextChapterResults,
    TextEntry,
    ImageEntry,
    VideoEntry,
    ImageChapterResults,
    VideoEpisodeResults,
    IdentifiedTextEntryResults,
    IdentifiedImageEntryResults,
    IdentifiedVideoEntryResults,
    IdentifiedVideoEpisodeResults,
    IdentifiedImageChapterResults,
    IdentifiedTextChapterResults
} from "./entry"
import { FetchOptions } from "./fetch"
import { Filter, FilterGroup } from "./filter"
import { Listing } from "./listing"

export abstract class TextSource {
    abstract id: string

    abstract getListing(listing: Listing, page: number): Promise<TextEntryResults>
    abstract getSearchResults(query: string, page: number, filters: Filter[]): Promise<TextEntryResults>
    abstract getEntry(id: string): Promise<TextEntry>
    abstract getChapters(id: string, page: number): Promise<TextChapterResults>
    abstract getChapterDetails(id: string, entryId: string): Promise<TextChapterDetails>
    abstract getFilters(): Promise<FilterGroup[]>
    abstract getListings(): Promise<Listing[]>
    abstract getSettings(): Promise<FilterGroup[]>

    _getListing(callback: (results: IdentifiedTextEntryResults) => void, error: (error: any) => void, listing: Listing, page: number): void {
        this.getListing(listing, page).then(res => callback({ ...res, results: res.results.map(item => ({ sourceId: this.id, ...item })) })).catch(error)
    }
    _getSearchResults(callback: (results: IdentifiedTextEntryResults) => void, error: (error: any) => void, query: string, page: number, filters: Filter[]): void {
        this.getSearchResults(query, page, filters).then(res => callback({ ...res, results: res.results.map(item => ({ sourceId: this.id, ...item })) })).catch(error)
    }
    _getEntry(callback: (entry: TextEntry & { sourceId: string }) => void, error: (error: any) => void, id: string): void {
        this.getEntry(id).then(entry => callback({ sourceId: this.id, ...entry })).catch(error)
    }
    _getChapters(callback: (chapter: IdentifiedTextChapterResults) => void, error: (error: any) => void, id: string, page: number): void {
        this.getChapters(id, page).then(res => callback({ ...res, results: res.results.map(item => ({ sourceId: this.id, ...item })) })).catch(error)
    }
    _getChapterDetails(callback: (details: TextChapterDetails) => void, error: (error: any) => void, id: string, entryId: string): void {
        this.getChapterDetails(id, entryId).then(callback).catch(error)
    }
    _getFilters(callback: (filters: FilterGroup[]) => void, error: (error: any) => void): void {
        this.getFilters().then(callback).catch(error)
    }
    _getListings(callback: (listings: Listing[]) => void, error: (error: any) => void): void {
        this.getListings().then(callback).catch(error)
    }
    _getSettings(callback: (settings: FilterGroup[]) => void, error: (error: any) => void): void {
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

    abstract getListing(listing: Listing, page: number): Promise<ImageEntryResults>
    abstract getSearchResults(query: string, page: number, filters: Filter[]): Promise<ImageEntryResults>
    abstract getEntry(id: string): Promise<ImageEntry>
    abstract getChapters(id: string, page: number): Promise<ImageChapterResults>
    abstract getChapterDetails(id: string, entryId: string): Promise<ImageChapterDetails>
    abstract getFilters(): Promise<FilterGroup[]>
    abstract getListings(): Promise<Listing[]>
    abstract getSettings(): Promise<FilterGroup[]>
    abstract modifyImageRequest(url: string, options: FetchOptions): Promise<{url: string, options: FetchOptions}>
    
    _getListing(callback: (results: IdentifiedImageEntryResults) => void, error: (error: any) => void, listing: Listing, page: number): void {
        this.getListing(listing, page).then(res => callback({ ...res, results: res.results.map(item => ({ sourceId: this.id, ...item })) })).catch(error)
    }
    _getSearchResults(callback: (results: IdentifiedImageEntryResults) => void, error: (error: any) => void, query: string, page: number, filters: Filter[]): void {
        this.getSearchResults(query, page, filters).then(res => callback({ ...res, results: res.results.map(item => ({ sourceId: this.id, ...item })) })).catch(error)
    }
    _getEntry(callback: (entry: ImageEntry & { sourceId: string }) => void, error: (error: any) => void, id: string): void {
        this.getEntry(id).then(entry => callback({ sourceId: this.id, ...entry })).catch(error)
    }
    _getChapters(callback: (chapter: IdentifiedImageChapterResults) => void, error: (error: any) => void, id: string, page: number): void {
        this.getChapters(id, page).then(res => callback({ ...res, results: res.results.map(item => ({ sourceId: this.id, ...item })) })).catch(error)
    }
    _getChapterDetails(callback: (details: ImageChapterDetails) => void, error: (error: any) => void, id: string, entryId: string): void {
        this.getChapterDetails(id, entryId).then(callback).catch(error)
    }
    _getFilters(callback: (filters: FilterGroup[]) => void, error: (error: any) => void): void {
        this.getFilters().then(callback).catch(error)
    }
    _getListings(callback: (listings: Listing[]) => void, error: (error: any) => void): void {
        this.getListings().then(callback).catch(error)
    }
    _getSettings(callback: (settings: FilterGroup[]) => void, error: (error: any) => void): void {
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

    abstract getListing(listing: Listing, page: number): Promise<VideoEntryResults>
    abstract getSearchResults(query: string, page: number, filters: Filter[]): Promise<VideoEntryResults>
    abstract getEntry(id: string): Promise<VideoEntry>
    abstract getEpisodes(id: string, page: number): Promise<VideoEpisodeResults>
    abstract getEpisodeDetails(id: string, entryId: string): Promise<VideoEpisodeDetails>
    abstract getFilters(): Promise<FilterGroup[]>
    abstract getListings(): Promise<Listing[]>
    abstract getSettings(): Promise<FilterGroup[]>
    abstract modifyVideoRequest(url: string, options: FetchOptions): Promise<{url: string, options: FetchOptions}>

    _getListing(callback: (results: IdentifiedVideoEntryResults) => void, error: (error: any) => void, listing: Listing, page: number): void {
        this.getListing(listing, page).then(res => callback({ ...res, results: res.results.map(item => ({ sourceId: this.id, ...item })) })).catch(error)
    }
    _getSearchResults(callback: (results: IdentifiedVideoEntryResults) => void, error: (error: any) => void, query: string, page: number, filters: Filter[]): void {
        this.getSearchResults(query, page, filters).then(res => callback({ ...res, results: res.results.map(item => ({ sourceId: this.id, ...item })) })).catch(error)
    }
    _getEntry(callback: (entry: VideoEntry & { sourceId: string }) => void, error: (error: any) => void, id: string): void {
        this.getEntry(id).then(entry => callback({ sourceId: this.id, ...entry })).catch(error)
    }
    _getEpisodes(callback: (episode: IdentifiedVideoEpisodeResults) => void, error: (error: any) => void, id: string, page: number): void {
        this.getEpisodes(id, page).then(res => callback({ ...res, results: res.results.map(item => ({ sourceId: this.id, ...item })) })).catch(error)
    }
    _getEpisodeDetails(callback: (details: VideoEpisodeDetails) => void, error: (error: any) => void, id: string, entryId: string): void {
        this.getEpisodeDetails(id, entryId).then(callback).catch(error)
    }
    _getFilters(callback: (filters: FilterGroup[]) => void, error: (error: any) => void): void {
        this.getFilters().then(callback).catch(error)
    }
    _getListings(callback: (listings: Listing[]) => void, error: (error: any) => void): void {
        this.getListings().then(callback).catch(error)
    }
    _getSettings(callback: (settings: FilterGroup[]) => void, error: (error: any) => void): void {
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
