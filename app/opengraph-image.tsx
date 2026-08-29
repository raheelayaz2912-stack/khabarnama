import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "KHABARX — Pakistan News in English & Urdu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0E16",
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(216,169,61,0.12), transparent 40%), radial-gradient(circle at 80% 80%, rgba(196,33,46,0.14), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 20,
              backgroundColor: "#131A29",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #3A4560",
            }}
          >
            <div
              style={{
                width: 46,
                height: 56,
                backgroundColor: "#D8A93D",
                clipPath: "polygon(0 0, 75% 0, 100% 22%, 100% 100%, 0 100%)",
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, color: "#EDEAE1" }}>
            KHABARX
          </div>
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#9AA3B5", letterSpacing: 2 }}>
          NEWS · NOW · EVERYWHERE
        </div>
        <div style={{ marginTop: 18, fontSize: 26, color: "#D8A93D" }}>
          Pakistan News in English &amp; Urdu
        </div>
      </div>
    ),
    { ...size }
  );
}
