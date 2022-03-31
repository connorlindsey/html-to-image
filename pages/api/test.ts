import { NextApiRequest, NextApiResponse } from "next"
import puppeteer from "puppeteer-core"
import chrome from "chrome-aws-lambda"

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { html } = req.body

      const options =
        process.env.NODE_ENV === "production"
          ? {
              args: chrome.args,
              executablePath: await chrome.executablePath,
              headless: chrome.headless,
            }
          : {
              args: [],
              // Update this to whatever version of Chrome you have installed locally
              executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
              headless: true,
            }

      const browser = await puppeteer.launch(options)
      const page = await browser.newPage()
      await page.setContent(html, { waitUntil: "networkidle0" })
      const buffer = await page.screenshot({
        type: "png",
        path: "sample.png",
        fullPage: true,
      })
      await browser.close()

      return res.status(200).send({ status: "Success", img: buffer })
    } catch (error) {
      console.error(error)
      return res.status(500).send({ message: (error as Error).message })
    }
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}

export default handler
