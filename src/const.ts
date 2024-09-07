import {
  EuZone,
  NaZone,
  PcSupport,
  PsSupport,
  PtsZone,
  XboxSupport,
} from '@eso-status/types';
import { RawAssociation } from './interface/rawAssociation.interface';
import { SourceUrl } from './type/sourceUrl.type';

/**
 * URL serving as source for retrieving maintenance announcements
 */
export const LiveServicesURL: SourceUrl =
  'https://live-services.elderscrollsonline.com/status/realms';

/**
 * Association between raw data and its support and zone
 */
export const rawSupportZoneAssociations: RawAssociation[] = [
  {
    raw: 'The Elder Scrolls Online (EU)',
    support: PcSupport,
    zone: EuZone,
  },
  {
    raw: 'The Elder Scrolls Online (NA)',
    support: PcSupport,
    zone: NaZone,
  },
  {
    raw: 'The Elder Scrolls Online (PS4 - EU)',
    support: PsSupport,
    zone: EuZone,
  },
  {
    raw: 'The Elder Scrolls Online (PS4 - US)',
    support: PsSupport,
    zone: NaZone,
  },
  {
    raw: 'The Elder Scrolls Online (PTS)',
    support: PcSupport,
    zone: PtsZone,
  },
  {
    raw: 'The Elder Scrolls Online (XBox - EU)',
    support: XboxSupport,
    zone: EuZone,
  },
  {
    raw: 'The Elder Scrolls Online (XBox - US)',
    support: XboxSupport,
    zone: NaZone,
  },
];
