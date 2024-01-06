import { AddToCart } from "../core/page-objects/add-to-cart";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let addtocart: AddToCart;

beforeAll(async () => {
    driver = await createDriver(testData.url.glovo);
    addtocart = new AddToCart(driver);
} , 50000);


test("Add to cart", async () => {

    await addtocart.clickCookies();
    await addtocart.clickZeks();
    await addtocart.clickPromotivneAkcije();
    await addtocart.clickMasteburger();
    await addtocart.clickAddressContainer();
    await addtocart.fillAddress();
    await addtocart.clickOtoka();
    await addtocart.add();    
} , 50000);


afterAll(async () => {
    await quitDriver(driver);
});
