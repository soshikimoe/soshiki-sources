"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntryResults = exports.createEntryResultsInfo = exports.VideoEpisodeUrlType = exports.createVideoEpisodeUrl = exports.createVideoEpisodeProvider = exports.createVideoEpisodeDetails = exports.createImageChapterPage = exports.createImageChapterDetails = exports.createTextChapterDetails = exports.createVideoEpisode = exports.VideoEpisodeType = exports.createImageChapter = exports.createTextChapter = exports.createEntry = exports.createShortEntry = exports.EntrySeason = exports.EntryContentRating = exports.EntryStatus = void 0;
var EntryStatus;
(function (EntryStatus) {
    EntryStatus["unknown"] = "UNKNOWN";
    EntryStatus["ongoing"] = "ONGOING";
    EntryStatus["completed"] = "COMPLETED";
    EntryStatus["dropped"] = "DROPPED";
    EntryStatus["hiatus"] = "HIATUS";
})(EntryStatus = exports.EntryStatus || (exports.EntryStatus = {}));
var EntryContentRating;
(function (EntryContentRating) {
    EntryContentRating["safe"] = "SAFE";
    EntryContentRating["suggestive"] = "SUGGESTIVE";
    EntryContentRating["nsfw"] = "NSFW";
})(EntryContentRating = exports.EntryContentRating || (exports.EntryContentRating = {}));
var EntrySeason;
(function (EntrySeason) {
    EntrySeason["winter"] = "WINTER";
    EntrySeason["spring"] = "SPRING";
    EntrySeason["summer"] = "SUMMER";
    EntrySeason["fall"] = "FALL";
})(EntrySeason = exports.EntrySeason || (exports.EntrySeason = {}));
const createShortEntry = (entry) => entry;
exports.createShortEntry = createShortEntry;
const createEntry = (entry) => entry;
exports.createEntry = createEntry;
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
})(VideoEpisodeType = exports.VideoEpisodeType || (exports.VideoEpisodeType = {}));
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
var VideoEpisodeUrlType;
(function (VideoEpisodeUrlType) {
    VideoEpisodeUrlType["hls"] = "HLS";
    VideoEpisodeUrlType["video"] = "VIDEO";
})(VideoEpisodeUrlType = exports.VideoEpisodeUrlType || (exports.VideoEpisodeUrlType = {}));
const createEntryResultsInfo = (info) => info;
exports.createEntryResultsInfo = createEntryResultsInfo;
const createEntryResults = (results) => results;
exports.createEntryResults = createEntryResults;
