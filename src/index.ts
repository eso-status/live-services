import { RawEsoStatus, Slug, Status, Support, Zone } from '@eso-status/types';
import { LiveServicesURL, rawSupportZoneAssociations } from './const';
import { RemoteData } from './interface/remoteData.interface';
import { RawSlug } from './type/rawSlug.type';
import Connector from './connector';

export default class LiveServices {
  public static async getData(): Promise<RawEsoStatus[]> {
    const remoteContent: string = await Connector.getRemoteContent();

    const returnList: RawEsoStatus[] = [];

    if (!remoteContent) {
      return [];
    }

    const json: RemoteData = <RemoteData>JSON.parse(remoteContent);
    rawSupportZoneAssociations.forEach(
      (raw: { raw: RawSlug; support: Support; zone: Zone }): void => {
        returnList.push({
          sources: [LiveServicesURL],
          raw: [raw.raw],
          slugs: [<Slug>`server_${raw.support}_${raw.zone}`],
          type: 'server',
          support: raw.support,
          zone: raw.zone,
          status: <Status>(
            json.zos_platform_response.response[raw.raw]?.toLowerCase()
          ),
          rawSlug: raw.raw,
          rawStatus: json.zos_platform_response.response[raw.raw],
        });
      },
    );

    return returnList;
  }
}
