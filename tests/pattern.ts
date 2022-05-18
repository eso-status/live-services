import {
  Support,
  Slug,
  Status,
  Zone,
} from '@eso-status/types';

/**
 * Pattern of Live Services data
 *
 * @type {raw: [string, string], result: {rawSlug: string, rawStatus: string, slug: Slug, support: Support, zone: Zone, status: Status}}[]
 */
export const liveServicesPattern: {raw: [string, string], result: {rawSlug: string, rawStatus: string, slug: Slug, support: Support, zone: Zone, status: Status}}[] = [
  {
    raw: ['The Elder Scrolls Online (EU)', 'UP'],
    result: {
      rawSlug: 'The Elder Scrolls Online (EU)',
      rawStatus: 'UP',
      slug: 'server_pc_eu',
      support: 'pc',
      zone: 'eu',
      status: 'up',
    },
  },
  {
    raw: ['The Elder Scrolls Online (EU)', 'DOWN'],
    result: {
      rawSlug: 'The Elder Scrolls Online (EU)',
      rawStatus: 'DOWN',
      slug: 'server_pc_eu',
      support: 'pc',
      zone: 'eu',
      status: 'down',
    },
  },
  {
    raw: ['The Elder Scrolls Online (NA)', 'UP'],
    result: {
      rawSlug: 'The Elder Scrolls Online (NA)',
      rawStatus: 'UP',
      slug: 'server_pc_na',
      support: 'pc',
      zone: 'na',
      status: 'up',
    },
  },
  {
    raw: ['The Elder Scrolls Online (NA)', 'DOWN'],
    result: {
      rawSlug: 'The Elder Scrolls Online (NA)',
      rawStatus: 'DOWN',
      slug: 'server_pc_na',
      support: 'pc',
      zone: 'na',
      status: 'down',
    },
  },
  {
    raw: ['The Elder Scrolls Online (PS4 - EU)', 'UP'],
    result: {
      rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
      rawStatus: 'UP',
      slug: 'server_ps_eu',
      support: 'ps',
      zone: 'eu',
      status: 'up',
    },
  },
  {
    raw: ['The Elder Scrolls Online (PS4 - EU)', 'DOWN'],
    result: {
      rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
      rawStatus: 'DOWN',
      slug: 'server_ps_eu',
      support: 'ps',
      zone: 'eu',
      status: 'down',
    },
  },
  {
    raw: ['The Elder Scrolls Online (PS4 - US)', 'UP'],
    result: {
      rawSlug: 'The Elder Scrolls Online (PS4 - US)',
      rawStatus: 'UP',
      slug: 'server_ps_na',
      support: 'ps',
      zone: 'na',
      status: 'up',
    },
  },
  {
    raw: ['The Elder Scrolls Online (PS4 - US)', 'DOWN'],
    result: {
      rawSlug: 'The Elder Scrolls Online (PS4 - US)',
      rawStatus: 'DOWN',
      slug: 'server_ps_na',
      support: 'ps',
      zone: 'na',
      status: 'down',
    },
  },
  {
    raw: ['The Elder Scrolls Online (PTS)', 'UP'],
    result: {
      rawSlug: 'The Elder Scrolls Online (PTS)',
      rawStatus: 'UP',
      slug: 'server_pc_pts',
      support: 'pc',
      zone: 'pts',
      status: 'up',
    },
  },
  {
    raw: ['The Elder Scrolls Online (PTS)', 'DOWN'],
    result: {
      rawSlug: 'The Elder Scrolls Online (PTS)',
      rawStatus: 'DOWN',
      slug: 'server_pc_pts',
      support: 'pc',
      zone: 'pts',
      status: 'down',
    },
  },
  {
    raw: ['The Elder Scrolls Online (XBox - EU)', 'UP'],
    result: {
      rawSlug: 'The Elder Scrolls Online (XBox - EU)',
      rawStatus: 'UP',
      slug: 'server_xbox_eu',
      support: 'xbox',
      zone: 'eu',
      status: 'up',
    },
  },
  {
    raw: ['The Elder Scrolls Online (XBox - EU)', 'DOWN'],
    result: {
      rawSlug: 'The Elder Scrolls Online (XBox - EU)',
      rawStatus: 'DOWN',
      slug: 'server_xbox_eu',
      support: 'xbox',
      zone: 'eu',
      status: 'down',
    },
  },
  {
    raw: ['The Elder Scrolls Online (XBox - US)', 'UP'],
    result: {
      rawSlug: 'The Elder Scrolls Online (XBox - US)',
      rawStatus: 'UP',
      slug: 'server_xbox_na',
      support: 'xbox',
      zone: 'na',
      status: 'up',
    },
  },
  {
    raw: ['The Elder Scrolls Online (XBox - US)', 'DOWN'],
    result: {
      rawSlug: 'The Elder Scrolls Online (XBox - US)',
      rawStatus: 'DOWN',
      slug: 'server_xbox_na',
      support: 'xbox',
      zone: 'na',
      status: 'down',
    },
  },
];

export const statusPattern: {rawStatus: string, result: Status}[] = [
  {
    rawStatus: 'UP',
    result: 'up',
  },
  {
    rawStatus: 'DOWN',
    result: 'down',
  },
];

