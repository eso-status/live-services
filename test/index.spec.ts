import { RawEsoStatus } from '@eso-status/types';
import * as fs from 'node:fs';
import LiveServices from 'index';
import axios from 'axios';
import pattern from './data/pattern';

describe('fake test', (): void => {
  it.each(pattern)(
    'should pattern works with ($file)',
    async (patternData: {
      file: string;
      expected: RawEsoStatus[];
    }): Promise<void> => {
      jest
        .spyOn(axios, 'get')
        .mockImplementation(
          async (): Promise<{ status: number; data: string }> => {
            const data: string = await fs.promises.readFile(
              `${__dirname}/data/${patternData.file}`,
              'utf8',
            );
            return Promise.resolve({
              status: 200,
              data,
            });
          },
        );

      expect(await LiveServices.getData()).toEqual(patternData.expected);
    },
  );

  it('should return nothing when url return nothing', async (): Promise<void> => {
    jest
      .spyOn(axios, 'get')
      .mockImplementation(
        async (): Promise<{ status: number; data: string }> => {
          return Promise.resolve({
            status: 500,
            data: '',
          });
        },
      );

    expect(await LiveServices.getData()).toEqual([]);
  });
});
