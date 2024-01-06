import { By, WebDriver, WebElement, until } from "selenium-webdriver";
export default class BasePage {
    protected driver: WebDriver;


    constructor(driver: WebDriver) {
        this.driver = driver;
    }
    async getTitle(){
        return await this.driver.getTitle();
    }
    async checkMatchingElements(selector: By, matchingItem: string){
        const element = await this.findElement(selector);
        const elementText = await element.getText();
        expect(elementText).toMatch(matchingItem);
    }
    async findElement(selector: By) {
        return await this.driver.findElement(selector);
    }
    async checkTitle(page: { getTitle: () => Promise<string>}, page_title: string){
        let title = await page.getTitle();
        expect(title).toMatch(page_title);
    }  
    async findElementAndClick(selector: By){
        await this.driver.wait(
                       until.elementLocated(selector),10000)
                       .click();
    }
    async waitAndClick(elementLocator, timeout) {
        await this.driver.wait(
            until.elementLocated(elementLocator), timeout).click();
    }
   

    async hoverElement(element: WebElement) {
        const actions = this.driver.actions({ bridge: true });
        await actions
                    .move({ duration: 2000, origin: element, x: 0, y: 0 })
                    .perform();
    }
    
    async fillInputField(inputField: By, text: string) {
        const element = await this.waitForElement(inputField);
        await element.sendKeys(text);
    }
    
    async waitForElement(selector: By, timeout = 5000) {
        const element = await this.driver.wait(
            until.elementLocated(selector),
            timeout
        );
        return this.driver.wait(until.elementIsVisible(element), timeout);
    }
    

    async findAndClickEnsuringVisibility(selector: By) {
        const element = await this.waitForElement(selector, 10000);
        await this.scrollIntoView(element);
        await this.driver.wait(until.elementIsVisible(element), 5000); // Wait for the element to be visible
        await element.click();
    }
    

    async scrollIntoView(element) {
        await this.driver.executeScript("arguments[0].scrollIntoView({ block: 'center', inline: 'center' });", element);
    }
}
