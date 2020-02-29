const detox = require('detox');
const config = require('../package.json').detox;
const adapter = require('detox/runners/jest/adapter');
const specReporter = require('detox/runners/jest/specReporter');

// Set the default timeout
jest.setTimeout(120000);

jasmine.getEnv().addReporter(adapter);

// This takes care of generating status logs on a per-spec basis. By default, jest only reports at file-level.
// This is strictly optional.
jasmine.getEnv().addReporter(specReporter);

beforeAll(async () => {
  await detox.init(config, {launchApp: false});

  try {
    await device.launchApp({
      permissions: {notifications: 'YES', calendar: 'YES'},
    });
  } catch (e) {
    console.log(
      'It will certainly throw an exception, but lets sleep for 60000ms',
      e,
    );
    await sleep(60000);
    await device.launchApp({
      permissions: {notifications: 'YES', calendar: 'YES'},
    });
    console.log('hey, sleep is over. Crossed fingers');
  }
}, 300000);

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
