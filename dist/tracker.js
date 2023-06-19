"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = exports.MediaType = void 0;
exports.MediaType = {
    text: "TEXT",
    image: "IMAGE",
    video: "VIDEO"
};
class Tracker {
    _getAuthUrl() {
        return this.getAuthUrl();
    }
    _logout() {
        this.logout();
    }
    _handleResponse(callback, error, url) {
        this.handleResponse(url).then(callback).catch(error);
    }
    _getLibrary(callback, error, mediaType) {
        this.getLibrary(mediaType).then(callback).catch(error);
    }
    _getHistory(callback, error, mediaType, id) {
        this.getHistory(mediaType, id).then(callback).catch(error);
    }
    _setHistory(callback, error, mediaType, id, history) {
        this.setHistory(mediaType, id, history).then(callback).catch(error);
    }
    _deleteHistory(callback, error, mediaType, id) {
        this.deleteHistory(mediaType, id).then(callback).catch(error);
    }
    _getSearchResults(callback, error, mediaType, query, page) {
        this.getSearchResults(mediaType, query, page).then(callback).catch(error);
    }
    setLoginStatus(status) {
        setLoginStatus(status, this.id);
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
exports.Tracker = Tracker;
