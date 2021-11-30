import {
  Support,
  Slug,
  Status,
  Zone,
} from '@eso-status/types';
import LiveServicesElement from '../src/classes/LiveServicesElement';
import { liveServicesPattern, statusPattern } from './pattern';

liveServicesPattern.forEach((pattern: {raw: [string, string], result: {rawSlug: string, rawStatus: string, slug: Slug, support: Support, zone: Zone, status: Status}}): void => {
  test(`getSlug(${pattern.result.rawSlug})`, (): void => {
    expect(LiveServicesElement.getSlug(pattern.result.rawSlug)).toEqual(pattern.result.slug);
  });
  test(`getSupport(${pattern.result.slug})`, (): void => {
    expect(LiveServicesElement.getSupport(pattern.result.slug)).toEqual(pattern.result.support);
  });
  test(`getZone(${pattern.result.slug})`, (): void => {
    expect(LiveServicesElement.getZone(pattern.result.slug)).toEqual(pattern.result.zone);
  });
});

statusPattern.forEach((pattern: {rawStatus: string, result: Status}): void => {
  test(`getStatus(${pattern.rawStatus})`, (): void => {
    expect(LiveServicesElement.getStatus(pattern.rawStatus)).toEqual(pattern.result);
  });
});
