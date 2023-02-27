export declare enum EntryStatus {
    unknown = "UNKNOWN",
    ongoing = "ONGOING",
    completed = "COMPLETED",
    dropped = "DROPPED",
    hiatus = "HIATUS"
}
export declare enum EntryContentRating {
    safe = "SAFE",
    suggestive = "SUGGESTIVE",
    nsfw = "NSFW"
}
export type ShortEntry = {
    id: string;
    title: string;
    subtitle: string;
    cover: string;
};
export declare const createShortEntry: (entry: ShortEntry) => ShortEntry;
export type Entry = {
    id: string;
    title: string;
    staff: string[];
    tags: string[];
    cover: string;
    nsfw: EntryContentRating;
    status: EntryStatus;
    url: string;
    description: string;
};
export declare const createEntry: (entry: Entry) => Entry;
export type TextChapter = {
    id: string;
    entryId: string;
    name?: string;
    chapter: number;
    volume?: number;
    translator?: string;
};
export declare const createTextChapter: (chapter: TextChapter) => TextChapter;
export type ImageChapter = {
    id: string;
    entryId: string;
    name?: string;
    chapter: number;
    volume?: number;
    translator?: string;
};
export declare const createImageChapter: (chapter: ImageChapter) => ImageChapter;
export declare enum VideoEpisodeType {
    sub = "SUB",
    dub = "DUB",
    unknown = "UNKNOWN"
}
export type VideoEpisode = {
    id: string;
    entryId: string;
    name?: string;
    episode: number;
    type: VideoEpisodeType;
};
export declare const createVideoEpisode: (episode: VideoEpisode) => VideoEpisode;
export type TextChapterDetails = {
    id: string;
    entryId: string;
    html: string;
    baseUrl?: string;
};
export declare const createTextChapterDetails: (details: TextChapterDetails) => TextChapterDetails;
export type ImageChapterDetails = {
    id: string;
    entryId: string;
    pages: ImageChapterPage[];
};
export declare const createImageChapterDetails: (details: ImageChapterDetails) => ImageChapterDetails;
export type ImageChapterPage = {
    index: number;
    url?: string;
    base64?: string;
};
export declare const createImageChapterPage: (page: ImageChapterPage) => ImageChapterPage;
export type VideoEpisodeDetails = {
    id: string;
    entryId: string;
    providers: VideoEpisodeProvider[];
};
export declare const createVideoEpisodeDetails: (details: VideoEpisodeDetails) => VideoEpisodeDetails;
export type VideoEpisodeProvider = {
    name: string;
    urls: VideoEpisodeUrl[];
};
export declare const createVideoEpisodeProvider: (provider: VideoEpisodeProvider) => VideoEpisodeProvider;
export type VideoEpisodeUrl = {
    type: VideoEpisodeUrlType;
    url: string;
    quality?: number;
};
export declare const createVideoEpisodeUrl: (url: VideoEpisodeUrl) => VideoEpisodeUrl;
export declare enum VideoEpisodeUrlType {
    hls = "HLS",
    video = "VIDEO"
}
export type EntryResultsInfo = {
    page: number;
};
export declare const createEntryResultsInfo: (info: EntryResultsInfo) => EntryResultsInfo;
export type EntryResults = EntryResultsInfo & {
    entries: ShortEntry[];
    hasMore: boolean;
};
export declare const createEntryResults: (results: EntryResults) => EntryResults;
