import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class GlovoSearch extends BasePage {
    private cookies = By.id('onetrust-close-btn-container');
    private addressButton = By.xpath('/html/body/div[1]/div/div/div[2]/div/div/div[2]/span/section/div[2]/div/div[2]/div/div[1]/div[2]');
    private addressField = By.className('helio-input__input');
    private addressRecommendation = By.className('address-details-card__content');
    private searchBar = By.className('text-giant');
    private item = By.className('store-card__container');
    private itemTitle = By.xpath('/html/body/div[1]/div/div/div[2]/div/div/div/section[1]/div[2]/div/div[2]/aside/ul/li[2]/dl/div/dt/button');

    //private addressButton = By.className('address-input__container__input');
    // private addressField = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div[1]/div/div/input');
    //private addressRecommendation = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div[2]/div[1]/div/div[1]');
    // private searchBar = By.xpath('/html/body/div[1]/div/div/div[2]/div/div/div[1]/div/div[1]/div[1]/div/form/div/input');
    //private item = By.xpath('/html/body/div[1]/div/div/div[2]/div/div/div/div/div[1]/div[2]/div[1]/div/a/div[2]/div[1]');


    constructor(driver: WebDriver) {
        super(driver);
    }

    async closeCookies(){
        await this.findElementAndClick(this.cookies);
    }

    async clickAddress(){
        await this.findElementAndClick(this.addressButton);
    }

    async enterAddress(){
        await this.fillInputField(this.addressField, testData.data.address);
        await this.driver.sleep(800);
    }

    async clickRecommendation(){
        await this.findElementAndClick(this.addressRecommendation);
        await this.driver.sleep(500);    
    }

    async searchItem(){
        await this.fillInputField(this.searchBar, testData.data.product);
        await this.driver.sleep(800);
    }

    async clickItem(){
        await this.findElementAndClick(this.item);
    }

    async ItemtitleCheck(){
        await this.checkMatchingElements(this.itemTitle, testData.data.item);
    }   
}