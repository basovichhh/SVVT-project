import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { AboutUs } from "../core/page-objects/korpa-about-us";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let aboutUs: AboutUs;

beforeAll(async () => {
    driver = await createDriver(testData.url.korpa);
    aboutUs = new AboutUs(driver);
}, 50000);

test("about us", async () => {
    await aboutUs.clickAboutUs();
    await aboutUs.confirmMessage();
}, 50000);

afterAll(async () => {
    await quitDriver(driver);
}, 50000);