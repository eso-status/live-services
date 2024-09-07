import axios, { AxiosResponse } from 'axios';
import { LiveServicesURL } from './const';

/**
 * Class for retrieving information from announcements
 */
export default class Connector {
  /**
   * Method for retrieving remote content via a URL
   * @private
   */
  public static async getRemoteContent(): Promise<string> {
    const response: AxiosResponse<string> =
      await axios.get<string>(LiveServicesURL);

    return response?.status === 200 && !!response?.data
      ? JSON.stringify(response?.data)
      : '';
  }
}
