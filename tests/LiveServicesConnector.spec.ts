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
    filteredContentList =
      LiveServicesConnector.changeFilterContentForList(filteredContent);
    data = LiveServicesConnector.getData(filteredContentList);
  });

  it('getRemoteContent', (): void => {
    expect(remoteContent).toContain('{"zos_platform_response":{"response":{');
    expect(remoteContent).toContain(
      '},"result_code":2000,"result_message":"success"}}',
    );
  });

  it('getFilterContent', (): void => {
    expect(filteredContent).toContain('The Elder Scrolls Online (EU)');
    expect(filteredContent).toContain('The Elder Scrolls Online (NA)');
    expect(filteredContent).toContain('The Elder Scrolls Online (PS4 - EU)');
    expect(filteredContent).toContain('The Elder Scrolls Online (PS4 - US)');
    expect(filteredContent).toContain('The Elder Scrolls Online (PTS)');
    expect(filteredContent).toContain('The Elder Scrolls Online (XBox - EU)');
    expect(filteredContent).toContain('The Elder Scrolls Online (XBox - US)');
  });

  it('changeFilterContentForList', (): void => {
    filteredContentList.forEach((item: RawEsoStatus): void => {
      expect(item.rawSlug?.includes('The Elder Scrolls Online ')).toBe(true);
    });
  });

  it('getData', (): void => {
    data.forEach((item: RawEsoStatus): void => {
      expect(item.rawSlug?.includes('The Elder Scrolls Online ')).toBe(true);
      expect(item.slugs).not.toHaveLength(0);
      expect(item.slugs?.[0]).not.toBe('undefined');
      expect(item.status).not.toBe('undefined');
      expect(item.support).toBeDefined();
      expect(item.zone).toBeDefined();
    });
  });
});
