import {
  EsoStatusRawData,
  ServerType,
  Slug,
  Status,
  Support,
  Zone,
} from '@eso-status/types';
import { LiveServicesURL, rawSupportZoneAssociations } from './const';
import { RemoteData } from './interface/remoteData.interface';
import Connector from './connector';
import { RemoteRawSlug } from './type/remoteRawSlug.type';

/**
 * Class for retrieving announcement information
 */
/* eslint-disable @typescript-eslint/no-extraneous-class */
export default class LiveServices {
  /**
   * Method for retrieving announcement information
   */
  public static async getData(): Promise<EsoStatusRawData[]> {
    const remoteContent: string = await Connector.getRemoteContent();

    const returnList: EsoStatusRawData[] = [];

    if (!remoteContent) {
      return [];
    }

    const json: RemoteData = JSON.parse(remoteContent) as RemoteData;
    rawSupportZoneAssociations.forEach(
      (raw: { raw: RemoteRawSlug; support: Support; zone: Zone }): void => {
        returnList.push({
          source: LiveServicesURL,
          raw: `${raw.raw} : ${json.zos_platform_response.response[raw.raw]}`,
          slug: `${ServerType}_${raw.support}_${raw.zone}` as Slug,
          type: ServerType,
          support: raw.support,
          zone: raw.zone,
          status: json.zos_platform_response.response[
            raw.raw
          ].toLowerCase() as Status,
          rawSlug: raw.raw,
          rawStatus: json.zos_platform_response.response[raw.raw],
        });
      },
    );

    return returnList;
  }
}
/* eslint-enable @typescript-eslint/no-extraneous-class */
