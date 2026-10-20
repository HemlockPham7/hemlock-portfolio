"use client";

import React, { useEffect } from "react";

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function ExperienceModal({
  isOpen,
  onClose,
  children,
}: ExperienceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="exp-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="exp-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="exp-modal-close"
          onClick={onClose}
          aria-label="Close details"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="exp-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}
