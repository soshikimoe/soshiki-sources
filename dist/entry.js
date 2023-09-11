"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVideoEpisodeResults = exports.createImageChapterResults = exports.createTextChapterResults = exports.createVideoEntryResults = exports.createImageEntryResults = exports.createTextEntryResults = exports.createVideoEpisodeUrl = exports.createVideoEpisodeProvider = exports.createVideoEpisodeDetails = exports.createImageChapterPage = exports.createImageChapterDetails = exports.createTextChapterDetails = exports.createVideoEpisode = exports.VideoEpisodeType = exports.createImageChapter = exports.createTextChapter = exports.createVideoEntry = exports.createImageEntry = exports.createTextEntry = exports.ImageEntryReadingMode = exports.EntrySeason = exports.EntryContentRating = exports.EntryStatus = void 0;
exports.EntryStatus = {
    unknown: "UNKNOWN",
    ongoing: "RELEASING",
    unreleased: "UNRELEASED",
    completed: "COMPLETED",
    hiatus: "HIATUS",
    cancelled: "CANCELLED"
};
exports.EntryContentRating = {
    safe: "SAFE",
    suggestive: "SUGGESTIVE",
    nsfw: "NSFW",
    unknown: "UNKNOWN"
};
exports.EntrySeason = {
    winter: "WINTER",
    spring: "SPRING",
    summer: "SUMMER",
    fall: "FALL",
    unknown: "UNKNOWN"
};
exports.ImageEntryReadingMode = {
    rtl: "RTL",
    ltr: "LTR",
    verticalPaged: "VERTICAL_PAGED",
    verticalScroll: "VERTICAL_SCROLL"
};
const createEntry = (entry) => {
    var _a, _b, _c, _d, _e, _f, _g;
    return (Object.assign(Object.assign({}, entry), { alternativeTitles: (_a = entry.alternativeTitles) !== null && _a !== void 0 ? _a : [], alternativeCovers: (_b = entry.alternativeCovers) !== null && _b !== void 0 ? _b : [], alternativeBanners: (_c = entry.alternativeBanners) !== null && _c !== void 0 ? _c : [], tags: (_d = entry.tags) !== null && _d !== void 0 ? _d : [], contentRating: (_e = entry.contentRating) !== null && _e !== void 0 ? _e : exports.EntryContentRating.unknown, status: (_f = entry.status) !== null && _f !== void 0 ? _f : exports.EntryStatus.unknown, links: (_g = entry.links) !== null && _g !== void 0 ? _g : [] }));
};
const createTextEntry = (entry) => (Object.assign(Object.assign({}, entry), createEntry(entry)));
exports.createTextEntry = createTextEntry;
const createImageEntry = (entry) => (Object.assign(Object.assign({}, entry), createEntry(entry)));
exports.createImageEntry = createImageEntry;
const createVideoEntry = (entry) => {
    var _a;
    return (Object.assign(Object.assign(Object.assign({}, entry), { season: (_a = entry.season) !== null && _a !== void 0 ? _a : exports.EntrySeason.unknown }), createEntry(entry)));
};
exports.createVideoEntry = createVideoEntry;
const createTextChapter = (chapter) => chapter;
exports.createTextChapter = createTextChapter;
const createImageChapter = (chapter) => chapter;
exports.createImageChapter = createImageChapter;
var VideoEpisodeType;
(function (VideoEpisodeType) {
    VideoEpisodeType["sub"] = "SUB";
    VideoEpisodeType["dub"] = "DUB";
    VideoEpisodeType["native"] = "NATIVE";
    VideoEpisodeType["unknown"] = "UNKNOWN";
})(VideoEpisodeType || (exports.VideoEpisodeType = VideoEpisodeType = {}));
const createVideoEpisode = (episode) => episode;
exports.createVideoEpisode = createVideoEpisode;
const createTextChapterDetails = (details) => details;
exports.createTextChapterDetails = createTextChapterDetails;
const createImageChapterDetails = (details) => details;
exports.createImageChapterDetails = createImageChapterDetails;
const createImageChapterPage = (page) => page;
exports.createImageChapterPage = createImageChapterPage;
const createVideoEpisodeDetails = (details) => details;
exports.createVideoEpisodeDetails = createVideoEpisodeDetails;
const createVideoEpisodeProvider = (provider) => provider;
exports.createVideoEpisodeProvider = createVideoEpisodeProvider;
const createVideoEpisodeUrl = (url) => url;
exports.createVideoEpisodeUrl = createVideoEpisodeUrl;
const createTextEntryResults = (results) => results;
exports.createTextEntryResults = createTextEntryResults;
const createImageEntryResults = (results) => results;
exports.createImageEntryResults = createImageEntryResults;
const createVideoEntryResults = (results) => results;
exports.createVideoEntryResults = createVideoEntryResults;
const createTextChapterResults = (results) => results;
exports.createTextChapterResults = createTextChapterResults;
const createImageChapterResults = (results) => results;
exports.createImageChapterResults = createImageChapterResults;
const createVideoEpisodeResults = (results) => results;
exports.createVideoEpisodeResults = createVideoEpisodeResults;
