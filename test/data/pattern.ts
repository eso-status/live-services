import { EsoStatusRawData } from '../../src/interface/esoStatusRawData.interface';
import { PatternItem } from '../interface/patternItem.interface';

const PcEuUp: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: '"The Elder Scrolls Online (EU)":"UP"',
  slug: 'server_pc_eu',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
  rawSlug: 'The Elder Scrolls Online (EU)',
  rawStatus: 'UP',
};
const PcEuDown: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: '"The Elder Scrolls Online (EU)":"DOWN"',
  slug: 'server_pc_eu',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'down',
  rawSlug: 'The Elder Scrolls Online (EU)',
  rawStatus: 'DOWN',
};

const PcNaUp: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: '"The Elder Scrolls Online (NA)":"UP"',
  slug: 'server_pc_na',
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
  rawSlug: 'The Elder Scrolls Online (NA)',
  rawStatus: 'UP',
};
const PcNaDown: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: '"The Elder Scrolls Online (NA)":"DOWN"',
  slug: 'server_pc_na',
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'down',
  rawSlug: 'The Elder Scrolls Online (NA)',
  rawStatus: 'DOWN',
};

const PsEuUp: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: '"The Elder Scrolls Online (PS4 - EU)":"UP"',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'up',
  rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
  rawStatus: 'UP',
};
const PsEuDown: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: '"The Elder Scrolls Online (PS4 - EU)":"DOWN"',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'down',
  rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
  rawStatus: 'DOWN',
};

const PsNaUp: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: '"The Elder Scrolls Online (PS4 - US)":"UP"',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'up',
  rawSlug: 'The Elder Scrolls Online (PS4 - US)',
  rawStatus: 'UP',
};
const PsNaDown: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: '"The Elder Scrolls Online (PS4 - US)":"DOWN"',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'down',
  rawSlug: 'The Elder Scrolls Online (PS4 - US)',
  rawStatus: 'DOWN',
};

const PcPtsUp: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: '"The Elder Scrolls Online (PTS)":"UP"',
  slug: 'server_pc_pts',
  type: 'server',
  support: 'pc',
  zone: 'pts',
  status: 'up',
  rawSlug: 'The Elder Scrolls Online (PTS)',
  rawStatus: 'UP',
};
const PcPtsDown: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: '"The Elder Scrolls Online (PTS)":"DOWN"',
  slug: 'server_pc_pts',
  type: 'server',
  support: 'pc',
  zone: 'pts',
  status: 'down',
  rawSlug: 'The Elder Scrolls Online (PTS)',
  rawStatus: 'DOWN',
};

const XboxEuUp: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: '"The Elder Scrolls Online (XBox - EU)":"UP"',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'up',
  rawSlug: 'The Elder Scrolls Online (XBox - EU)',
  rawStatus: 'UP',
};
const XboxEuDown: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: '"The Elder Scrolls Online (XBox - EU)":"DOWN"',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'down',
  rawSlug: 'The Elder Scrolls Online (XBox - EU)',
  rawStatus: 'DOWN',
};

const XboxNaUp: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: '"The Elder Scrolls Online (XBox - US)":"UP"',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'up',
  rawSlug: 'The Elder Scrolls Online (XBox - US)',
  rawStatus: 'UP',
};
const XboxNaDown: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: '"The Elder Scrolls Online (XBox - US)":"DOWN"',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'down',
  rawSlug: 'The Elder Scrolls Online (XBox - US)',
  rawStatus: 'DOWN',
};

const pattern: PatternItem[] = [
  {
    file: 'EverythingUp.html',
    expected: [PcEuUp, PcNaUp, PsEuUp, PsNaUp, PcPtsUp, XboxEuUp, XboxNaUp],
  },
  {
    file: 'PcEuNaDown.html',
    expected: [PcEuDown, PcNaDown, PsEuUp, PsNaUp, PcPtsUp, XboxEuUp, XboxNaUp],
  },
  {
    file: 'PcNaDown.html',
    expected: [PcEuUp, PcNaDown, PsEuUp, PsNaUp, PcPtsUp, XboxEuUp, XboxNaUp],
  },
  {
    file: 'PsXboxDown.html',
    expected: [
      PcEuUp,
      PcNaUp,
      PsEuDown,
      PsNaDown,
      PcPtsUp,
      XboxEuDown,
      XboxNaDown,
    ],
  },
  {
    file: 'PcPtsDown.html',
    expected: [PcEuUp, PcNaUp, PsEuUp, PsNaUp, PcPtsDown, XboxEuUp, XboxNaUp],
  },
];

export default pattern;
