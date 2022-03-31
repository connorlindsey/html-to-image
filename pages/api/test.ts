import { NextApiRequest, NextApiResponse } from "next"
import puppeteer from "puppeteer-core"
import chrome from "chrome-aws-lambda"

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const html = req.body?.html || defaultHtml

      const options =
        process.env.NODE_ENV === "production"
          ? {
              args: chrome.args,
              executablePath: await chrome.executablePath,
              headless: chrome.headless,
            }
          : {
              args: [],
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

const defaultHtml = `
<div id=":1ml" class="a3s aiL msg6679356123834654490">
  <u></u>

  <div
    style="
      font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
      font-weight: 400;
      color: #474747;
      margin: 0;
      padding: 0;
    "
  >
    <span
      style="
        font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
        font-weight: 400;
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        width: 0;
        margin: 0;
        padding: 0;
      "
      >Fill out this short survey to help us with our product roadmap</span
    >

    <span
      style="
        font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
        font-weight: 400;
        color: #474747;
        display: none;
        max-height: 0px;
        overflow: hidden;
        margin: 0;
        padding: 0;
      "
      >͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌<wbr />&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌<wbr />&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌<wbr />&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌<wbr />&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌<wbr />&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌<wbr />&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌<wbr />&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌<wbr />&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌<wbr />&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌<wbr />&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌<wbr />&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌<wbr />&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌<wbr />&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌<wbr />&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌&nbsp;͏‌<wbr />&nbsp;</span
    >

    <table
      style="
        font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
        font-weight: 400;
        color: #474747;
        width: 100%;
        margin: 0;
        padding: 0;
      "
    >
      <tbody>
        <tr
          style="
            font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
            font-weight: 400;
            color: #474747;
            margin: 0;
            padding: 0;
          "
        >
          <td
            style="
              font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
              font-weight: 400;
              color: #474747;
              margin: 0;
              padding: 0;
            "
          ></td>

          <td
            bgcolor="#FFFFFF"
            style="
              font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
              font-weight: 400;
              color: #474747;
              display: block !important;
              max-width: 570px !important;
              clear: both !important;
              margin: 0 auto;
              padding: 0;
            "
          >
            <div
              style="
                font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                font-weight: 400;
                color: #474747;
                max-width: 570px;
                display: block;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <table
                style="
                  font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                  font-weight: 400;
                  color: #474747;
                  width: 100%;
                  margin: 0;
                  padding: 0;
                "
              >
                <tbody>
                  <tr
                    style="
                      font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                      font-weight: 400;
                      color: #474747;
                      margin: 0;
                      padding: 0;
                    "
                  >
                    <td
                      style="
                        font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                        font-weight: 400;
                        color: #474747;
                        margin: 0;
                        padding: 0;
                      "
                    >
                      <p
                        style="
                          font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                          font-weight: 400;
                          color: #474747;
                          font-size: 16px;
                          line-height: 1.5;
                          margin: 20px 0 16px;
                          padding: 0;
                        "
                      >
                        Hey friend!
                      </p>

                      <p
                        style="
                          font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                          font-weight: 400;
                          color: #474747;
                          font-size: 16px;
                          line-height: 1.5;
                          margin: 0 0 16px;
                          padding: 0;
                        "
                      >
                        Just one last reminder that
                        <strong
                          style="
                            font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                            font-weight: bold;
                            color: #474747;
                            margin: 0;
                            padding: 0;
                          "
                          >we'd love to hear from you</strong
                        >
                        on a few things we're working through at SwipeWell.
                      </p>

                      <p
                        style="
                          font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                          font-weight: 400;
                          color: #474747;
                          font-size: 16px;
                          line-height: 1.5;
                          margin: 0 0 16px;
                          padding: 0;
                        "
                      >
                        So when you have 2 minutes to spare, please fill out this short survey.
                      </p>

                      <p
                        style="
                          font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                          font-weight: 400;
                          color: #474747;
                          font-size: 16px;
                          line-height: 1.5;
                          margin: 0 0 16px;
                          padding: 0;
                        "
                      >
                        <a
                          href="https://track.userlistmail.com/c/f9a73ef3a3cbcbbf17a532ec8a2f16f50febe53697b6ffcbd169469c9f556a077188445bf5bf93d33794b95ee56f41e80737bf17151a8d5f2d7a92358fc1943474ed3080c9197a1ebf04f1dc027c01b0f0e96f5f9bfc700ee8e18c5a8326b5a185d7a590ca9d6d94d150a3db3bd754d2eddad43b9da0a12748a47083990f1b1f"
                          style="
                            font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                            font-weight: 400;
                            color: #3793ff;
                            text-decoration: underline;
                            margin: 0;
                            padding: 0;
                          "
                          target="_blank"
                          data-saferedirecturl="https://www.google.com/url?q=https://track.userlistmail.com/c/f9a73ef3a3cbcbbf17a532ec8a2f16f50febe53697b6ffcbd169469c9f556a077188445bf5bf93d33794b95ee56f41e80737bf17151a8d5f2d7a92358fc1943474ed3080c9197a1ebf04f1dc027c01b0f0e96f5f9bfc700ee8e18c5a8326b5a185d7a590ca9d6d94d150a3db3bd754d2eddad43b9da0a12748a47083990f1b1f&amp;source=gmail&amp;ust=1648837002878000&amp;usg=AOvVaw07MNqAgY0SQ3lkptlODuwY"
                          >Click here to answer a couple questions →</a
                        >
                      </p>

                      <p
                        style="
                          font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                          font-weight: 400;
                          color: #474747;
                          font-size: 16px;
                          line-height: 1.5;
                          margin: 0 0 16px;
                          padding: 0;
                        "
                      >
                        And we're this close
                        <img
                          data-emoji="👌"
                          class="an1"
                          alt="👌"
                          aria-label="👌"
                          src="https://fonts.gstatic.com/s/e/notoemoji/14.0/1f44c/32.png"
                          loading="lazy"
                        />
                        to sending out the first beta invites.
                      </p>

                      <p
                        style="
                          font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                          font-weight: 400;
                          color: #474747;
                          font-size: 16px;
                          line-height: 1.5;
                          margin: 0 0 16px;
                          padding: 0;
                        "
                      >
                        The first invites are going out next week!
                      </p>

                      <p
                        style="
                          font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                          font-weight: 400;
                          color: #474747;
                          font-size: 16px;
                          line-height: 1.5;
                          margin: 0 0 16px;
                          padding: 0;
                        "
                      >
                        <a
                          href="https://track.userlistmail.com/c/f9a73ef3a3cbcbbf17a532ec8a2f16f50febe53697b6ffcbd169469c9f556a077188445bf5bf93d33794b95ee56f41e80737bf17151a8d5f2d7a92358fc194340b5e0f644ee3c90086684729d8c84209298c74765505cf16dc0813fd3d8457d6cc94f472a7502c8c16bad974b9a9ee06d54a62152894232b70da2df3db27d7f0"
                          style="
                            font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                            font-weight: 400;
                            color: #3793ff;
                            text-decoration: underline;
                            margin: 0;
                            padding: 0;
                          "
                          target="_blank"
                          data-saferedirecturl="https://www.google.com/url?q=https://track.userlistmail.com/c/f9a73ef3a3cbcbbf17a532ec8a2f16f50febe53697b6ffcbd169469c9f556a077188445bf5bf93d33794b95ee56f41e80737bf17151a8d5f2d7a92358fc194340b5e0f644ee3c90086684729d8c84209298c74765505cf16dc0813fd3d8457d6cc94f472a7502c8c16bad974b9a9ee06d54a62152894232b70da2df3db27d7f0&amp;source=gmail&amp;ust=1648837002878000&amp;usg=AOvVaw3uH7UKrrkXWvTJT8fRIgsH"
                          >Check your waitlist position and share to move up →</a
                        >
                      </p>

                      <p
                        style="
                          font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                          font-weight: 400;
                          color: #474747;
                          font-size: 16px;
                          line-height: 1.5;
                          margin: 0 0 0px;
                          padding: 0;
                        "
                      >
                        Cheers,<br
                          style="
                            font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                            font-weight: 400;
                            color: #474747;
                            margin: 0;
                            padding: 0;
                          "
                        />

                        Corey &amp; Connor
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>

          <td
            style="
              font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
              font-weight: 400;
              color: #474747;
              margin: 0;
              padding: 0;
            "
          ></td>
        </tr>
      </tbody>
    </table>

    <table
      style="
        font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
        font-weight: 400;
        color: #474747;
        width: 100%;
        clear: both !important;
        margin: 0;
        padding: 0;
      "
    >
      <tbody>
        <tr
          style="
            font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
            font-weight: 400;
            color: #474747;
            margin: 0;
            padding: 0;
          "
        >
          <td
            style="
              font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
              font-weight: 400;
              color: #474747;
              margin: 0;
              padding: 0;
            "
          ></td>

          <td
            style="
              font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
              font-weight: 400;
              color: #474747;
              display: block !important;
              max-width: 570px !important;
              clear: both !important;
              margin: 0 auto;
              padding: 0;
            "
          >
            <div
              style="
                font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                font-weight: 400;
                color: #474747;
                max-width: 570px;
                display: block;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <table
                style="
                  font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                  font-weight: 400;
                  color: #474747;
                  width: 100%;
                  margin: 0;
                  padding: 0;
                "
              >
                <tbody>
                  <tr
                    style="
                      font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                      font-weight: 400;
                      color: #474747;
                      margin: 0;
                      padding: 0;
                    "
                  >
                    <td
                      style="
                        font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                        font-weight: 400;
                        color: #474747;
                        border-top-width: 2px;
                        border-top-color: #e9e9e9;
                        border-top-style: solid;
                        margin: 0;
                        padding: 25px 0 50px;
                      "
                    >
                      <p
                        style="
                          font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                          font-weight: 400;
                          color: #979797;
                          font-size: 14px;
                          line-height: 1.5;
                          margin: 0 0 12px;
                          padding: 0;
                        "
                      >
                        You're receiving this message as a user of
                        <a
                          href="https://track.userlistmail.com/c/f9a73ef3a3cbcbbf17a532ec8a2f16f50febe53697b6ffcbd169469c9f556a077188445bf5bf93d33794b95ee56f41e80737bf17151a8d5f2d7a92358fc194340b5e0f644ee3c90086684729d8c84209b724bbb4cdbe17278b346aafdcf2c773"
                          style="
                            font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                            font-weight: 400;
                            color: #979797;
                            text-decoration: underline;
                            margin: 0;
                            padding: 0;
                          "
                          target="_blank"
                          data-saferedirecturl="https://www.google.com/url?q=https://track.userlistmail.com/c/f9a73ef3a3cbcbbf17a532ec8a2f16f50febe53697b6ffcbd169469c9f556a077188445bf5bf93d33794b95ee56f41e80737bf17151a8d5f2d7a92358fc194340b5e0f644ee3c90086684729d8c84209b724bbb4cdbe17278b346aafdcf2c773&amp;source=gmail&amp;ust=1648837002878000&amp;usg=AOvVaw05MUg-YyFQ9a2qagIZK8mz"
                          >SwipeWell</a
                        >. If you prefer to not receive these messages anymore, feel free to
                        <a
                          href="https://track.userlistmail.com/c/f9a73ef3a3cbcbbf17a532ec8a2f16f50febe53697b6ffcbd169469c9f556a077188445bf5bf93d33794b95ee56f41e80737bf17151a8d5f2d7a92358fc19434ad16bcd5adaf846e7c9f5cf5dfb90d9af9ebbf1569943f500dfb199ca18acd1491422e1e6e0b99224fde85bd575040e02081ab6486ac6b315e067f183db7652d7f12962acf2d3dc87a326b3b41d144131ab0e5274aed96d3fe8036c0fb687344797577874b3368326007b9579ae8bd84ca25ad7944f576c1ffc17ce63e8c5630492bea4f4a55684d639553cd484b8f3eda33379bd2341ce7e4d3f60c8541a73e"
                          style="
                            font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                            font-weight: 400;
                            color: #979797;
                            text-decoration: underline;
                            margin: 0;
                            padding: 0;
                          "
                          target="_blank"
                          data-saferedirecturl="https://www.google.com/url?q=https://track.userlistmail.com/c/f9a73ef3a3cbcbbf17a532ec8a2f16f50febe53697b6ffcbd169469c9f556a077188445bf5bf93d33794b95ee56f41e80737bf17151a8d5f2d7a92358fc19434ad16bcd5adaf846e7c9f5cf5dfb90d9af9ebbf1569943f500dfb199ca18acd1491422e1e6e0b99224fde85bd575040e02081ab6486ac6b315e067f183db7652d7f12962acf2d3dc87a326b3b41d144131ab0e5274aed96d3fe8036c0fb687344797577874b3368326007b9579ae8bd84ca25ad7944f576c1ffc17ce63e8c5630492bea4f4a55684d639553cd484b8f3eda33379bd2341ce7e4d3f60c8541a73e&amp;source=gmail&amp;ust=1648837002878000&amp;usg=AOvVaw3mwGFCUkQe7K5daBqPCvmM"
                          >unsubscribe</a
                        >. Our postal address is Ste 1200, 1309 Coffeen Avenue, Sheridan, WY,
                        Sheridan, US, 82801. Sent with
                        <a
                          href="https://track.userlistmail.com/c/f9a73ef3a3cbcbbf17a532ec8a2f16f50febe53697b6ffcbd169469c9f556a077188445bf5bf93d33794b95ee56f41e80737bf17151a8d5f2d7a92358fc19434be4b8b5665e7834349dd9109310b608cafd0fb539d7cdee698237a044bbe70a0d245b869b7337f9b9c1379998da036ad5235e9d5b76bd42391a0c101ed64a3ae2483a07547bd9c9325b9a5137d5bd6644d62f89822802f757535c2e5112a2b07"
                          style="
                            font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
                            font-weight: 400;
                            color: #979797;
                            text-decoration: underline;
                            margin: 0;
                            padding: 0;
                          "
                          target="_blank"
                          data-saferedirecturl="https://www.google.com/url?q=https://track.userlistmail.com/c/f9a73ef3a3cbcbbf17a532ec8a2f16f50febe53697b6ffcbd169469c9f556a077188445bf5bf93d33794b95ee56f41e80737bf17151a8d5f2d7a92358fc19434be4b8b5665e7834349dd9109310b608cafd0fb539d7cdee698237a044bbe70a0d245b869b7337f9b9c1379998da036ad5235e9d5b76bd42391a0c101ed64a3ae2483a07547bd9c9325b9a5137d5bd6644d62f89822802f757535c2e5112a2b07&amp;source=gmail&amp;ust=1648837002878000&amp;usg=AOvVaw3KBwQaEwqeSME6y5GqiK-f"
                          >Userlist</a
                        >
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>

          <td
            style="
              font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
              font-weight: 400;
              color: #474747;
              margin: 0;
              padding: 0;
            "
          ></td>
        </tr>
      </tbody>
    </table>
  </div>

  <img
    src="https://ci4.googleusercontent.com/proxy/hGWTlxVCoam9O7y60OKcpxmbpIU_2FdCI9xW4ZNcrjb-XTbV_10gmPi_kkY6bGz5hK6GD6yljIvakJYuS2RthcdDuXWCN0Pt6zr7iVFEuOJ2GUi326Try95rFcNpgVAkyjf2g0GjG5oM22ANCLP1qG3Hwz61j4gmrt7wVIhKVxmx2Tk3383-jizZiSdjZ1aoroC1Wau3c7BJAIj11NuaZJ5kpbzSXTjtapiVlzfHFUdkdyxqbQ=s0-d-e1-ft#https://track.userlistmail.com/o/f9a73ef3a3cbcbbf17a532ec8a2f16f50febe53697b6ffcbd169469c9f556a077188445bf5bf93d33794b95ee56f41e81ee3b4122422f8e3a62db5a323bceac8"
    style="
      font-family: Roboto, 'San Francisco', Helvetica, Arial, sans-serif;
      font-weight: 400;
      color: #474747;
      max-width: 100%;
      height: auto;
      margin: 0;
      padding: 0;
    "
    class="CToWUd"
  />
  <div class="yj6qo"></div>
  <div class="adL"></div>
</div>

`
