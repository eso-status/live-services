import { Support, Slug, Status, Zone } from '@eso-status/types';

/**
 * Class with methode for LiveServices element
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class -- the published 1.x API exposes static methods, called as is by @eso-status/api 1.x
export default class LiveServicesElement {
  /**
   * Methode used to get slug of raw slug
   *
   * @public
   * @static
   *
   * @param rawSlug string Raw slug
   * @return Slug Slug
   */
  public static getSlug(rawSlug: string): Slug {
    switch (rawSlug) {
      case 'The Elder Scrolls Online (NA)':
        return 'server_pc_na';
      case 'The Elder Scrolls Online (EU)':
        return 'server_pc_eu';
      case 'The Elder Scrolls Online (XBox - US)':
        return 'server_xbox_na';
      case 'The Elder Scrolls Online (XBox - EU)':
        return 'server_xbox_eu';
      case 'The Elder Scrolls Online (PS4 - US)':
        return 'server_ps_na';
      case 'The Elder Scrolls Online (PS4 - EU)':
        return 'server_ps_eu';
      case 'The Elder Scrolls Online (PTS)':
        return 'server_pc_pts';
      default:
        return 'undefined';
    }
  }

  /**
   * Methode used to get support of slug
   *
   * @public
   * @static
   *
   * @param slug Slug Slug
   * @return Support Support of slug
   */
  public static getSupport(slug: Slug): Support {
    return slug.split('_')[1] as Support;
  }

  /**
   * Methode used to get zone of slug
   *
   * @public
   * @static
   *
   * @param slug Slug Slug
   * @return Zone Zone of slug
   */
  public static getZone(slug: Slug): Zone {
    return slug.split('_')[2] as Zone;
  }

  /**
   * Methode used to get status of raw status
   *
   * @public
   * @static
   *
   * @param rawStatus string Raw status
   * @return Status Status of raw data
   */
  public static getStatus(rawStatus: string): Status {
    switch (rawStatus) {
      case 'UP':
        return 'up';
      case 'DOWN':
        return 'down';
      default:
        return 'undefined';
    }
  }
}
