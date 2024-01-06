import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));



export class AboutUs extends BasePage {
    private about_us = By.xpath('//a[@href="/onama"]');
    private title = By.xpath('//*[text()="O nama"]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickAboutUs(){
        await this.findElementAndClick(this.about_us);
    }

    async confirmMessage(){
        await this.checkMatchingElements(this.title, testData.data.about_us);
    }
}
