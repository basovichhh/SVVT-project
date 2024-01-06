import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export  class RemoveFromCart extends BasePage {
private minus = By.xpath('//span[@class="helio-button__content"]//img[@src="https://glovoapp.com/images/svg/minus.svg"]');


constructor(driver: WebDriver) {
    super(driver);

}   

async clickMinus() {
    await this.findElementAndClick(this.minus);
}

}

