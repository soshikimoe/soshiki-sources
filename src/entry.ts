export enum EntryStatus {
    unknown = "UNKNOWN",
    ongoing = "ONGOING",
    completed = "COMPLETED",
    dropped = "DROPPED",
    hiatus = "HIATUS"
}

export enum EntryContentRating {
    safe = "SAFE",
    suggestive = "SUGGESTIVE",
    nsfw = "NSFW"
}

export type ShortEntry = {
    id: string,
    title: string,
    subtitle: string,
    cover: string
}

export const createShortEntry = (entry: ShortEntry) => entry

export type Entry = {
    id: string,
    title: string,
    staff: string[],
    tags: string[],
    cover: string,
    nsfw: EntryContentRating,
    status: EntryStatus,
    url: string,
    description: string
}

export const createEntry = (entry: Entry) => entry

export type TextChapter = {
    id: string,
    entryId: string,
    name?: string,
    chapter: number,
    volume?: number,
    translator?: string
}

export const createTextChapter = (chapter: TextChapter) => chapter

export type ImageChapter = {
    id: string,
    entryId: string,
    name?: string,
    chapter: number,
    volume?: number,
    translator?: string
}

export const createImageChapter = (chapter: ImageChapter) => chapter

export enum VideoEpisodeType {
    sub = "SUB",
    dub = "DUB",
    unknown = "UNKNOWN"
}

export type VideoEpisode = {
    id: string,
    entryId: string,
    name?: string,
    episode: number,
    type: VideoEpisodeType
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
    index: number,
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
    type: VideoEpisodeUrlType,
    url: string,
    quality?: number
}

export const createVideoEpisodeUrl = (url: VideoEpisodeUrl) => url

export enum VideoEpisodeUrlType {
    hls = "HLS",
    video = "VIDEO"
}

export type EntryResultsInfo = {
    page: number
}

export const createEntryResultsInfo = (info: EntryResultsInfo) => info

export type EntryResults = EntryResultsInfo & {
    entries: ShortEntry[],
    hasMore: boolean
}

export const createEntryResults = (results: EntryResults) => results