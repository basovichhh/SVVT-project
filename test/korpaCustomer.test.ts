import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { CustomerSupport } from "../core/page-objects/korpa-customer-support";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let customerSupport: CustomerSupport;

beforeAll(async () => {
    driver = await createDriver(testData.url.korpa);
    customerSupport = new CustomerSupport(driver);
}, 50000);

test("about us", async () => {
    await customerSupport.clickCustomerSupport();
    await customerSupport.enterName();
    await customerSupport.enterEmail();
    await customerSupport.enterPhone();
    await customerSupport.enterMessage();
    await customerSupport.clickSendButton();
}, 50000);

afterAll(async () => {
    await quitDriver(driver);
}, 50000);