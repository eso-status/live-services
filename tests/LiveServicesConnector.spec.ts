import { RawEsoStatus } from '@eso-status/types';
import LiveServicesConnector from '../src/connectors/LiveServicesConnector';

describe('ServiceAlertConnector', (): void => {
  let remoteContent: string;
  let filteredContent: string;
  let filteredContentList: RawEsoStatus[];
  let data: RawEsoStatus[];

  beforeAll(async (): Promise<void> => {
    remoteContent = await LiveServicesConnector.getRemoteContent();
    filteredContent = LiveServicesConnector.getFilterContent(remoteContent);
    filteredContentList = LiveServicesConnector.changeFilterContentForList(filteredContent);
    data = LiveServicesConnector.getData(filteredContentList);
  });

  it('getRemoteContent', (): void => {
    expect(remoteContent.includes('{"zos_platform_response":{"response":{')).toEqual(true);
    expect(remoteContent.includes('},"result_code":2000,"result_message":"success"}}')).toEqual(true);
  });

  it('getFilterContent', (): void => {
    expect(filteredContent.includes('The Elder Scrolls Online (EU)')).toEqual(true);
    expect(filteredContent.includes('The Elder Scrolls Online (NA)')).toEqual(true);
    expect(filteredContent.includes('The Elder Scrolls Online (PS4 - EU)')).toEqual(true);
    expect(filteredContent.includes('The Elder Scrolls Online (PS4 - US)')).toEqual(true);
    expect(filteredContent.includes('The Elder Scrolls Online (PTS)')).toEqual(true);
    expect(filteredContent.includes('The Elder Scrolls Online (XBox - EU)')).toEqual(true);
    expect(filteredContent.includes('The Elder Scrolls Online (XBox - US)')).toEqual(true);
  });

  it('changeFilterContentForList', (): void => {
    filteredContentList.forEach((item: RawEsoStatus): void => {
      expect(item.rawSlug?.includes('The Elder Scrolls Online ')).toEqual(true);
    });
  });

  it('getData', (): void => {
    data.forEach((item: RawEsoStatus): void => {
      expect(item.rawSlug?.includes('The Elder Scrolls Online ')).toEqual(true);
      expect(item.slugs !== ['undefined']).toEqual(true);
      expect(item.status !== 'undefined').toEqual(true);
      expect(item.support !== undefined).toEqual(true);
      expect(item.zone !== undefined).toEqual(true);
    });
  });
});
