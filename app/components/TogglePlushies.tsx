"use client";

import { useState } from "react";
import PlushieGrid from "./PlushieGrid";

export default function TogglePlushies() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTON (on pink background) */}
      <div className="dropdown-button">
        <button
          className="heart-button"
          onClick={() => setOpen(!open)}
        >
          {open ? "❤︎ Hide plushies" : "❤︎ Show plushies"}
        </button>
      </div>

      {/* DROPDOWN PANEL */}
      <div className={`dropdown-panel ${open ? "open" : ""}`}>
        <div className="section">
          <PlushieGrid />
        </div>
      </div>
    </>
  );
}
