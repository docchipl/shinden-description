import puppeteer from "puppeteer";

async function secondRequest(request){
    try {
        const browser = await puppeteer.launch();
        const [page] = await browser.pages();

        await page.goto(`https://shinden.pl/series/${request}`, { waitUntil: 'networkidle0' });
        const description = await page.evaluate(() => document.body.querySelector(".info-top #description p").textContent);

        // fs.writeFile('helloworld.html', description, function (err) {
        //     if (err) return console.log(err);
        //     console.log('Hello World > helloworld.txt');
        // });

        await browser.close();

        return ({
            status: 200, 
            message: "Success",
            data: description
        })

    } catch (err) {
        console.error("Getting Description: \N", err);
        return ({
            status: 500,
            message: "Something went wrong!"
        })
    }
}

export default secondRequest;