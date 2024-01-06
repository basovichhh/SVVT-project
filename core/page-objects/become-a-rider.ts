import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export  class Rider extends BasePage {

private cookies = By.xpath('//button[@class="onetrust-close-btn-handler onetrust-close-btn-ui banner-close-button ot-close-icon"]');
private registerhere = By.xpath('//div[@data-test-id="footer-column"]//a[@href="https://couriers.glovoapp.com/ba/"]');
private firstname = By.xpath ('//input[@name="name"]');
private email = By.xpath ('//input[@name="email"]');
private number = By.xpath ('//input[@placeholder="61 123 456"]');
private bike = By.xpath ('//div[@class="vehicle-field-box"]//img[@src="https://couriers.glovoapp.com/images/transports/bicycle.svg"]');
private nastavi = By.xpath ('//button[@data-test-id="glovers-contact-submit"]');
private polje = By.xpath ('//div[@class="el-select text-field__input"]//div[@class="el-input el-input--suffix"] //input[@readonly="readonly"]');
private facebook = By.xpath ('/html/body/div[3]/div[1]/div[1]/ul/li[1]');


constructor(driver: WebDriver) {
    super(driver);

}

async clickCookies() {
    await this.findElementAndClick(this.cookies);
}

async clickRegisterHere() {
    await this.findElementAndClick(this.registerhere);
}

async fillFirstName() {
    await this.fillInputField(this.firstname,testData.dostavljac.name);
}

async fillEmail() {
    await this.fillInputField(this.email,testData.dostavljac.email);
}

async fillNumber() {
    await this.fillInputField(this.number,testData.dostavljac.number);
}

async clickBike() {
    await this.findElementAndClick(this.bike);
}

async clickNastavi() {
    await this.findElementAndClick(this.nastavi);
}

async clickFacebook() {
    await this.findElementAndClick(this.facebook);
}

async fillPolje() {
    await this.findElementAndClick(this.polje);
}



}