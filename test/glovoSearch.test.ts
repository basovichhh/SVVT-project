
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { GlovoSearch } from "../core/page-objects/glovo-search";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let glovoSearch: GlovoSearch;

beforeAll(async () => {
    driver = await createDriver(testData.url.glovo);
    glovoSearch = new GlovoSearch(driver);
}, 50000);

test("glovo search", async () => {
    await glovoSearch.closeCookies();
    await glovoSearch.clickAddress();
    await glovoSearch.enterAddress();
    await glovoSearch.clickRecommendation();
    await glovoSearch.searchItem();
    await glovoSearch.clickItem();
    //await glovoSearch.ItemtitleCheck();
}, 50000);

afterAll(async () => {
    await quitDriver(driver);
}, 50000);