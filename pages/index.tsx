import Head from "next/head"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [status, setStatus] = useState("default")
  const [html, setHtml] = useState("")
  const [img, setImg] = useState<any>()

  const fetchImg = async () => {
    if (status === "loading") return
    setStatus("loading")

    const res = await fetch("/api/test", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json", Accept: "application/json" }),
      body: JSON.stringify({
        html,
      }),
    })
    const json = await res.json()
    setImg(json.img)

    setStatus("default")
  }

  return (
    <div>
      <Head>
        <title>Next Starter</title>
        <meta name="description" content="Nextjs starter by Connor Lindsey" />
      </Head>

      <main className="p-8 flex flex-col items-center">
        <h1 className="text-primary-600 text-3xl mb-3">HTML to Image</h1>
        <div className="max-w-4xl mx-auto">
          <textarea
            value={html}
            onInput={(e) => setHtml(e.currentTarget.value)}
            name="html"
            id="html"
            rows={10}
            className="input w-[800px]"></textarea>
          <div className="mt-3 flex items-center gap-3">
            <button disabled={status === "loading"} className="btn" onClick={fetchImg}>
              {status === "loading" ? "Loading..." : "Fetch HTML"}
            </button>
            <button
              disabled={status === "loading"}
              className="btn btn-outline"
              onClick={() => setImg(undefined)}>
              Reset
            </button>
          </div>
          {img ? (
            <img
              className="mt-3 h-full w-auto"
              src={`data:image/png;base64,${Buffer.from(img.data).toString("base64")}`}
              alt=""
            />
          ) : (
            <div className="mt-3 text-gray-600">No image</div>
          )}
        </div>
      </main>
    </div>
  )
}
