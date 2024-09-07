import { Support, Zone } from '@eso-status/types';
import { RemoteRawSlug } from '../type/remoteRawSlug.type';

/**
 * Structure of an association between a server, its support, and its zone
 */
export interface RawAssociation {
  raw: RemoteRawSlug;
  support: Support;
  zone: Zone;
}
