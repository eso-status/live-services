import { Support, Zone } from '@eso-status/types';
import { RawSlug } from '../type/rawSlug.type';

export interface RawAssociation {
  raw: RawSlug;
  support: Support;
  zone: Zone;
}
