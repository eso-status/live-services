import { Support, Slug, Status, Zone } from '@eso-status/types';
/**
 * Class with methode for LiveServices element
 */
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
    static getSlug(rawSlug: string): Slug;
    /**
       * Methode used to get support of slug
       *
       * @public
       * @static
       *
       * @param slug Slug Slug
       * @return Support Support of slug
       */
    static getSupport(slug: Slug): Support;
    /**
       * Methode used to get zone of slug
       *
       * @public
       * @static
       *
       * @param slug Slug Slug
       * @return Zone Zone of slug
       */
    static getZone(slug: Slug): Zone;
    /**
       * Methode used to get status of raw status
       *
       * @public
       * @static
       *
       * @param rawStatus string Raw status
       * @return Status Status of raw data
       */
    static getStatus(rawStatus: string): Status;
}
