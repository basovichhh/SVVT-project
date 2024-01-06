import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class CustomerSupport extends BasePage {
    private customerSupport = By.xpath('//a[@href="/pomoc"]');
   // private input = By.className('form-control');

    private name = By.xpath('/html/body/section[2]/div/div/div/div/div/section/form/div[1]/div/input');
    private email = By.xpath('/html/body/section[2]/div/div/div/div/div/section/form/div[2]/div/input');
    private phone = By.xpath('/html/body/section[2]/div/div/div/div/div/section/form/div[3]/div/input');
    private message = By.xpath('//textarea[@class="form-control"]');
    private sendButton = By.className('btn squareloginb btn-lg mtop');


    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickCustomerSupport(){
        await this.findElementAndClick(this.customerSupport);
        await this.driver.sleep(800);
    }

    async enterName(){
        await this.fillInputField(this.name, testData.data.name);
        await this.driver.sleep(800);
    }
    async enterEmail(){
        await this.fillInputField(this.email, testData.data.email);
        await this.driver.sleep(800);
    }
    async enterPhone(){
        await this.fillInputField(this.phone, testData.data.phone);
        await this.driver.sleep(800);
    }
    async enterMessage(){
        await this.fillInputField(this.message, testData.data.message);
        await this.driver.sleep(800);
    }

    async clickSendButton(){
        await this.findElementAndClick(this.sendButton);
    }
}
