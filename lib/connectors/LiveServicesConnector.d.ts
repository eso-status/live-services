import { RawEsoStatus } from '@eso-status/types';
/**
 * Connector used to get data from https://live-services.elderscrollsonline.com/status/realms
 */
export default class LiveServicesConnector {
    /**
     * URL to get remote content
     *
     * @public
     * @static
     *
     * @return string URL to get remote content
     */
    static url: string;
    /**
     * Methode used to get raw content of the remote website
     *
     * @public
     * @static
     *
     * @return Promise<string> Raw content of the remote website
     */
    static getRemoteContent(): Promise<string>;
    /**
     * Methode used to select raw content containing eso servers status information
     *
     * @public
     * @static
     *
     * @param remoteContent Raw content of the remote website
     * @return string Raw content containing eso servers status information
     */
    static getFilterContent(remoteContent: string): string;
    /**
     * Methode used to get list of each raw information
     *
     * @public
     * @static
     *
     * @param filteredContent string Raw content containing eso servers status information
     * @return RawEsoStatus[] List of each information
     */
    static changeFilterContentForList(filteredContent: string): RawEsoStatus[];
    /**
     * Methode used to get last eso status server with data
     *
     * @public
     * @static
     *
     * @param lastRawData ServiceAlertsInterface[] Raw eso server status list sorted by date
     * @return RawEsoStatus[] Last eso status server with data
     */
    static getData(lastRawData: RawEsoStatus[]): RawEsoStatus[];
}
