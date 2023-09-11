"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = exports.MediaType = exports.createHistory = exports.History = void 0;
var History;
(function (History) {
    let Status;
    (function (Status) {
        Status["COMPLETED"] = "COMPLETED";
        Status["IN_PROGRESS"] = "IN_PROGRESS";
        Status["PLANNED"] = "PLANNED";
        Status["DROPPED"] = "DROPPED";
        Status["PAUSED"] = "PAUSED";
        Status["UNKNOWN"] = "UNKNOWN";
    })(Status = History.Status || (History.Status = {}));
})(History || (exports.History = History = {}));
const createHistory = (history) => history;
exports.createHistory = createHistory;
var MediaType;
(function (MediaType) {
    MediaType["TEXT"] = "TEXT";
    MediaType["IMAGE"] = "IMAGE";
    MediaType["VIDEO"] = "VIDEO";
})(MediaType || (exports.MediaType = MediaType = {}));
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
    _getHistory(callback, error, mediaType, id) {
        this.getHistory(mediaType, id).then(callback).catch(error);
    }
    _setHistory(callback, error, mediaType, id, history) {
        this.setHistory(mediaType, id, history).then(callback).catch(error);
    }
    _deleteHistory(callback, error, mediaType, id) {
        this.deleteHistory(mediaType, id).then(callback).catch(error);
    }
    _getSearchResults(callback, error, previousInfo, mediaType, query) {
        this.getSearchResults(previousInfo, mediaType, query).then(callback).catch(error);
    }
}
exports.Tracker = Tracker;
