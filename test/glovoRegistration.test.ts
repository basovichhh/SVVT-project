
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { glovoRegistration } from "../core/page-objects/glovo-registration";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let glovoReg: glovoRegistration;

beforeAll(async () => {
    driver = await createDriver(testData.url.glovo);
    glovoReg = new glovoRegistration(driver);
}, 50000);

test("glovo registration", async () => {
    await glovoReg.closeCookies();
    await glovoReg.getStartedButton();
    await glovoReg.emailLoginButton();
    await glovoReg.enterEmail();
    await glovoReg.continueButton();
    await glovoReg.enterPassword();
    await glovoReg.continueButton();
    await glovoReg.enterName();
    await glovoReg.continueButton();
    await glovoReg.enterAddress();
    await glovoReg.clickAddressPin();
}, 50000);

afterAll(async () => {
    await quitDriver(driver);
}, 50000);