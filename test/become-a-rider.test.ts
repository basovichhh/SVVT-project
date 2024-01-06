import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { Rider } from "../core/page-objects/become-a-rider";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let rider: Rider;

beforeAll(async () => {
    driver = await createDriver(testData.url.glovo);
    rider = new Rider(driver);
} , 10000);

test("Become a rider", async () => {
        
            await rider.clickCookies();
            await rider.clickRegisterHere();
            await rider.fillFirstName();
            await rider.fillEmail();
            await rider.fillNumber();
            await rider.clickBike();
            await rider.clickNastavi();
            await rider.fillPolje();
            await rider.clickFacebook();
            
        } , 60000);


afterAll(async () => {
    await quitDriver(driver);
} , 50000);
