import { test } from '@playwright/test';

test.describe('Test Group2', () => {

   // create beforeEach for tests
   test.beforeEach(async ({ page }) => { 
        await page.goto("https://practice.cydeo.com/");
   });

   // create afterEach for tests
    test.afterEach(async ({ page }) => {
        //await page.waitForTimeout(3000);
   });

    
  test('Getting the title of the page', async ({ page }) => {
    console.log(await page.title());
  });

  test('Getting the current URL OF the page', async ({ page }) => {
    console.log(page.url());

  });

});