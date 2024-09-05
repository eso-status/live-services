# eso-status/live-services

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=eso-status_live-services&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=eso-status_live-services)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=eso-status_live-services&metric=bugs)](https://sonarcloud.io/summary/new_code?id=eso-status_live-services)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=eso-status_live-services&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=eso-status_live-services)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=eso-status_live-services&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=eso-status_live-services)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=eso-status_live-services&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=eso-status_live-services)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=eso-status_live-services&metric=coverage)](https://sonarcloud.io/summary/new_code?id=eso-status_live-services)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=eso-status_live-services&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=eso-status_live-services)

[![npm](https://img.shields.io/npm/v/@eso-status/live-services)](https://www.npmjs.com/package/@eso-status/live-services)
[![license](https://img.shields.io/npm/l/@eso-status/live-services)](https://github.com/eso-status/live-services/blob/master/LICENSE.md)
<img src="https://img.shields.io/npm/dt/@eso-status/live-services" alt="Downloads" />
<img src="https://img.shields.io/node/v/@eso-status/live-services" alt="Node version" />

[![Build Status](https://github.com/eso-status/live-services/workflows/CI/badge.svg)](https://github.com/eso-status/live-services/actions/workflows/CI.yaml)
[![Build Status](https://github.com/eso-status/live-services/workflows/CD/badge.svg)](https://github.com/eso-status/live-services/actions/workflows/CD.yaml)

eso-status/live-services

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [Return exemple](#return-exemple)

### Install
```shell
npm i @eso-status/live-services
```

### Usage
```javascript
import LiveServices from '@eso-status/live-services';
import { EsoStatusRawData } from '@eso-status/types';

const esoStatusRawDataList: EsoStatusRawData[] = await LiveServices.getData();
```
### Return exemple
```text
[
  {
    source: 'https://live-services.elderscrollsonline.com/status/realms',
    raw: 'The Elder Scrolls Online (EU)',
    slug: 'server_pc_eu',
    type: 'server',
    support: 'pc',
    zone: 'eu',
    status: 'up',
    rawSlug: 'The Elder Scrolls Online (EU)',
    rawStatus: 'UP'
  },
  {
    source: 'https://live-services.elderscrollsonline.com/status/realms',
    raw: 'The Elder Scrolls Online (NA)',
    slug: 'server_pc_na',
    type: 'server',
    support: 'pc',
    zone: 'na',
    status: 'up',
    rawSlug: 'The Elder Scrolls Online (NA)',
    rawStatus: 'UP'
  },
  {
    source: 'https://live-services.elderscrollsonline.com/status/realms',
    raw: 'The Elder Scrolls Online (PS4 - EU)',
    slug: 'server_ps_eu',
    type: 'server',
    support: 'ps',
    zone: 'eu',
    status: 'up',
    rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
    rawStatus: 'UP'
  },
  {
    source: 'https://live-services.elderscrollsonline.com/status/realms',
    raw: 'The Elder Scrolls Online (PS4 - US)',
    slug: 'server_ps_na',
    type: 'server',
    support: 'ps',
    zone: 'na',
    status: 'up',
    rawSlug: 'The Elder Scrolls Online (PS4 - US)',
    rawStatus: 'UP'
  },
  {
    source: 'https://live-services.elderscrollsonline.com/status/realms',
    raw: 'The Elder Scrolls Online (PTS)',
    slug: 'server_pc_pts',
    type: 'server',
    support: 'pc',
    zone: 'pts',
    status: 'up',
    rawSlug: 'The Elder Scrolls Online (PTS)',
    rawStatus: 'UP'
  },
  {
    source: 'https://live-services.elderscrollsonline.com/status/realms',
    raw: 'The Elder Scrolls Online (XBox - EU)',
    slug: 'server_xbox_eu',
    type: 'server',
    support: 'xbox',
    zone: 'eu',
    status: 'up',
    rawSlug: 'The Elder Scrolls Online (XBox - EU)',
    rawStatus: 'UP'
  },
  {
    source: 'https://live-services.elderscrollsonline.com/status/realms',
    raw: 'The Elder Scrolls Online (XBox - US)',
    slug: 'server_xbox_na',
    type: 'server',
    support: 'xbox',
    zone: 'na',
    status: 'up',
    rawSlug: 'The Elder Scrolls Online (XBox - US)',
    rawStatus: 'UP'
  }
]
```
