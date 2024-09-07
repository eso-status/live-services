import { EsoStatusRawData } from '../../src/interface/esoStatusRawData.interface';

export interface PatternItem {
  file: string;
  expected: EsoStatusRawData[];
}
