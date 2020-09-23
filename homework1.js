import puppeteer from "puppeteer";
import dotenv from 'dotenv';

dotenv.config();

const songRandomizer = () => {
    return(Math.floor(Math.random() * 30) + 1);
}

const responses = ["something from my discover weekly","been listening to this lately","this ones not bad",
"thought this was pretty cool","","presented without comment","new tunes for a new day"];

const randomResponse = responses[Math.floor(Math.random() * responses.length)];

const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100
})

const context = await browser.createIncognitoBrowserContext();
const page = await context.newPage();

await page.goto('https://www.spotify.com/us');

await page.click("body > div.wrap > div > header > div > div.mh-mobile-menu.svelte-4ldyho > button");
await page.click("body > div.wrap > div > header > div > div.mh-mobile-menu.svelte-4ldyho > nav > ul > li:nth-child(6) > a")

await page.waitFor(1000);

await page.keyboard.type(process.env.SPOTIFY_USERNAME, {delay: 10});

await page.click("#login-password");

await page.keyboard.type(process.env.SPOTIFY_PASSWORD, {delay: 50});

await page.click("#login-button");

await page.waitForSelector("#__next > div:nth-child(4) > div > div:nth-child(1) > header > div > div.mh-brand-wrapper.svelte-14yhn32 > a");

await page.click("#__next > div:nth-child(4) > div > div:nth-child(1) > header > div > div.mh-brand-wrapper.svelte-14yhn32 > a")

await page.click("#seg-hp-open-player");

await page.waitForSelector("#main > div > div.Root__top-container > div.Root__nav-bar > nav > div.Rootlist > div > div > div.os-host.os-host-foreign.os-theme-spotify.os-host-resize-disabled.os-host-scrollbar-horizontal-hidden.Rootlist__playlists-scroll-node.os-host-overflow.os-host-overflow-y.os-host-transition > div.os-padding > div > div > ul > div:nth-child(4) > li > div > div > div > a");

await page.click("#main > div > div.Root__top-container > div.Root__nav-bar > nav > div.Rootlist > div > div > div.os-host.os-host-foreign.os-theme-spotify.os-host-resize-disabled.os-host-scrollbar-horizontal-hidden.Rootlist__playlists-scroll-node.os-host-overflow.os-host-overflow-y.os-host-transition > div.os-padding > div > div > ul > div:nth-child(4) > li > div > div > div > a");

await page.waitForSelector("#main > div > div.Root__top-container > div.Root__main-view > div.main-view-container > div > div.os-padding > div > div > div.main-view-container__scroll-node-child > section > div:nth-child(4) > div > div.c27f49a483c85a5b88b3f37fb918e497-scss > div:nth-child(2)");

const element = `#main > div > div.Root__top-container > div.Root__main-view > div.main-view-container > div > div.os-padding > div > div > div.main-view-container__scroll-node-child > section > div:nth-child(4) > div > div.c27f49a483c85a5b88b3f37fb918e497-scss > div:nth-child(2) > div:nth-child(${songRandomizer()})`;

await page.waitForSelector(element);

const elementMenu = element+` > div > div > div.b9f411c6b990949776c8edf3daeb26ad-scss > div.react-contextmenu-wrapper`;

await page.hover(elementMenu);

await page.click(elementMenu,{button: "right"});

await page.click("#main > div > nav.react-contextmenu.react-contextmenu--visible > div:nth-child(6)");

await page.goto('https://www.messenger.com/');

await page.click("#email");

await page.keyboard.type(process.env.FB_EMAIL, {delay: 10});

await page.click("#pass");

await page.keyboard.type(process.env.FB_PW, {delay: 50});

await page.click("#loginbutton");

await page.waitForSelector("#u_0_0 > div > div > div._1enh._7q1s > div._6-xk > a._30yy._6-xp._6-xq");

await page.click("#u_0_0 > div > div > div._1enh._7q1s > div._6-xk > a._30yy._6-xp._6-xq");

await page.keyboard.type("the only living boys", {delay: 20});

await page.waitForSelector("#js_18 > div > div > div > div > div:nth-child(1) > ul > li > a");

await page.click("#js_18 > div > div > div > div > div:nth-child(1) > ul > li > a");

await page.keyboard.down('Control');
await page.keyboard.press('V');
await page.keyboard.up('Control');

await page.keyboard.down('Shift');
await page.keyboard.press('Enter');
await page.keyboard.press('Enter');
await page.keyboard.up('Shift');

await page.keyboard.type(randomResponse);

await page.keyboard.press('Enter');
