"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoSource = exports.ImageSource = exports.TextSource = void 0;
class TextSource {
    _getListing(callback, error, listing, page) {
        this.getListing(listing, page).then(res => callback(Object.assign(Object.assign({}, res), { results: res.results.map(item => (Object.assign({ sourceId: this.id }, item))) }))).catch(error);
    }
    _getSearchResults(callback, error, query, page, filters) {
        this.getSearchResults(query, page, filters).then(res => callback(Object.assign(Object.assign({}, res), { results: res.results.map(item => (Object.assign({ sourceId: this.id }, item))) }))).catch(error);
    }
    _getEntry(callback, error, id) {
        this.getEntry(id).then(entry => callback(Object.assign({ sourceId: this.id }, entry))).catch(error);
    }
    _getChapters(callback, error, id, page) {
        this.getChapters(id, page).then(res => callback(Object.assign(Object.assign({}, res), { results: res.results.map(item => (Object.assign({ sourceId: this.id }, item))) }))).catch(error);
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
    _getListing(callback, error, listing, page) {
        this.getListing(listing, page).then(res => callback(Object.assign(Object.assign({}, res), { results: res.results.map(item => (Object.assign({ sourceId: this.id }, item))) }))).catch(error);
    }
    _getSearchResults(callback, error, query, page, filters) {
        this.getSearchResults(query, page, filters).then(res => callback(Object.assign(Object.assign({}, res), { results: res.results.map(item => (Object.assign({ sourceId: this.id }, item))) }))).catch(error);
    }
    _getEntry(callback, error, id) {
        this.getEntry(id).then(entry => callback(Object.assign({ sourceId: this.id }, entry))).catch(error);
    }
    _getChapters(callback, error, id, page) {
        this.getChapters(id, page).then(res => callback(Object.assign(Object.assign({}, res), { results: res.results.map(item => (Object.assign({ sourceId: this.id }, item))) }))).catch(error);
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
    _getListing(callback, error, listing, page) {
        this.getListing(listing, page).then(res => callback(Object.assign(Object.assign({}, res), { results: res.results.map(item => (Object.assign({ sourceId: this.id }, item))) }))).catch(error);
    }
    _getSearchResults(callback, error, query, page, filters) {
        this.getSearchResults(query, page, filters).then(res => callback(Object.assign(Object.assign({}, res), { results: res.results.map(item => (Object.assign({ sourceId: this.id }, item))) }))).catch(error);
    }
    _getEntry(callback, error, id) {
        this.getEntry(id).then(entry => callback(Object.assign({ sourceId: this.id }, entry))).catch(error);
    }
    _getEpisodes(callback, error, id, page) {
        this.getEpisodes(id, page).then(res => callback(Object.assign(Object.assign({}, res), { results: res.results.map(item => (Object.assign({ sourceId: this.id }, item))) }))).catch(error);
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
