import test from 'node:test';
import assert from 'node:assert';
import { performance } from 'node:perf_hooks';

import {
  asyncSleepMs,
  asyncSleepSec,
  asyncSleepMin,
  asyncSleepHour,
  asyncSleepDay,
  asyncSleepApproxMonth,
  asyncSleepApproxYear
} from '@src/asyncsleep';

// each test should result in a sleep time of 1000ms
(async function () {
  test('Sleep miliseconds.', async function () {
    const start = performance.now();
    await asyncSleepMs(1000);
    const end = performance.now();
    const perf_result_ms = Math.round(end - start);
    if (perf_result_ms < 1000) assert.fail('Sleep time is less than 1000ms.');
    if (perf_result_ms > 1500) assert.fail('Sleep time is less than 1500ms.');
  });

  test('Sleep seconds.', async function () {
    const start = performance.now();
    await asyncSleepSec(1);
    const end = performance.now();
    const perf_result_ms = Math.round(end - start);
    if (perf_result_ms < 1000) assert.fail('Sleep time is less than 1000ms.');
    if (perf_result_ms > 1500) assert.fail('Sleep time is less than 1500ms.');
  });

  test('Sleep minutes.', async function () {
    const start = performance.now();
    await asyncSleepMin(1 / 60);
    const end = performance.now();
    const perf_result_ms = Math.round(end - start);
    if (perf_result_ms < 1000) assert.fail('Sleep time is less than 1000ms.');
    if (perf_result_ms > 1500) assert.fail('Sleep time is less than 1500ms.');
  });

  test('Sleep hours.', async function () {
    const start = performance.now();
    await asyncSleepHour(1 / 60 / 60);
    const end = performance.now();
    const perf_result_ms = Math.round(end - start);
    if (perf_result_ms < 1000) assert.fail('Sleep time is less than 1000ms.');
    if (perf_result_ms > 1500) assert.fail('Sleep time is less than 1500ms.');
  });

  test('Sleep days.', async function () {
    const start = performance.now();
    await asyncSleepDay(1 / 60 / 60 / 24);
    const end = performance.now();
    const perf_result_ms = Math.round(end - start);
    if (perf_result_ms < 1000) assert.fail('Sleep time is less than 1000ms.');
    if (perf_result_ms > 1500) assert.fail('Sleep time is less than 1500ms.');
  });

  test('Sleep months.', async function () {
    const start = performance.now();
    await asyncSleepApproxMonth(1 / 60 / 60 / 24 / 30);
    const end = performance.now();
    const perf_result_ms = Math.round(end - start);
    if (perf_result_ms < 1000) assert.fail('Sleep time is less than 1000ms.');
    if (perf_result_ms > 1500) assert.fail('Sleep time is less than 1500ms.');
  });

  test('Sleep years.', async function () {
    const start = performance.now();
    await asyncSleepApproxYear(1 / 60 / 60 / 24 / 30 / 365);
    const end = performance.now();
    const perf_result_ms = Math.round(end - start);
    if (perf_result_ms < 1000) assert.fail('Sleep time is less than 1000ms.');
    if (perf_result_ms > 1500) assert.fail('Sleep time is less than 1500ms.');
  });
})();
