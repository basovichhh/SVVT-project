import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class glovoRegistration extends BasePage {
    private cookies = By.id('onetrust-close-btn-container');

    private getStarted = By.xpath('/html/body/div[1]/div/div/div[2]/div/div/div[1]/div/div[1]/div/div/div[2]/div');
    private emailButton = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div/div[2]/button');
    private addressInput = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div[1]/div/div/input');
    private inputField = By.className('helio-input__input');

    private continue = By.xpath('//*[@id="base-modal"]/div/div[2]/div/div/form/button');
    private addressRecommendation = By.className('address-details-card__content');   

    //private getStarted = By.className('helio-button get-started-button block primary');
    //private emailButton = By.className('social-button');
    //private addressInput = By.xpath('input[class="helio-input__input"]');


    constructor(driver: WebDriver) {
        super(driver);
    }

    async closeCookies(){
        await this.findElementAndClick(this.cookies);
    }

    async getStartedButton() {
        await this.findElementAndClick(this.getStarted);
    }

    async emailLoginButton() {
        await this.findElementAndClick(this.emailButton);
        await this.driver.sleep(800);
    }

    async enterEmail() {
        await this.fillInputField(this.inputField, testData.data.email);
        await this.driver.sleep(800);
    }

    async continueButton() {
        await this.findElementAndClick(this.continue);
        await this.driver.sleep(500);
    }

    async enterPassword() {
        await this.fillInputField(this.inputField, testData.data.password);
        await this.driver.sleep(800);
    }

    async enterLoginPassword() {
        await this.fillInputField(this.inputField, testData.data.password);
        await this.driver.sleep(700);
    }

    async enterName(){
        await this.fillInputField(this.inputField, testData.data.name);
        await this.driver.sleep(700);
    }

    async enterAddress() {
        await this.fillInputField(this.addressInput, testData.data.address);
        await this.driver.sleep(800);
    }

    async clickAddressPin() {
        await this.findElementAndClick(this.addressRecommendation);
        await this.driver.sleep(800);
    }
}