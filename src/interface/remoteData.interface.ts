import { RemoteResultMessage } from '../type/remoteResultMessage.type';
import { RemoteResultCode } from '../type/remoteResultCode.type';
import { RemoteRawStatus } from '../type/remoteRawStatus.type';

/**
 * Structure of the data returned by the API
 */
export interface RemoteData {
  zos_platform_response: {
    response: {
      'The Elder Scrolls Online (EU)': RemoteRawStatus;
      'The Elder Scrolls Online (NA)': RemoteRawStatus;
      'The Elder Scrolls Online (PS4 - EU)': RemoteRawStatus;
      'The Elder Scrolls Online (PS4 - US)': RemoteRawStatus;
      'The Elder Scrolls Online (PTS)': RemoteRawStatus;
      'The Elder Scrolls Online (XBox - EU)': RemoteRawStatus;
      'The Elder Scrolls Online (XBox - US)': RemoteRawStatus;
    };
    result_code: RemoteResultCode;
    result_message: RemoteResultMessage;
  };
}
