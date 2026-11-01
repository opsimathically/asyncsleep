const asyncSleepMs = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
const asyncSleepSec = (seconds: number) => asyncSleepMs(seconds * 1000);
const asyncSleepMin = (minutes: number) => asyncSleepSec(minutes * 60);
const asyncSleepHour = (hours: number) => asyncSleepMin(hours * 60);
const asyncSleepDay = (days: number) => asyncSleepHour(days * 24);
const asyncSleepApproxMonth = (months: number) => asyncSleepDay(months * 30);
const asyncSleepApproxYear = (years: number) =>
  asyncSleepApproxMonth(years * 365);

export {
  asyncSleepMs,
  asyncSleepSec,
  asyncSleepMin,
  asyncSleepHour,
  asyncSleepDay,
  asyncSleepApproxMonth,
  asyncSleepApproxYear
};
