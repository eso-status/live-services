import * as fs from 'node:fs';
import axios from 'axios';
import { RemoteData } from '../src/interface/remoteData.interface';
import LiveServices from '../src';
import pattern from './data/pattern';
import { PatternItem } from './interface/patternItem.interface';

describe('LiveServices (e2e)', (): void => {
  it.each(pattern)(
    'should pattern works with ($file)',
    async (patternData: PatternItem): Promise<void> => {
      jest
        .spyOn(axios, 'get')
        .mockImplementation(
          async (): Promise<{ status: number; data: RemoteData }> => {
            const data: string = await fs.promises.readFile(
              `${__dirname}/data/${patternData.file}`,
              'utf8',
            );
            return Promise.resolve({
              status: 200,
              data: <RemoteData>JSON.parse(data),
            });
          },
        );

      expect(await LiveServices.getData()).toStrictEqual(patternData.expected);
    },
  );

  it('should return empty array when api return error or nothing', async (): Promise<void> => {
    jest
      .spyOn(axios, 'get')
      .mockImplementation(
        async (): Promise<{ status: number; data: RemoteData }> => {
          return Promise.resolve({
            status: 500,
            data: null,
          });
        },
      );

    expect(await LiveServices.getData()).toEqual([]);
  });
});
