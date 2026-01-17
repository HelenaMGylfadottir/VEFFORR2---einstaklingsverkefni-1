"use client";

import { useState } from "react";
import PlushieGrid from "./PlushieGrid";

export default function TogglePlushies() {
  const [open, setOpen] = useState(false);

  return (
    <section className="dropdown-section">
      <div className="dropdown-button">
        <button
          className="dropdown-toggle"
          onClick={() => setOpen(!open)}
        >
          <div className="dropdown-toggle-inner">
            <span className="heart">❤︎</span>
            <span className="label">
              {open ? "Hide plushies" : "Show plushies"}
            </span>
          </div>
        </button>
      </div>

      <div className={`dropdown-panel ${open ? "open" : ""}`}>
        <div className="dropdown-content">
          <PlushieGrid />
        </div>
      </div>
    </section>
  );
}
