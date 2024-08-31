import axios, { AxiosResponse } from 'axios';
import { LiveServicesURL } from './const';

export default class Connector {
  public static async getRemoteContent(): Promise<string> {
    const response: AxiosResponse<string> =
      await axios.get<string>(LiveServicesURL);

    return response?.status === 200 && !!response?.data
      ? JSON.stringify(response?.data)
      : '';
  }
}
