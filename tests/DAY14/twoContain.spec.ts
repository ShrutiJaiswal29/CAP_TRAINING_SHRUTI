import { test, expect } from '@playwright/test';

test('toContain example', async () => {

  const fruits = ['apple', 'banana', 'mango'];

  expect(fruits).toContain('banana');

});