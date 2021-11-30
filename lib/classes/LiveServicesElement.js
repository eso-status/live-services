"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class with methode for LiveServices element
 */
var LiveServicesElement = /** @class */ (function () {
    function LiveServicesElement() {
    }
    /**
       * Methode used to get slug of raw slug
       *
       * @public
       * @static
       *
       * @param rawSlug string Raw slug
       * @return Slug Slug
       */
    LiveServicesElement.getSlug = function (rawSlug) {
        switch (rawSlug) {
            case 'The Elder Scrolls Online (NA)':
                return 'server_pc_na';
            case 'The Elder Scrolls Online (EU)':
                return 'server_pc_eu';
            case 'The Elder Scrolls Online (XBox - US)':
                return 'server_xbox_na';
            case 'The Elder Scrolls Online (XBox - EU)':
                return 'server_xbox_eu';
            case 'The Elder Scrolls Online (PS4 - US)':
                return 'server_ps_na';
            case 'The Elder Scrolls Online (PS4 - EU)':
                return 'server_ps_eu';
            case 'The Elder Scrolls Online (PTS)':
                return 'server_pc_pts';
            default:
                return 'undefined';
        }
    };
    /**
       * Methode used to get support of slug
       *
       * @public
       * @static
       *
       * @param slug Slug Slug
       * @return Support Support of slug
       */
    LiveServicesElement.getSupport = function (slug) {
        return slug.split('_')[1];
    };
    /**
       * Methode used to get zone of slug
       *
       * @public
       * @static
       *
       * @param slug Slug Slug
       * @return Zone Zone of slug
       */
    LiveServicesElement.getZone = function (slug) {
        return slug.split('_')[2];
    };
    /**
       * Methode used to get status of raw status
       *
       * @public
       * @static
       *
       * @param rawStatus string Raw status
       * @return Status Status of raw data
       */
    LiveServicesElement.getStatus = function (rawStatus) {
        switch (rawStatus) {
            case 'UP':
                return 'up';
            case 'DOWN':
                return 'down';
            default:
                return 'undefined';
        }
    };
    return LiveServicesElement;
}());
exports.default = LiveServicesElement;
