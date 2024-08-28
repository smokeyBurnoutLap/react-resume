import {expect, test} from '@playwright/test';

test('has title', async ({page}) => {
  // await page.goto('');

  // Expect a title "to contain" a substring.
  await page.goto('');
  await expect(page).toHaveTitle(/GordonDePuy.com/);
});
