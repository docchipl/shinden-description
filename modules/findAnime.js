import puppeteer from "puppeteer";
import {getDescription} from "../functions/index.js";


async function findAnime (anime){
    try {
        const browser = await puppeteer.launch();
        const [page] = await browser.pages();

        await page.goto(`https://shinden.pl/series?search=${anime}`, { waitUntil: 'networkidle0' });
        const json_items = await page.evaluate(() => { 
            const item = document.body.querySelector(".title-table article ul li.desc-col h3 a");
            return {
                anime: item.textContent,
                slug: item.href.split("/")[4]
            }
        });
        const description = await getDescription(json_items.slug);

        await browser.close();

        return ({
            status: 200, 
            message: "Success",
            shinden: {
                data: json_items,
                description: description.data
            }
        })

    } catch (err) {
        console.error("Getting Slug: \N", err);
        return ({
            status: 500,
            message: "Something went wrong!"
        })
    }
}
export default findAnime;