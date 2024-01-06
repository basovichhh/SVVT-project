import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { GlovoPW } from "../core/page-objects/glovo-pw-recovery";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let glovoPW: GlovoPW;

beforeAll(async () => {
    driver = await createDriver(testData.url.glovo);
    glovoPW = new GlovoPW(driver);
}, 50000);

test("glovo pw recovery", async () => {
    await glovoPW.closeCookies();
    await glovoPW.getStartedButton();
    await glovoPW.emailLoginButton();
    await glovoPW.enterEmail();
    await glovoPW.continueButton();
    await glovoPW.forgotPWButton();
    await glovoPW.sendVerificationMailButton();
    await glovoPW.goToLogInButton();
    await glovoPW.enterPassword();
    await glovoPW.logIn();
    await glovoPW.enterAddress();
    await glovoPW.clickAddress();
}, 50000);

afterAll(async () => {
    await quitDriver(driver);
}, 50000);