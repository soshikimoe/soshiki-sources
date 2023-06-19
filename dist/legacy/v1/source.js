"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoSource = exports.ImageSource = exports.TextSource = void 0;
class TextSource {
    _getListing(callback, error, previousInfo, listing) {
        this.getListing(previousInfo, listing).then(callback).catch(error);
    }
    _getSearchResults(callback, error, previousInfo, query, filters) {
        this.getSearchResults(previousInfo, query, filters).then(callback).catch(error);
    }
    _getEntry(callback, error, id) {
        this.getEntry(id).then(callback).catch(error);
    }
    _getChapters(callback, error, id) {
        this.getChapters(id).then(callback).catch(error);
    }
    _getChapterDetails(callback, error, id, entryId) {
        this.getChapterDetails(id, entryId).then(callback).catch(error);
    }
    _getFilters(callback, error) {
        this.getFilters().then(callback).catch(error);
    }
    _getListings(callback, error) {
        this.getListings().then(callback).catch(error);
    }
    _getSettings(callback, error) {
        this.getSettings().then(callback).catch(error);
    }
    getSettingsValue(id) {
        return getSettingsValue(id, this.id);
    }
    getStorageValue(id) {
        return getStorageValue(id, this.id);
    }
    setStorageValue(id, value) {
        setStorageValue(id, value, this.id);
    }
    getKeychainValue(id) {
        return getKeychainValue(id, this.id);
    }
    setKeychainValue(id, value) {
        setKeychainValue(id, value, this.id);
    }
}
exports.TextSource = TextSource;
class ImageSource {
    _getListing(callback, error, previousInfo, listing) {
        this.getListing(previousInfo, listing).then(callback).catch(error);
    }
    _getSearchResults(callback, error, previousInfo, query, filters) {
        this.getSearchResults(previousInfo, query, filters).then(callback).catch(error);
    }
    _getEntry(callback, error, id) {
        this.getEntry(id).then(callback).catch(error);
    }
    _getChapters(callback, error, id) {
        this.getChapters(id).then(callback).catch(error);
    }
    _getChapterDetails(callback, error, id, entryId) {
        this.getChapterDetails(id, entryId).then(callback).catch(error);
    }
    _getFilters(callback, error) {
        this.getFilters().then(callback).catch(error);
    }
    _getListings(callback, error) {
        this.getListings().then(callback).catch(error);
    }
    _getSettings(callback, error) {
        this.getSettings().then(callback).catch(error);
    }
    _modifyImageRequest(callback, error, url, options) {
        this.modifyImageRequest(url, options).then(callback).catch(error);
    }
    getSettingsValue(id) {
        return getSettingsValue(id, this.id);
    }
    getStorageValue(id) {
        return getStorageValue(id, this.id);
    }
    setStorageValue(id, value) {
        setStorageValue(id, value, this.id);
    }
    getKeychainValue(id) {
        return getKeychainValue(id, this.id);
    }
    setKeychainValue(id, value) {
        setKeychainValue(id, value, this.id);
    }
}
exports.ImageSource = ImageSource;
class VideoSource {
    _getListing(callback, error, previousInfo, listing) {
        this.getListing(previousInfo, listing).then(callback).catch(error);
    }
    _getSearchResults(callback, error, previousInfo, query, filters) {
        this.getSearchResults(previousInfo, query, filters).then(callback).catch(error);
    }
    _getEntry(callback, error, id) {
        this.getEntry(id).then(callback).catch(error);
    }
    _getEpisodes(callback, error, id) {
        this.getEpisodes(id).then(callback).catch(error);
    }
    _getEpisodeDetails(callback, error, id, entryId) {
        this.getEpisodeDetails(id, entryId).then(callback).catch(error);
    }
    _getFilters(callback, error) {
        this.getFilters().then(callback).catch(error);
    }
    _getListings(callback, error) {
        this.getListings().then(callback).catch(error);
    }
    _getSettings(callback, error) {
        this.getSettings().then(callback).catch(error);
    }
    _modifyVideoRequest(callback, error, url, options) {
        this.modifyVideoRequest(url, options).then(callback).catch(error);
    }
    getSettingsValue(id) {
        return getSettingsValue(id, this.id);
    }
    getStorageValue(id) {
        return getStorageValue(id, this.id);
    }
    setStorageValue(id, value) {
        setStorageValue(id, value, this.id);
    }
    getKeychainValue(id) {
        return getKeychainValue(id, this.id);
    }
    setKeychainValue(id, value) {
        setKeychainValue(id, value, this.id);
    }
}
exports.VideoSource = VideoSource;
