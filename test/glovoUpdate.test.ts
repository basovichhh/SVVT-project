
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { GlovoUpdate } from "../core/page-objects/update-account";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let glovoUpdate: GlovoUpdate;

beforeAll(async () => {
    driver = await createDriver(testData.url.glovo);
    glovoUpdate = new GlovoUpdate(driver);
}, 50000);

test("glovo update account", async () => {
    await glovoUpdate.closeCookies();
    await glovoUpdate.getStartedButton();
    await glovoUpdate.emailLoginButton();
    await glovoUpdate.enterEmail();
    await glovoUpdate.continueButton();
    await glovoUpdate.enterLoginPassword();
    await glovoUpdate.continueButton();
    await glovoUpdate.enterName();
    await glovoUpdate.continueButton();
    await glovoUpdate.enterAddress();
    await glovoUpdate.clickAddress();
    await glovoUpdate.clickProfile();
    await glovoUpdate.editProfileName();
    await glovoUpdate.clearName();
    await glovoUpdate.newProfileName();
    await glovoUpdate.saveNewName();



   
}, 50000);

afterAll(async () => {
    await quitDriver(driver);
}, 50000);