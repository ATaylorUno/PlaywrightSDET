
/*
PracticePage - Page object model for the practice page for https://www.letskodeit.com/practice
*/
export class PracticePage {
  page: Page;
  
  BMWradioRadioButton: Locator;
  benzRadioRadioButton: Locator;
  hondaRadioRadioButton: Locator;

  BMWradioCheckbox: Locator;
  benzRadioCheckbox: Locator;
  hondaRadioCheckbox: Locator;

  OpenWindowButton: Locator;
  OpenTab: Locator;

  SelectClassDropdown: Locator;

  multiSelect: Locator;
  autoSuggestInput: Locator;
  enableDisabledInput: Locator;
  enableButton: Locator;
  hideButton: Locator;
  showButton: Locator;
  displayedText: Locator;
  alertNameInput: Locator;
  alertNameButton: Locator;
  confirmButton: Locator;


  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

  /**
   * Radio Button
   */
  this.BMWradioRadioButton = page.locator('#bmwradio')
  this.benzRadioRadioButton = page.locator('#benzradio')
  this.hondaRadioRadioButton = page.locator('#hondaradio')

  /**
   * Checkbox Button
   */
  this.BMWradioCheckbox = page.locator('#bmwcheck')
  this.benzRadioCheckbox = page.locator('#benzcheck')
  this.hondaRadioCheckbox = page.locator('#hondacheck')

  /**
   * Switch Window + New Tab Button
   */

  this.OpenWindowButton =page.getByRole('button', { name: 'Open Window' })
  this.OpenTab = page.getByRole('link', { name: 'Open Tab' })

  /**
   * Select Class
   */
  this.SelectClassDropdown = page.locator('#carselect')

  /**
   * Additional Elements
   */

  this.multiSelect = page.locator('#multiple-select-example')
  this.autoSuggestInput = page.locator('#autosuggest')
  this.enableDisabledInput = page.locator('#enabled-example-button')
  this.enableButton = page.locator('#enable-button')
  this.hideButton = page.locator('#hide-textbox')
  this.showButton = page.locator('#show-textbox')
  this.displayedText = page.locator('#displayed-text')
  this.alertNameInput = page.locator('#name')
  this.alertNameButton = page.locator('#alertbtn')
  this.confirmButton = page.locator('#confirmbtn')

  }

  /**
   * Select BMW Radio Button
   */
  async selectBMWRadio() {
    await this.BMWradioRadioButton.check();
  }

  /**
   * Select Benz Radio Button
   */
  async selectBenzRadio() {
    await this.benzRadioRadioButton.check();
  }

  /**
   * Select Honda Radio Button
   */
  async selectHondaRadio() {
    await this.hondaRadioRadioButton.check();
  }

   /**
   * Check if radio button is selected
   * @param {'benz' | 'honda' | 'bmw'} car
   * @returns {Promise<boolean>}
   */
  async isRadioButtonSelected(car) {
    const radioMap = {
      benz: this.benzRadioRadioButton,
      honda: this.hondaRadioRadioButton,
      bmw: this.BMWradioRadioButton
    };
    return await radioMap[car].isChecked();
  }


  // Example 2 - Checkbox Actions
  
  /**
   * Check BMW Checkbox
   */
  async checkBMWCheckbox() {
    await this.BMWradioCheckbox.check();
  }

  /**
   * Check Benz Checkbox
   */
  async checkBenzCheckbox() {
    await this.benzRadioCheckbox.check();
  }

  /**
   * Check Honda Checkbox
   */
  async checkHondaCheckbox() {
    await this.hondaRadioCheckbox.check();
  }

  /** 
   * Check if a checkbox is checked
   * @param {'benz' | 'honda' | 'bmw'} car
   * @returns {Promise<boolean>}
   */
  async isCheckboxChecked(car) {
    const checkboxMap = {
      benz: this.benzRadioCheckbox,
      honda: this.hondaRadioCheckbox,
      bmw: this.BMWradioCheckbox
    };
    return await checkboxMap[car].isChecked();
  }

  // Example 3 - Switch Window Actions

  /** 
   * Click Open Window Button
   * @returns {Promise<import('@playwright/test').Page>}
   */
  async clickOpenWindowButton() {
    const [newWindow] = await Promise.all([
      this.page.context().waitForEvent('popup'),
      this.OpenWindowButton.click()
    ]);
    await newWindow.waitForLoadState();
    return newWindow;
  }

  /** 
   * Click Open Tab Link
   * @returns {Promise<import('@playwright/test').Page>}
   */
  async clickOpenTabLink() {
    const [newTab] = await Promise.all([
      this.page.context().waitForEvent('popup'),
      this.OpenTab.click()
    ]);
    await newTab.waitForLoadState();
    return newTab;
  }

  // Example 4 - Select Dropdown Actions

  /**
   * Select an option by Value
   * @param {'benz' | 'honda' | 'bmw'} value
   */
  async selectCarByValue(value) {
    await this.SelectClassDropdown.selectOption(value);
  }

  /** 
   * Select an option by Text
   * @param {string} text
   */
  async selectCarByText(text) {
    await this.SelectClassDropdown.selectOption({ label: text });
  }

  /** 
   * Get the currently selected value from the dropdown
   * @returns {Promise<string>}
   */
  async getSelectedCarValue() {
    return await this.SelectClassDropdown.selectDropdown().inputValue;
  }

  // Additional Helper Methods

  /** 
   * Get the page title
   * @returns {Promise<string>}
   */
  async getPageTitle() {
    return await this.page.title();
  }

  /**
   * Verify if we're on the practice page
   * @returns {Promise<boolean>}
   */
  async isOnPracticePage() {
    return this.page.url().includes('/practice');
  }

  /**
   * Take screenshot of specific section
   * @param {string} selector
   * @param {string} path
   */
  async takeScreenshot(selector, path) {
    await this.page.locator(selector).screenshot({ path });
  }

  /**
   * Wait for page to load
   */
  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }
}
