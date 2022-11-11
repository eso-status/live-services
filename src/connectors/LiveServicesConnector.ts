import { AxiosResponse } from 'axios';
import { RawEsoStatus } from '@eso-status/types';
import LiveServicesElement from '../classes/LiveServicesElement';

const axios = require('axios');

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
  public static url = 'https://live-services.elderscrollsonline.com/status/realms';

  /**
   * Methode used to get raw content of the remote website
   *
   * @public
   * @static
   *
   * @return Promise<string> Raw content of the remote website
   */
  public static async getRemoteContent(): Promise<string> {
    // @ts-ignore
    const response: AxiosResponse<string> = await axios.get<string>(LiveServicesConnector.url);

    if (response?.status !== 200) {
      throw new Error(`Bad response ${response?.status} (${response?.data})`);
    } else if (!response?.data) {
      throw new Error(`Empty response ${response?.status} (${response?.data})`);
    } else {
      return JSON.stringify(response?.data);
    }
  }

  /**
   * Methode used to select raw content containing eso servers status information
   *
   * @public
   * @static
   *
   * @param remoteContent Raw content of the remote website
   * @return string Raw content containing eso servers status information
   */
  public static getFilterContent(remoteContent: string): string {
    return JSON.stringify(JSON.parse(remoteContent)?.zos_platform_response?.response);
  }

  /**
   * Methode used to get list of each raw information
   *
   * @public
   * @static
   *
   * @param filteredContent string Raw content containing eso servers status information
   * @return RawEsoStatus[] List of each information
   */
  public static changeFilterContentForList(filteredContent: string): RawEsoStatus[] {
    return Object.entries(JSON.parse(filteredContent)).map((item: [string, unknown]): RawEsoStatus => ({
      sources: [LiveServicesConnector.url],
      raw: [item[0], String(item[1])],
      rawSlug: item[0],
      rawStatus: String(item[1]),
    }));
  }

  /**
   * Methode used to get last eso status server with data
   *
   * @public
   * @static
   *
   * @param lastRawData ServiceAlertsInterface[] Raw eso server status list sorted by date
   * @return RawEsoStatus[] Last eso status server with data
   */
  public static getData(lastRawData: RawEsoStatus[]): RawEsoStatus[] {
    return lastRawData.map((item: RawEsoStatus): RawEsoStatus => {
      const newItem: RawEsoStatus = item;
      newItem.slugs = [LiveServicesElement.getSlug(newItem.rawSlug ?? '')];
      newItem.support = LiveServicesElement.getSupport(newItem.slugs[0]);
      newItem.zone = LiveServicesElement.getZone(newItem.slugs[0]);
      newItem.status = LiveServicesElement.getStatus(newItem.rawStatus ?? '');

      return newItem;
    });
  }
}
