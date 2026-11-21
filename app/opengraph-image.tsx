import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site, siteUrl } from "@/lib/site";

// Social share image (Facebook, LinkedIn, WhatsApp, X, …) for every page.
// Generated at build time. Preview it at /opengraph-image.
export const alt = `${site.name} (${site.shortName})`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/assets/logoNoBg.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const host = new URL(siteUrl).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
        }}
      >
        {/* Ghana flag stripe */}
        <div style={{ display: "flex", height: 18 }}>
          <div style={{ flex: 1, background: "#dc2626" }} />
          <div style={{ flex: 1, background: "#facc15" }} />
          <div style={{ flex: 1, background: "#16a34a" }} />
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          <img src={logoSrc} alt="" width={438} height={180} />
          <div
            style={{
              marginTop: 36,
              fontSize: 60,
              fontWeight: 700,
              color: "#1f2937",
              lineHeight: 1.1,
            }}
          >
            {site.name}
          </div>
          <div style={{ marginTop: 18, fontSize: 30, color: "#4b5563" }}>
            Community · Culture · Events · Support
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#15803d",
            color: "#ffffff",
            padding: "22px 80px",
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex" }}>Akwaaba · Woezɔ · Obaake — Welcome</div>
          <div style={{ display: "flex", fontWeight: 700 }}>{host}</div>
        </div>
      </div>
    ),
    size
  );
}
