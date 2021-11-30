"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var LiveServicesElement_1 = require("../classes/LiveServicesElement");
/**
 * Connector used to get data from https://live-services.elderscrollsonline.com/status/realms
 */
var LiveServicesConnector = /** @class */ (function () {
    function LiveServicesConnector() {
    }
    /**
     * Methode used to get raw content of the remote website
     *
     * @public
     * @static
     *
     * @return Promise<string> Raw content of the remote website
     */
    LiveServicesConnector.getRemoteContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.get(LiveServicesConnector.url)];
                    case 1:
                        response = _a.sent();
                        if ((response === null || response === void 0 ? void 0 : response.status) !== 200) {
                            throw new Error("Bad response ".concat(response === null || response === void 0 ? void 0 : response.status, " (").concat(response === null || response === void 0 ? void 0 : response.data, ")"));
                        }
                        else if (!(response === null || response === void 0 ? void 0 : response.data)) {
                            throw new Error("Empty response ".concat(response === null || response === void 0 ? void 0 : response.status, " (").concat(response === null || response === void 0 ? void 0 : response.data, ")"));
                        }
                        else {
                            return [2 /*return*/, JSON.stringify(response === null || response === void 0 ? void 0 : response.data)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Methode used to select raw content containing eso servers status information
     *
     * @public
     * @static
     *
     * @param remoteContent Raw content of the remote website
     * @return string Raw content containing eso servers status information
     */
    LiveServicesConnector.getFilterContent = function (remoteContent) {
        var _a, _b;
        return JSON.stringify((_b = (_a = JSON.parse(remoteContent)) === null || _a === void 0 ? void 0 : _a.zos_platform_response) === null || _b === void 0 ? void 0 : _b.response);
    };
    /**
     * Methode used to get list of each raw information
     *
     * @public
     * @static
     *
     * @param filteredContent string Raw content containing eso servers status information
     * @return RawEsoStatus[] List of each information
     */
    LiveServicesConnector.changeFilterContentForList = function (filteredContent) {
        return Object.entries(JSON.parse(filteredContent)).map(function (item) { return ({
            sources: [LiveServicesConnector.url],
            raw: [item[0], String(item[1])],
            rawSlug: item[0],
            rawStatus: String(item[1]),
        }); });
    };
    /**
     * Methode used to get last eso status server with data
     *
     * @public
     * @static
     *
     * @param lastRawData ServiceAlertsInterface[] Raw eso server status list sorted by date
     * @return RawEsoStatus[] Last eso status server with data
     */
    LiveServicesConnector.getData = function (lastRawData) {
        return lastRawData.map(function (item) {
            var _a, _b;
            var newItem = item;
            newItem.slugs = [LiveServicesElement_1.default.getSlug((_a = newItem.rawSlug) !== null && _a !== void 0 ? _a : '')];
            newItem.support = LiveServicesElement_1.default.getSupport(newItem.slugs[0]);
            newItem.zone = LiveServicesElement_1.default.getZone(newItem.slugs[0]);
            newItem.status = LiveServicesElement_1.default.getStatus((_b = newItem.rawStatus) !== null && _b !== void 0 ? _b : '');
            return newItem;
        });
    };
    /**
     * URL to get remote content
     *
     * @public
     * @static
     *
     * @return string URL to get remote content
     */
    LiveServicesConnector.url = 'https://live-services.elderscrollsonline.com/status/realms';
    return LiveServicesConnector;
}());
exports.default = LiveServicesConnector;
