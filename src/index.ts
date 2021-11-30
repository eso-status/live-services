import { RawEsoStatus } from '@eso-status/types';
import LiveServicesConnector from './connectors/LiveServicesConnector';

/**
 * Class of Live Services
 */
export class LiveServices {
  /**
     * Methode used to get Live Services data
     *
     * @public
     * @static
     *
     * @return Promise<RawEsoStatus[]> Live Services elements
     */
  public static async getData(): Promise<RawEsoStatus[]> {
    const remoteContent: string = await LiveServicesConnector.getRemoteContent();
    const filteredContent: string = LiveServicesConnector.getFilterContent(remoteContent);
    const lastRawData: RawEsoStatus[] = LiveServicesConnector.changeFilterContentForList(filteredContent);
    return LiveServicesConnector.getData(lastRawData);
  }
}
