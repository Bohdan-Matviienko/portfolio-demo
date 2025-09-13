import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// (не обов'язково) можна рендерити на Edge
export const runtime = "edge";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #f1f5f9 100%)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#0f172a",
            textAlign: "center",
            padding: "40px 60px",
            borderRadius: 24,
            boxShadow: "0 10px 30px rgba(0,0,0,.08)",
            background: "rgba(255,255,255,.85)",
          }}
        >
          Universal Demo Site
          <div style={{ fontSize: 28, fontWeight: 500, marginTop: 12 }}>
            Лендінги · Блоги · Каталоги
          </div>
        </div>
      </div>
    ),
    size
  );
}
