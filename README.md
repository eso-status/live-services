# eso-status/live-services
[![npm](https://img.shields.io/npm/v/@eso-status/live-services)](https://www.npmjs.com/package/@eso-status/live-services)
[![license](https://img.shields.io/npm/l/@eso-status/live-services)](https://github.com/eso-status/live-services/blob/master/LICENSE.md)
<img src="https://img.shields.io/npm/dt/@eso-status/live-services" alt="Downloads" />
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/eso-status/live-services)](https://lgtm.com/projects/g/eso-status/live-services/context:javascript)
<img src="https://img.shields.io/node/v/@eso-status/live-services" alt="Node version" />
[![Build Status](https://github.com/eso-status/live-services/workflows/CI/badge.svg)](https://github.com/eso-status/live-services/actions/workflows/CI.yaml)
[![Delivery Status](https://github.com/eso-status/live-services/workflows/CD/badge.svg)](https://github.com/eso-status/live-services/actions/workflows/CD.yaml)

eso-status/live-services is a library for getting and formatting data can founded in [https://live-services.elderscrollsonline.com/status/realms](https://live-services.elderscrollsonline.com/status/realms)

## Table of Contents
- [How to get it ?](#how-to-get-it-)
- [How to use it ?](#how-to-use-it-)
- [Returned data format](#returned-data-format-)

### How to get it ?
```shell
npm i @eso-status/live-services
```

### How to use it ?
- TypeScript
```typescript
import { RawEsoStatus } from '@eso-status/types';
import { LiveServices } from "@eso-status/live-services";

LiveServices.getData().then((data: RawEsoStatus[]): void => {
  
}).catch((error: Error): void => {
  
});
```
- JavaScript
```javascript
const { LiveServices } = require('@eso-status/live-services');

LiveServices.getData().then(function (data) {
  
}).catch(function (error) {
  
});
```

### Returned data format ?
```text
[
  {
    sources: [ 'https://live-services.elderscrollsonline.com/status/realms' ],
    raw: [ 'The Elder Scrolls Online (EU)', 'UP' ],
    rawSlug: 'The Elder Scrolls Online (EU)',
    rawStatus: 'UP',
    slugs: [ 'server_pc_eu' ],
    support: 'pc',
    zone: 'eu',
    status: 'up'
  },
  {
    sources: [ 'https://live-services.elderscrollsonline.com/status/realms' ],
    raw: [ 'The Elder Scrolls Online (NA)', 'UP' ],
    rawSlug: 'The Elder Scrolls Online (NA)',
    rawStatus: 'UP',
    slugs: [ 'server_pc_na' ],
    support: 'pc',
    zone: 'na',
    status: 'up'
  },
  {
    sources: [ 'https://live-services.elderscrollsonline.com/status/realms' ],
    raw: [ 'The Elder Scrolls Online (PS4 - EU)', 'UP' ],
    rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
    rawStatus: 'UP',
    slugs: [ 'server_ps_eu' ],
    support: 'ps',
    zone: 'eu',
    status: 'up'
  },
  {
    sources: [ 'https://live-services.elderscrollsonline.com/status/realms' ],
    raw: [ 'The Elder Scrolls Online (PS4 - US)', 'UP' ],
    rawSlug: 'The Elder Scrolls Online (PS4 - US)',
    rawStatus: 'UP',
    slugs: [ 'server_ps_na' ],
    support: 'ps',
    zone: 'na',
    status: 'up'
  },
  {
    sources: [ 'https://live-services.elderscrollsonline.com/status/realms' ],
    raw: [ 'The Elder Scrolls Online (PTS)', 'UP' ],
    rawSlug: 'The Elder Scrolls Online (PTS)',
    rawStatus: 'UP',
    slugs: [ 'server_pc_pts' ],
    support: 'pc',
    zone: 'pts',
    status: 'up'
  },
  {
    sources: [ 'https://live-services.elderscrollsonline.com/status/realms' ],
    raw: [ 'The Elder Scrolls Online (XBox - EU)', 'UP' ],
    rawSlug: 'The Elder Scrolls Online (XBox - EU)',
    rawStatus: 'UP',
    slugs: [ 'server_xbox_eu' ],
    support: 'xbox',
    zone: 'eu',
    status: 'up'
  },
  {
    sources: [ 'https://live-services.elderscrollsonline.com/status/realms' ],
    raw: [ 'The Elder Scrolls Online (XBox - US)', 'UP' ],
    rawSlug: 'The Elder Scrolls Online (XBox - US)',
    rawStatus: 'UP',
    slugs: [ 'server_xbox_na' ],
    support: 'xbox',
    zone: 'na',
    status: 'up'
  }
]
```
