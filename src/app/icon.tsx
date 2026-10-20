import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 15,
          background: "#17191D",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#71D9BB",
          borderRadius: 7,
          border: "1px solid #363941",
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        AA
      </div>
    ),
    {
      ...size,
    }
  );
}
