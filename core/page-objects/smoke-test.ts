import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";



const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class SmokeTest extends BasePage {

//  private phonecont = By.xpath("/html/body/div[1]/div/div/div[1]/div/div/span/div/div[1]/div/div[2]/div[1]/div[7]/span/section/div/button/div[2]");
//  private phonenumb = By.xpath("/html/body/div[1]/div/div/div[3]/div/div/div[2]/div[2]/div/div[1]/div/div[2]/div[1]/div/div/div/input");
//  private kontiniju = By.xpath("/html/body/div[1]/div/div/div[3]/div/div/div[2]/div[2]/div/div[2]/div/div/button");
//  private iks = By.xpath("/html/body/div[1]/div/div/div[3]");
 private paymentcontainer = By.xpath("/html/body/div[1]/div/div/div[1]/div/div/span/div/div[1]/div/div[2]/div[1]/div[9]/span/div/div/div/div/button/div[2]");
 private cash = By.xpath('//div[@data-test-id="payment-option"]');
 private home = By.xpath('/html/body/div[1]/div/div/div[1]/div/div/span/header/div/div[1]/a');
 private profile = By.xpath('//img[@src="https://glovoapp.com/images/svg/profile-icon_new.svg"]');
 private logout = By.xpath('//div[@class="profile_logout"]');


constructor(driver: WebDriver) {
    super(driver);
}


async clickPaymentContainer() {
    await this.findElementAndClick(this.paymentcontainer);
}

async clickCash() {
    await this.findElementAndClick(this.cash);
}

async clickHome() {
    await this.findElementAndClick(this.home);
}

async clickProfile() {
    await this.findElementAndClick(this.profile);
}

async clickLogout() {
    await this.findElementAndClick(this.logout);
}


}