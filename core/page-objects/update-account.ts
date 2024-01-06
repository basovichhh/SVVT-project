import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class GlovoUpdate extends BasePage {
    private cookies = By.id('onetrust-close-btn-container');

    private getStarted = By.xpath('/html/body/div[1]/div/div/div[2]/div/div/div[1]/div/div[1]/div/div/div[2]/div/button');
    private loginButton = By.xpath('//button[@class="helio-button block primary"]');
    private emailButton = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div/div[2]/button');

    private addressInput = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div[1]/div/div/input');
    private inputField = By.className('helio-input__input');

    private continue = By.xpath('//*[@id="base-modal"]/div/div[2]/div/div/form/button');
    private addressRecommendation = By.className('address-details-card__content');   
    private profileLogo = By.xpath('//*[@id="default-wrapper"]/div/div/div[1]/div/div[1]/div[2]/div/div[2]/div/div[1]/img[1]');
    private editName = By.xpath('//div[@data-e2e-id="profile-popover-profile"]//span');

    private profileName = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div[2]/div[1]/div/div[1]/div/div/input');
    private clearButton = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div[2]/div[1]/div/div[1]/div/div/button');
    private saveButton = By.className('helio-button personal-details__cta primary');


   
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

    async clickLoginButton() {
        await this.findElementAndClick(this.loginButton);
        await this.driver.sleep(800);
    }

    async enterAddress() {
        await this.fillInputField(this.addressInput, testData.data.address);
        await this.driver.sleep(800);
    }

    async clickAddress() {
        await this.findElementAndClick(this.addressRecommendation);
        await this.driver.sleep(800);
    }
    
    async clickProfile(){
        await this.findElementAndClick(this.profileLogo);
    }

    async editProfileName() {
        await this.findElementAndClick(this.editName);
        this.driver.sleep(500);
    }

    async clearName() {
        await this.findElementAndClick(this.clearButton);
        this.driver.sleep(500);
    }

    async newProfileName() {
        await this.fillInputField(this.profileName, testData.data.new_name);
        this.driver.sleep(500);
    }

    async saveNewName() {
        await this.findElementAndClick(this.saveButton);
        this.driver.sleep(500);
    }
}