import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class GlovoPW extends BasePage {
    private cookies = By.id('onetrust-close-btn-container');

   
    private getStarted = By.xpath('/html/body/div[1]/div/div/div[2]/div/div/div[1]/div/div[1]/div/div/div[2]/div/button');
    private emailButton = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div/div[2]/button');
    private forgotPW = By.xpath('//div[@class="login-screen"]//button[@class="helio-button login-screen__button inline linkMedium"]');
    private sendVerificationMail = By.className('helio-button email-screen__button block primary');
    private goToLogIn = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div/button[1]');

    private addressInput = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div[1]/div/div/input');
    private inputField = By.className('helio-input__input');

    private continue = By.xpath('//*[@id="base-modal"]/div/div[2]/div/div/form/button');
    private addressRecommendation = By.className('address-details-card__content');   
    private logInButton = By.xpath('//div[@class="login-screen"]//button[@class="helio-button block primary"]');
   
    // private getStarted = By.className('helio-button get-started-button block primary');
    //private forgotPW = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div/form/button[1]/span');
    //private sendVerificationMail = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div/form/button');
    //private goToLogIn = By.className('helio-button email-screen__button block primary');
    //private pwInput = By.className('helio-input__input');
    //private pwInput = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div/form/div/div[1]/div/div/input');
    //private logInButton = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div/form/button[2]');


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

    async forgotPWButton(){
        await this.findElementAndClick(this.forgotPW);
    }

    async sendVerificationMailButton(){
        await this.findElementAndClick(this.sendVerificationMail);
    }

    async goToLogInButton(){
        await this.findElementAndClick(this.goToLogIn);
    }

    async enterPassword() {
        await this.fillInputField(this.inputField, testData.data.password);
        await this.driver.sleep(800);
    }

    async logIn(){
        await this.findElementAndClick(this.logInButton);
    }

    async enterAddress() {
        await this.fillInputField(this.addressInput, testData.data.address);
        await this.driver.sleep(800);
    }

    async clickAddress() {
        await this.findElementAndClick(this.addressRecommendation);
        await this.driver.sleep(800);
    }
}