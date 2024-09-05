import { RawAssociation } from './interface/rawAssociation.interface';
import { SourceUrl } from './type/sourceUrl.type';

export const LiveServicesURL: SourceUrl =
  'https://live-services.elderscrollsonline.com/status/realms';

export const rawSupportZoneAssociations: RawAssociation[] = [
  {
    raw: 'The Elder Scrolls Online (EU)',
    support: 'pc',
    zone: 'eu',
  },
  {
    raw: 'The Elder Scrolls Online (NA)',
    support: 'pc',
    zone: 'na',
  },
  {
    raw: 'The Elder Scrolls Online (PS4 - EU)',
    support: 'ps',
    zone: 'eu',
  },
  {
    raw: 'The Elder Scrolls Online (PS4 - US)',
    support: 'ps',
    zone: 'na',
  },
  {
    raw: 'The Elder Scrolls Online (PTS)',
    support: 'pc',
    zone: 'pts',
  },
  {
    raw: 'The Elder Scrolls Online (XBox - EU)',
    support: 'xbox',
    zone: 'eu',
  },
  {
    raw: 'The Elder Scrolls Online (XBox - US)',
    support: 'xbox',
    zone: 'na',
  },
];
