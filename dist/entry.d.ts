import { OnlyRequire, TypedEnum } from "./util";
export declare const EntryStatus: {
    readonly unknown: "UNKNOWN";
    readonly ongoing: "RELEASING";
    readonly unreleased: "UNRELEASED";
    readonly completed: "COMPLETED";
    readonly hiatus: "HIATUS";
    readonly cancelled: "CANCELLED";
};
export type EntryStatus = TypedEnum<typeof EntryStatus>;
export declare const EntryContentRating: {
    readonly safe: "SAFE";
    readonly suggestive: "SUGGESTIVE";
    readonly nsfw: "NSFW";
    readonly unknown: "UNKNOWN";
};
export type EntryContentRating = TypedEnum<typeof EntryContentRating>;
export declare const EntrySeason: {
    readonly winter: "WINTER";
    readonly spring: "SPRING";
    readonly summer: "SUMMER";
    readonly fall: "FALL";
};
export type EntrySeason = TypedEnum<typeof EntrySeason>;
export declare const ImageEntryReadingMode: {
    rtl: string;
    ltr: string;
    verticalPaged: string;
    verticalScroll: string;
};
export type ImageEntryReadingMode = TypedEnum<typeof ImageEntryReadingMode>;
type Entry = {
    id: string;
    title: string;
    alternativeTitles: string[];
    cover?: string;
    alternativeCovers: string[];
    banner?: string;
    alternativeBanners: string[];
    tags: string[];
    synopsis?: string;
    contentRating: EntryContentRating;
    status: EntryStatus;
    score?: number;
    year?: number;
    links: string[];
};
export type TextEntry = Entry & {
    author?: string;
};
export type IdentifiedTextEntry = TextEntry & {
    sourceId: string;
};
export type ImageEntry = Entry & {
    author?: string;
    artist?: string;
    readingMode?: ImageEntryReadingMode;
};
export type IdentifiedImageEntry = ImageEntry & {
    sourceId: string;
};
export type VideoEntry = Entry & {
    season?: EntrySeason;
};
export type IdentifiedVideoEntry = VideoEntry & {
    sourceId: string;
};
export declare const createTextEntry: (entry: OnlyRequire<TextEntry, "id" | "title">) => TextEntry;
export declare const createImageEntry: (entry: OnlyRequire<ImageEntry, "id" | "title">) => ImageEntry;
export declare const createVideoEntry: (entry: OnlyRequire<VideoEntry, "id" | "title">) => VideoEntry;
type EntryItem = {
    id: string;
    entryId: string;
    name?: string;
    thumbnail?: string;
    timestamp?: number;
};
export type TextChapter = EntryItem & {
    chapter: number;
    volume?: number;
    translator?: string;
};
export type IdentifiedTextChapter = TextChapter & {
    sourceId: string;
};
export declare const createTextChapter: (chapter: TextChapter) => TextChapter;
export type ImageChapter = EntryItem & {
    chapter: number;
    volume?: number;
    translator?: string;
};
export type IdentifiedImageChapter = ImageChapter & {
    sourceId: string;
};
export declare const createImageChapter: (chapter: ImageChapter) => ImageChapter;
export declare enum VideoEpisodeType {
    sub = "SUB",
    dub = "DUB",
    native = "NATIVE",
    unknown = "UNKNOWN"
}
export type VideoEpisode = EntryItem & {
    episode: number;
    season?: number;
    type: VideoEpisodeType;
};
export type IdentifiedVideoEpisode = VideoEpisode & {
    sourceId: string;
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
    url: string;
    quality: number | "AUTO" | "UNKNOWN";
};
export declare const createVideoEpisodeUrl: (url: VideoEpisodeUrl) => VideoEpisodeUrl;
type Results<T> = {
    results: T[];
    page: number;
    hasMore: boolean;
};
export type TextEntryResults = Results<TextEntry>;
export type IdentifiedTextEntryResults = Results<IdentifiedTextEntry>;
export declare const createTextEntryResults: (results: TextEntryResults) => TextEntryResults;
export type ImageEntryResults = Results<ImageEntry>;
export type IdentifiedImageEntryResults = Results<IdentifiedImageEntry>;
export declare const createImageEntryResults: (results: ImageEntryResults) => ImageEntryResults;
export type VideoEntryResults = Results<VideoEntry>;
export type IdentifiedVideoEntryResults = Results<IdentifiedVideoEntry>;
export declare const createVideoEntryResults: (results: VideoEntryResults) => VideoEntryResults;
export type TextChapterResults = Results<TextChapter>;
export type IdentifiedTextChapterResults = Results<IdentifiedTextChapter>;
export declare const createTextChapterResults: (results: TextChapterResults) => TextChapterResults;
export type ImageChapterResults = Results<ImageChapter>;
export type IdentifiedImageChapterResults = Results<IdentifiedImageChapter>;
export declare const createImageChapterResults: (results: ImageChapterResults) => ImageChapterResults;
export type VideoEpisodeResults = Results<VideoEpisode>;
export type IdentifiedVideoEpisodeResults = Results<IdentifiedVideoEpisode>;
export declare const createVideoEpisodeResults: (results: VideoEpisodeResults) => VideoEpisodeResults;
export {};
