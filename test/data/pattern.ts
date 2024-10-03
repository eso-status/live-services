import {
  DownStatus,
  EuZone,
  NaZone,
  PcSupport,
  PsSupport,
  PtsZone,
  ServerPcEuSlug,
  ServerPcNaSlug,
  ServerPcPtsSlug,
  ServerPsEuSlug,
  ServerPsNaSlug,
  ServerType,
  ServerXboxEuSlug,
  ServerXboxNaSlug,
  UpStatus,
  XboxSupport,
} from '@eso-status/types';
import { EsoStatusRawData } from '../../src/interface/esoStatusRawData.interface';
import { PatternItem } from '../interface/patternItem.interface';

const PcEuUp: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (EU) : UP',
  slug: ServerPcEuSlug,
  type: ServerType,
  support: PcSupport,
  zone: EuZone,
  status: UpStatus,
  rawSlug: 'The Elder Scrolls Online (EU)',
  rawStatus: 'UP',
};
const PcEuDown: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (EU) : DOWN',
  slug: ServerPcEuSlug,
  type: ServerType,
  support: PcSupport,
  zone: EuZone,
  status: DownStatus,
  rawSlug: 'The Elder Scrolls Online (EU)',
  rawStatus: 'DOWN',
};

const PcNaUp: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (NA) : UP',
  slug: ServerPcNaSlug,
  type: ServerType,
  support: PcSupport,
  zone: NaZone,
  status: UpStatus,
  rawSlug: 'The Elder Scrolls Online (NA)',
  rawStatus: 'UP',
};
const PcNaDown: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (NA) : DOWN',
  slug: ServerPcNaSlug,
  type: ServerType,
  support: PcSupport,
  zone: NaZone,
  status: DownStatus,
  rawSlug: 'The Elder Scrolls Online (NA)',
  rawStatus: 'DOWN',
};

const PsEuUp: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (PS4 - EU) : UP',
  slug: ServerPsEuSlug,
  type: ServerType,
  support: PsSupport,
  zone: EuZone,
  status: UpStatus,
  rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
  rawStatus: 'UP',
};
const PsEuDown: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (PS4 - EU) : DOWN',
  slug: ServerPsEuSlug,
  type: ServerType,
  support: PsSupport,
  zone: EuZone,
  status: DownStatus,
  rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
  rawStatus: 'DOWN',
};

const PsNaUp: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (PS4 - US) : UP',
  slug: ServerPsNaSlug,
  type: ServerType,
  support: PsSupport,
  zone: NaZone,
  status: UpStatus,
  rawSlug: 'The Elder Scrolls Online (PS4 - US)',
  rawStatus: 'UP',
};
const PsNaDown: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (PS4 - US) : DOWN',
  slug: ServerPsNaSlug,
  type: ServerType,
  support: PsSupport,
  zone: NaZone,
  status: DownStatus,
  rawSlug: 'The Elder Scrolls Online (PS4 - US)',
  rawStatus: 'DOWN',
};

const PcPtsUp: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (PTS) : UP',
  slug: ServerPcPtsSlug,
  type: ServerType,
  support: PcSupport,
  zone: PtsZone,
  status: UpStatus,
  rawSlug: 'The Elder Scrolls Online (PTS)',
  rawStatus: 'UP',
};
const PcPtsDown: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (PTS) : DOWN',
  slug: ServerPcPtsSlug,
  type: ServerType,
  support: PcSupport,
  zone: PtsZone,
  status: DownStatus,
  rawSlug: 'The Elder Scrolls Online (PTS)',
  rawStatus: 'DOWN',
};

const XboxEuUp: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (XBox - EU) : UP',
  slug: ServerXboxEuSlug,
  type: ServerType,
  support: XboxSupport,
  zone: EuZone,
  status: UpStatus,
  rawSlug: 'The Elder Scrolls Online (XBox - EU)',
  rawStatus: 'UP',
};
const XboxEuDown: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (XBox - EU) : DOWN',
  slug: ServerXboxEuSlug,
  type: ServerType,
  support: XboxSupport,
  zone: EuZone,
  status: DownStatus,
  rawSlug: 'The Elder Scrolls Online (XBox - EU)',
  rawStatus: 'DOWN',
};

const XboxNaUp: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (XBox - US) : UP',
  slug: ServerXboxNaSlug,
  type: ServerType,
  support: XboxSupport,
  zone: NaZone,
  status: UpStatus,
  rawSlug: 'The Elder Scrolls Online (XBox - US)',
  rawStatus: 'UP',
};
const XboxNaDown: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (XBox - US) : DOWN',
  slug: ServerXboxNaSlug,
  type: ServerType,
  support: XboxSupport,
  zone: NaZone,
  status: DownStatus,
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
  {
    file: 'PCEuNaPtsDown.html',
    expected: [
      PcEuDown,
      PcNaDown,
      PsEuUp,
      PsNaUp,
      PcPtsDown,
      XboxEuUp,
      XboxNaUp,
    ],
  },
];

export default pattern;
