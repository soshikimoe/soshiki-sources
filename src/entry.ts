import { OnlyRequire, TypedEnum } from "./util"

export const EntryStatus = {
    unknown: "UNKNOWN",
    ongoing: "RELEASING",
    unreleased: "UNRELEASED",
    completed: "COMPLETED",
    hiatus: "HIATUS",
    cancelled: "CANCELLED"
} as const
export type EntryStatus = TypedEnum<typeof EntryStatus>

export const EntryContentRating = {
    safe: "SAFE",
    suggestive: "SUGGESTIVE",
    nsfw: "NSFW",
    unknown: "UNKNOWN"
} as const
export type EntryContentRating = TypedEnum<typeof EntryContentRating>

export const EntrySeason = {
    winter: "WINTER",
    spring: "SPRING",
    summer: "SUMMER",
    fall: "FALL"
} as const

export type EntrySeason = TypedEnum<typeof EntrySeason>

export const ImageEntryReadingMode = {
    rtl: "RTL",
    ltr: "LTR",
    verticalPaged: "VERTICAL_PAGED",
    verticalScroll: "VERTICAL_SCROLL"
}

export type ImageEntryReadingMode = TypedEnum<typeof ImageEntryReadingMode>

type Entry = {
    id: string,
    title: string,
    alternativeTitles: string[],
    cover?: string,
    alternativeCovers: string[],
    banner?: string,
    alternativeBanners: string[],
    tags: string[],
    synopsis?: string,
    contentRating: EntryContentRating,
    status: EntryStatus,
    score?: number,
    year?: number,
    links: string[],
}

export type TextEntry = Entry & {
    author?: string
}

export type IdentifiedTextEntry = TextEntry & {
    sourceId: string
}

export type ImageEntry = Entry & {
    author?: string,
    artist?: string,
    readingMode?: ImageEntryReadingMode
}

export type IdentifiedImageEntry = ImageEntry & {
    sourceId: string
}

export type VideoEntry = Entry & {
    season?: EntrySeason
}

export type IdentifiedVideoEntry = VideoEntry & {
    sourceId: string
}

const createEntry = (entry: OnlyRequire<Entry, "id" | "title">) => ({
    ...entry,
    alternativeTitles: entry.alternativeTitles ?? [],
    alternativeCovers: entry.alternativeCovers ?? [],
    alternativeBanners: entry.alternativeBanners ?? [],
    tags: entry.tags ?? [],
    contentRating: entry.contentRating ?? EntryContentRating.unknown,
    status: entry.status ?? EntryStatus.unknown,
    links: entry.links ?? []
} as Entry)

export const createTextEntry = (entry: OnlyRequire<TextEntry, "id" | "title">) => ({
    ...entry,
    ...createEntry(entry)
} as TextEntry)

export const createImageEntry = (entry: OnlyRequire<ImageEntry, "id" | "title">) => ({
    ...entry,
    ...createEntry(entry)
} as ImageEntry)

export const createVideoEntry = (entry: OnlyRequire<VideoEntry, "id" | "title">) => ({
    ...entry,
    ...createEntry(entry)
} as VideoEntry)

type EntryItem = {
    id: string,
    entryId: string,
    name?: string,
    thumbnail?: string,
    timestamp?: number
}

export type TextChapter = EntryItem & {
    chapter: number,
    volume?: number,
    translator?: string,
}

export type IdentifiedTextChapter = TextChapter & {
    sourceId: string
}

export const createTextChapter = (chapter: TextChapter) => chapter

export type ImageChapter = EntryItem & {
    chapter: number,
    volume?: number,
    translator?: string,
}

export type IdentifiedImageChapter = ImageChapter & {
    sourceId: string
}

export const createImageChapter = (chapter: ImageChapter) => chapter

export enum VideoEpisodeType {
    sub = "SUB",
    dub = "DUB",
    native = "NATIVE",
    unknown = "UNKNOWN"
}

export type VideoEpisode = EntryItem & {
    episode: number,
    season?: number,
    type: VideoEpisodeType,
}

export type IdentifiedVideoEpisode = VideoEpisode & {
    sourceId: string
}

export const createVideoEpisode = (episode: VideoEpisode) => episode

export type TextChapterDetails = {
    id: string,
    entryId: string,
    html: string,
    baseUrl?: string
}

export const createTextChapterDetails = (details: TextChapterDetails) => details

export type ImageChapterDetails = {
    id: string,
    entryId: string,
    pages: ImageChapterPage[]
}

export const createImageChapterDetails = (details: ImageChapterDetails) => details

export type ImageChapterPage = {
    url?: string,
    base64?: string
}

export const createImageChapterPage = (page: ImageChapterPage) => page

export type VideoEpisodeDetails = {
    id: string,
    entryId: string,
    providers: VideoEpisodeProvider[]
}

export const createVideoEpisodeDetails = (details: VideoEpisodeDetails) => details

export type VideoEpisodeProvider = {
    name: string,
    urls: VideoEpisodeUrl[]
}

export const createVideoEpisodeProvider = (provider: VideoEpisodeProvider) => provider

export type VideoEpisodeUrl = {
    url: string,
    quality: number | "AUTO" | "UNKNOWN"
}

export const createVideoEpisodeUrl = (url: VideoEpisodeUrl) => url

type Results<T> = {
    results: T[],
    page: number,
    hasMore: boolean
}

export type TextEntryResults = Results<TextEntry>

export type IdentifiedTextEntryResults = Results<IdentifiedTextEntry>

export const createTextEntryResults = (results: TextEntryResults) => results

export type ImageEntryResults = Results<ImageEntry>

export type IdentifiedImageEntryResults = Results<IdentifiedImageEntry>

export const createImageEntryResults = (results: ImageEntryResults) => results

export type VideoEntryResults = Results<VideoEntry>

export type IdentifiedVideoEntryResults = Results<IdentifiedVideoEntry>

export const createVideoEntryResults = (results: VideoEntryResults) => results

export type TextChapterResults = Results<TextChapter>

export type IdentifiedTextChapterResults = Results<IdentifiedTextChapter>

export const createTextChapterResults = (results: TextChapterResults) => results

export type ImageChapterResults = Results<ImageChapter>

export type IdentifiedImageChapterResults = Results<IdentifiedImageChapter>

export const createImageChapterResults = (results: ImageChapterResults) => results

export type VideoEpisodeResults = Results<VideoEpisode>

export type IdentifiedVideoEpisodeResults = Results<IdentifiedVideoEpisode>

export const createVideoEpisodeResults = (results: VideoEpisodeResults) => results