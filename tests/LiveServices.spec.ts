import { RawEsoStatus } from '@eso-status/types';
import { LiveServices } from '../src';

test('getData()', async (): Promise<void> => {
  const data: RawEsoStatus[] = await LiveServices.getData();
  expect(data.length !== 0).toEqual(true);
});
