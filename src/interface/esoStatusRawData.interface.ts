import { ServerTypeType, Slug, Status, Support, Zone } from '@eso-status/types';
import { RemoteRawStatus } from '../type/remoteRawStatus.type';
import { RemoteRawSlug } from '../type/remoteRawSlug.type';
import { RemoteRaw } from '../type/remoteRaw.type';
import { SourceUrl } from '../type/sourceUrl.type';

/**
 * Raw data of an ESO server/service status
 */
export interface EsoStatusRawData {
  /**
   * URL of the data source
   */
  source: SourceUrl;
  /**
   * Raw data used to identify the server/service and its status
   */
  raw: RemoteRaw;
  /**
   * Status of the server/service
   */
  status: Status;
  /**
   * Raw data used to identify the status
   */
  rawStatus?: RemoteRawStatus;
  /**
   * Slug of the server/service
   */
  slug: Slug;
  /**
   * Raw data used to identify the slug
   */
  rawSlug: RemoteRawSlug;
  /**
   * Type of the server/service
   */
  type: ServerTypeType;
  /**
   * Support of the server/service
   */
  support: Support;
  /**
   * Zone of the server/service
   */
  zone: Zone;
}
