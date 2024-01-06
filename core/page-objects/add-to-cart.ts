import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export  class AddToCart extends BasePage {
private cookies = By.xpath('//button[@class="onetrust-close-btn-handler onetrust-close-btn-ui banner-close-button ot-close-icon"]');
private bash = By.xpath('//a[@href="/ba/hr/sarajevo/bash/"]');
private promotivneakcije = By.xpath('/html/body/div[1]/div/div/div[2]/div/div/div/section[1]/div[2]/div/div[3]/div[2]/div[2]/div/div[1]/div/div[2]/div[1]/div/a');
private masteburger = By.xpath('//div[@class="product-row"]//span[@text="Master burger"]');
private addresscontainer = By.xpath ('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div[2]/div[2]');
private filladress = By.xpath ('/html/body/div[1]/div/div/div[3]/div[2]/div/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div[1]/div/div/input')
private otoka = By.xpath ('/html/body/div[1]/div/div/div[3]/div[2]/div/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div[2]/div[1]/div/div[1]');
private addcart = By.xpath ('//button[@data-test-id="add-button"]');



constructor(driver: WebDriver) {
    super(driver);
}


async clickCookies() {
    await this.findElementAndClick(this.cookies);
}


async clickZeks() {
    await this.waitAndClick(this.bash,10000);
}

async clickPromotivneAkcije() {
    await this.findElementAndClick(this.promotivneakcije);
}

async clickMasteburger() {
    await this.findElementAndClick(this.masteburger);
}

async clickAddressContainer() {
    await this.findElementAndClick(this.addresscontainer);
}

async fillAddress() {
    await this.fillInputField(this.filladress,testData.location.address);
}

async clickOtoka() {
    await this.findElementAndClick(this.otoka);
}

async add() {
    await this.findElementAndClick(this.addcart);
}

}
