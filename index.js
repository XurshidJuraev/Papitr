const express = require('express')
const puppeteer = require('puppeteer')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 9000

app.use(express.json())
app.use(cors({ origin: '*' }));


app.get('/', (_, res)=>{
    async function start() {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto("https://www.olx.uz/d/obyavlenie/almazar-kora-kamish-2-4-1-2-4-sredniy-remont-ID38CIW.html?reason=ip%7Ccf", {timeout: 0})
    
        await page.waitForSelector('#root > div.css-50cyfj > div.css-1qw98an > div:nth-child(3) > div.css-6u8zs6 > div:nth-child(1) > div:nth-child(3) > div > button.css-1hrtz3t')
    
        click_bottom=await page.click('#root > div.css-50cyfj > div.css-1qw98an > div:nth-child(3) > div.css-6u8zs6 > div:nth-child(1) > div:nth-child(3) > div > button.css-1hrtz3t')
        console.log(click_bottom);
        
    
        await page.waitForTimeout(3000)
        const  text_top= await page.$eval('#root > div.css-50cyfj > div.css-1qw98an > div:nth-child(3) > div.css-6u8zs6 > div:nth-child(1) > div:nth-child(3) > div > button.css-1hrtz3t > span > a',  (el)=>el.innerText)
        const  text_bottom= await page.$eval('#root > div.css-50cyfj > div.css-1qw98an > div:nth-child(3) > div.css-n9feq4 > section > div > div > div.css-1epmoz1 > div.css-1saqqt7 > div > div > a',  (el)=>el.innerText)
    
    
        console.log(text_top);
        await browser.close()

        // const data = JSON.stringify(text_top)
        // res.send(JSON.parse(data));
        res.send(text_top)
    }
    
    start()
})


app.listen(PORT, console.log(`Siz shu (${PORT}) portdasiz`))