// {"The Elder Scrolls Online (EU)":"UP","The Elder Scrolls Online (NA)":"UP","The Elder Scrolls Online (PS4 - EU)":"UP","The Elder Scrolls Online (PS4 - US)":"UP","The Elder Scrolls Online (PTS)":"DOWN","The Elder Scrolls Online (XBox - EU)":"UP","The Elder Scrolls Online (XBox - US)":"UP"}
// {"The Elder Scrolls Online (EU)":"UP","The Elder Scrolls Online (NA)":"UP","The Elder Scrolls Online (PS4 - EU)":"UP","The Elder Scrolls Online (PS4 - US)":"UP","The Elder Scrolls Online (PTS)":"UP","The Elder Scrolls Online (XBox - EU)":"UP","The Elder Scrolls Online (XBox - US)":"UP"}
// {"The Elder Scrolls Online (EU)":"DOWN","The Elder Scrolls Online (NA)":"DOWN","The Elder Scrolls Online (PS4 - EU)":"DOWN","The Elder Scrolls Online (PS4 - US)":"DOWN","The Elder Scrolls Online (PTS)":"UP","The Elder Scrolls Online (XBox - EU)":"DOWN","The Elder Scrolls Online (XBox - US)":"DOWN"}
// {"The Elder Scrolls Online (EU)":"DOWN","The Elder Scrolls Online (NA)":"UP","The Elder Scrolls Online (PS4 - EU)":"UP","The Elder Scrolls Online (PS4 - US)":"UP","The Elder Scrolls Online (PTS)":"UP","The Elder Scrolls Online (XBox - EU)":"UP","The Elder Scrolls Online (XBox - US)":"UP"}
// {"The Elder Scrolls Online (EU)":"UP","The Elder Scrolls Online (NA)":"UP","The Elder Scrolls Online (PS4 - EU)":"DOWN","The Elder Scrolls Online (PS4 - US)":"UP","The Elder Scrolls Online (PTS)":"UP","The Elder Scrolls Online (XBox - EU)":"UP","The Elder Scrolls Online (XBox - US)":"UP"}
// {"The Elder Scrolls Online (EU)":"DOWN","The Elder Scrolls Online (NA)":"DOWN","The Elder Scrolls Online (PS4 - EU)":"UP","The Elder Scrolls Online (PS4 - US)":"UP","The Elder Scrolls Online (PTS)":"UP","The Elder Scrolls Online (XBox - EU)":"UP","The Elder Scrolls Online (XBox - US)":"UP"}
// {"The Elder Scrolls Online (EU)":"UP","The Elder Scrolls Online (NA)":"UP","The Elder Scrolls Online (PS4 - EU)":"DOWN","The Elder Scrolls Online (PS4 - US)":"DOWN","The Elder Scrolls Online (PTS)":"UP","The Elder Scrolls Online (XBox - EU)":"DOWN","The Elder Scrolls Online (XBox - US)":"DOWN"}
// {"The Elder Scrolls Online (EU)":"UP","The Elder Scrolls Online (NA)":"UP","The Elder Scrolls Online (PS4 - EU)":"UP","The Elder Scrolls Online (PS4 - US)":"UP","The Elder Scrolls Online (PTS)":"UP","The Elder Scrolls Online (XBox - EU)":"DOWN","The Elder Scrolls Online (XBox - US)":"DOWN"}
// {"The Elder Scrolls Online (EU)":"DOWN","The Elder Scrolls Online (NA)":"DOWN","The Elder Scrolls Online (PS4 - EU)":"UP","The Elder Scrolls Online (PS4 - US)":"UP","The Elder Scrolls Online (PTS)":"DOWN","The Elder Scrolls Online (XBox - EU)":"UP","The Elder Scrolls Online (XBox - US)":"UP"}
// {"The Elder Scrolls Online (EU)":"DOWN","The Elder Scrolls Online (NA)":"DOWN","The Elder Scrolls Online (PS4 - EU)":"DOWN","The Elder Scrolls Online (PS4 - US)":"DOWN","The Elder Scrolls Online (PTS)":"DOWN","The Elder Scrolls Online (XBox - EU)":"DOWN","The Elder Scrolls Online (XBox - US)":"DOWN"}
// {"The Elder Scrolls Online (EU)":"UP","The Elder Scrolls Online (NA)":"UP","The Elder Scrolls Online (PS4 - EU)":"UP","The Elder Scrolls Online (PS4 - US)":"DOWN","The Elder Scrolls Online (PTS)":"UP","The Elder Scrolls Online (XBox - EU)":"UP","The Elder Scrolls Online (XBox - US)":"UP"}
// {"The Elder Scrolls Online (EU)":"UP","The Elder Scrolls Online (NA)":"UP","The Elder Scrolls Online (PS4 - EU)":"UP","The Elder Scrolls Online (PS4 - US)":"UP","The Elder Scrolls Online (PTS)":"UP","The Elder Scrolls Online (XBox - EU)":"UP","The Elder Scrolls Online (XBox - US)":"DOWN"}
// {"The Elder Scrolls Online (EU)":"UP","The Elder Scrolls Online (NA)":"UP","The Elder Scrolls Online (PS4 - EU)":"DOWN","The Elder Scrolls Online (PS4 - US)":"DOWN","The Elder Scrolls Online (PTS)":"DOWN","The Elder Scrolls Online (XBox - EU)":"DOWN","The Elder Scrolls Online (XBox - US)":"DOWN"}
// {"The Elder Scrolls Online (EU)":"UP","The Elder Scrolls Online (NA)":"DOWN","The Elder Scrolls Online (PS4 - EU)":"UP","The Elder Scrolls Online (PS4 - US)":"UP","The Elder Scrolls Online (PTS)":"UP","The Elder Scrolls Online (XBox - EU)":"UP","The Elder Scrolls Online (XBox - US)":"UP"}
