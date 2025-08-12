import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});



test('Selector Test', async ({ page }) => {
  await page.goto('https://www.letskodeit.com/practice');
  await page.locator('#bmwradio').check();
  await page.waitForTimeout(8000);

  // await page.locator('#hondacheck').check();
  // await page.waitForSelector('#hondacheck', { state: 'hidden});
  await page.waitForLoadState('load');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');

 
  await page.locator('#benzcheck').check()
  await page.locator('#benzcheck').check()
  await page.getByRole('button', { name: 'Open Window'}).click();
 // await expect(page.getByRole('button', { name: 'Open Window'})).toBeVisible();
  // await page.locator('#bmwradio').check()
 
 // await page.getByRole('button', { name: 'Open Window'}).toBeVisible()

  // await expect(page.getByRole('button', { name: 'Open Window'})).toBeVisible();

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Checkbox Test', async ({ page })=> {
  await page.goto('https://www.letskodeit.com/practice');
  await page.locator('#bmwcheck').check();
  await page.locator('#hondacheck').check();
  await page.locator('#benzcheck').check();


})

test('Switch Window Test', async ({ page })=> {
  await page.goto('https://www.letskodeit.com/practice');

  const switchWindow = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'open window' }).click();
  const popup = await switchWindow;

await expect(popup).toHaveURL('https://www.letskodeit.com/courses'); 

})

test.only('New Tab Test', async ({ page })=> {

await page.goto('https://www.letskodeit.com/practice');

const newTab = page.waitForEvent('popup');
await page.locator('#opentab').click();
const popup = await newTab;

await expect(popup).toHaveURL('https://www.letskodeit.com/courses'); 

})

test.only('Drop down', async ({ page })=> {

await page.goto('https://www.letskodeit.com/practice');

const dropDown = page.getByLabel('carselect');
await dropDown.selectOption({ label: 'BMW' });

})