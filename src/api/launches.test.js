/* eslint-env jest */

import launchesApi from './launches.js'

it('launches api has base url', () => {
  expect(launchesApi.defaults.baseURL).toBe('http://localhost:3001')
})
