import { Support, Zone } from '@eso-status/types';
import { RemoteRawSlug } from '../type/remoteRawSlug.type';

export interface RawAssociation {
  raw: RemoteRawSlug;
  support: Support;
  zone: Zone;
}
