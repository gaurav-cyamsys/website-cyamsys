import React, { useEffect } from "react";

export default function ModelViewerWrapper({ src, title }) {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return (
    <model-viewer
      src={src}
      alt={`3D model of ${title}`}
      auto-rotate
      camera-controls
      ar
      shadow-intensity="1"
      exposure="0.8"
      style={{ width: "100%", height: "250px", backgroundColor: "#fff" }}
    >
      <div slot="poster" className="text-center text-gray-500">
        Loading 3D Model...
      </div>
    </model-viewer>
  );
}
