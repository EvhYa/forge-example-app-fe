import { useEffect } from "react";
import { initViewer } from "../../viewer";

export function Viewer() {
   useEffect(() => {
      initViewer(document.getElementById("viewerId"));
   }, []);
   return <div style={{ position: "absolute", width: "100%", height: "85%" }} id="viewerId"></div>;
}
