import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export  class VerifyOrder extends BasePage {
    

private orderbutton = By.xpath ('//div[@class="cart-wrapper__cart"]//button[@data-test-id="checkout-button"]//span[@class="helio-button__content"]');
private emailbutton = By.xpath('//button[@data-test-id="email-button"]')
private fillemail = By.xpath ('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div/form/div/div[1]/div/div/input')
private continuebutton = By.xpath ('//button[@data-test-id="submit-button"]')
private fillpassword = By.xpath ('//input[@type="password"]')
private login = By.xpath ('//button[@data-test-id="submit-button"]//span[@class="helio-button__content"]')
private confirmaddress = By.xpath ('//button[@id="address-submit-button"]')
private checkoutbutton = By.xpath('//button[@class="helio-button footer--confirm primary"]')

private cllogin = By.xpath ('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div/form/div/div[1]/div/div/button')


constructor(driver: WebDriver) {
    super(driver);
}

async clickOrderButton() {
    await this.findAndClickEnsuringVisibility(this.orderbutton);
}
async clickGoogleButton() {
    await this.findElementAndClick(this.emailbutton);
}

async fillEmail() {
    await this.fillInputField(this.fillemail,testData.mails.email);
}
async clickContinueButton() {
    await this.findElementAndClick(this.continuebutton);
}
async fillPassword() {
    await this.fillInputField(this.fillpassword,testData.mails.password);
}
async clickLogin() {
    await this.findElementAndClick(this.login);
}

async clickConfirmAddress() {
    await this.findElementAndClick(this.confirmaddress);
}
async clickCheckoutButton() {
    await this.findElementAndClick(this.checkoutbutton);
}

async clickclLogin() {
    await this.findElementAndClick(this.cllogin);
}

    


}