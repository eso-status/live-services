import { RawEsoStatus } from '@eso-status/types';

const PcEuUp: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (EU)'],
  slugs: ['server_pc_eu'],
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
  rawSlug: 'The Elder Scrolls Online (EU)',
  rawStatus: 'UP',
};
const PcEuDown: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (EU)'],
  slugs: ['server_pc_eu'],
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'down',
  rawSlug: 'The Elder Scrolls Online (EU)',
  rawStatus: 'DOWN',
};

const PcNaUp: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (NA)'],
  slugs: ['server_pc_na'],
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
  rawSlug: 'The Elder Scrolls Online (NA)',
  rawStatus: 'UP',
};
const PcNaDown: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (NA)'],
  slugs: ['server_pc_na'],
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'down',
  rawSlug: 'The Elder Scrolls Online (NA)',
  rawStatus: 'DOWN',
};

const PsEuUp: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PS4 - EU)'],
  slugs: ['server_ps_eu'],
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'up',
  rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
  rawStatus: 'UP',
};
const PsEuDown: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PS4 - EU)'],
  slugs: ['server_ps_eu'],
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'down',
  rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
  rawStatus: 'DOWN',
};

const PsNaUp: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PS4 - US)'],
  slugs: ['server_ps_na'],
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'up',
  rawSlug: 'The Elder Scrolls Online (PS4 - US)',
  rawStatus: 'UP',
};
const PsNaDown: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PS4 - US)'],
  slugs: ['server_ps_na'],
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'down',
  rawSlug: 'The Elder Scrolls Online (PS4 - US)',
  rawStatus: 'DOWN',
};

const PcPtsUp: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PTS)'],
  slugs: ['server_pc_pts'],
  type: 'server',
  support: 'pc',
  zone: 'pts',
  status: 'up',
  rawSlug: 'The Elder Scrolls Online (PTS)',
  rawStatus: 'UP',
};
const PcPtsDown: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PTS)'],
  slugs: ['server_pc_pts'],
  type: 'server',
  support: 'pc',
  zone: 'pts',
  status: 'down',
  rawSlug: 'The Elder Scrolls Online (PTS)',
  rawStatus: 'DOWN',
};

const XboxEuUp: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (XBox - EU)'],
  slugs: ['server_xbox_eu'],
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'up',
  rawSlug: 'The Elder Scrolls Online (XBox - EU)',
  rawStatus: 'UP',
};
const XboxEuDown: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (XBox - EU)'],
  slugs: ['server_xbox_eu'],
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'down',
  rawSlug: 'The Elder Scrolls Online (XBox - EU)',
  rawStatus: 'DOWN',
};

const XboxNaUp: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (XBox - US)'],
  slugs: ['server_xbox_na'],
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'up',
  rawSlug: 'The Elder Scrolls Online (XBox - US)',
  rawStatus: 'UP',
};
const XboxNaDown: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (XBox - US)'],
  slugs: ['server_xbox_na'],
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'down',
  rawSlug: 'The Elder Scrolls Online (XBox - US)',
  rawStatus: 'DOWN',
};

const pattern: { file: string; expected: RawEsoStatus[] }[] = [
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
