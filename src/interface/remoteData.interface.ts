import { RawStatus } from '../type/rawStatus.type';
import { RemoteResultMessage } from '../type/remoteResultMessage.type';
import { RemoteResultCode } from '../type/remoteResultCode.type';

export interface RemoteData {
  zos_platform_response: {
    response: {
      'The Elder Scrolls Online (EU)': RawStatus;
      'The Elder Scrolls Online (NA)': RawStatus;
      'The Elder Scrolls Online (PS4 - EU)': RawStatus;
      'The Elder Scrolls Online (PS4 - US)': RawStatus;
      'The Elder Scrolls Online (PTS)': RawStatus;
      'The Elder Scrolls Online (XBox - EU)': RawStatus;
      'The Elder Scrolls Online (XBox - US)': RawStatus;
    };
    result_code: RemoteResultCode;
    result_message: RemoteResultMessage;
  };
}
