import { AddToCart } from "../core/page-objects/add-to-cart";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { VerifyOrder } from "../core/page-objects/verify-order";
import { SmokeTest } from "../core/page-objects/smoke-test";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let addtocart: AddToCart;
let Verifyorder: VerifyOrder;
let smokeTest: SmokeTest;

beforeAll(async () => {
    driver = await createDriver(testData.url.glovo);
    addtocart = new AddToCart(driver);
    Verifyorder = new VerifyOrder(driver);
    smokeTest = new SmokeTest(driver);
} , 10000);


test("Add to cart", async () => {
    
        await addtocart.clickCookies();
        await addtocart.clickZeks();
        await addtocart.clickPromotivneAkcije();
        await addtocart.clickMasteburger();
        await addtocart.clickAddressContainer();
        await addtocart.fillAddress();
        await addtocart.clickOtoka();
        await addtocart.add();    
        await Verifyorder.clickOrderButton();
        await Verifyorder.clickGoogleButton();
        await Verifyorder.fillEmail();
        await Verifyorder.clickContinueButton();
        await Verifyorder.clickclLogin();
        await Verifyorder.fillPassword();
        await Verifyorder.clickLogin();
        await Verifyorder.clickConfirmAddress();
        await Verifyorder.clickCheckoutButton();
        await smokeTest.clickPaymentContainer();
        await smokeTest.clickCash();
        await smokeTest.clickHome();
        await smokeTest.clickProfile();
        await smokeTest.clickLogout();



} , 60000);


afterAll(async () => {
    await quitDriver(driver);
} , 50000);