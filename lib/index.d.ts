import { RawEsoStatus } from '@eso-status/types';
/**
 * Class of Live Services
 */
export declare class LiveServices {
    /**
       * Methode used to get Live Services data
       *
       * @public
       * @static
       *
       * @return Promise<RawEsoStatus[]> Live Services elements
       */
    static getData(): Promise<RawEsoStatus[]>;
}
