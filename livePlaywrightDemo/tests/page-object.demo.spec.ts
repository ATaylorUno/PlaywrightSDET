// @ts-check
import {test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { PracticePage } from '../pages/PracticePage'


/** Page Object Model Test suite */

test.describe('Page Object Model Demo', () => {
  test('Complete workflow: Navigate and interact with first four practice examples', async ({ page }) => {
    // initialise page object
    const homePage = new HomePage(page);
    const practicePage = new PracticePage(page);

    // Step 1: Navigate to Home Page
    await homePage.goToHomePage();

    // Verify home page
    await expect(page).toHaveURL(/.*home/);
    console.log('Home page verified');

    // Step 2: Navigate to Practice Page
    await homePage.goToPracticePage();

    // Verify practice page
    await expect(page).toHaveURL(/.*practice/);
    console.log('Practice page verified');

    // await for page to load
    await practicePage.waitForPageLoad();

    // EXAMPLE 1: Radio Button Practice

    await practicePage.selectBMWRadio();
    console.log('BMW Radio button selected');

    // Verify BMW is selected
    expect(await practicePage.isRadioButtonSelected('bmw')).toBe(true);

    // Select Benz Radio button
    await practicePage.selectBenzRadio();
    console.log('Benz Radio button selected');

    // Verify Benz is selected
    expect(await practicePage.isRadioButtonSelected('benz')).toBe(true);

    // Select Honda Radio button
    await practicePage.selectHondaRadio();
    console.log('Honda Radio button selected');

    // Verify Honda is selected
    expect(await practicePage.isRadioButtonSelected('honda')).toBe(true);

    // Example 2: Checkbox Practice
    console.log('Checkbox Practice');

    // Check BMW checkbox

    await practicePage.checkBMWCheckbox();
    console.log('BMW Checkbox checked');
    expect(await practicePage.isCheckboxChecked('bmw')).toBe(true);

    // Check Benz checkbox
    await practicePage.checkBenzCheckbox();
    console.log('Benz Checkbox checked');
    expect(await practicePage.isCheckboxChecked('benz')).toBe(true);

    // Check Honda checkbox
    await practicePage.checkHondaCheckbox();
    console.log('Honda Checkbox checked');
    expect(await practicePage.isCheckboxChecked('honda')).toBe(true);

    // Example 3 : Switch Window
    console.log('Switch Window Practice');

    // Click Open Window Button
    const newWindow = await practicePage.clickOpenWindowButton();
    console.log('New window opened');

    // Verify new window URL
    expect(newWindow.url()).toContain('letskodeit.com');
    console.log('New Window:', newWindow.url());
  });
});
