"use client";

import React, { useEffect } from "react";
import Image from "next/image";

export interface AwardItem {
  id: string;
  prizeTier: string;
  tierClass: "gold" | "silver" | "merit";
  title: string;
  organization: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  link?: string;
}

interface AwardCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  award: AwardItem | null;
}

export default function AwardCertificateModal({
  isOpen,
  onClose,
  award,
}: AwardCertificateModalProps) {
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

  if (!isOpen || !award) return null;

  return (
    <div
      className="award-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Certificate Image"
    >
      <div
        className="award-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="award-modal-close"
          onClick={onClose}
          aria-label="Close certificate"
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

        <div className="award-modal-body">
          <div className="award-modal-image-wrapper">
            <Image
              src={award.image}
              alt="Certificate"
              width={award.imageWidth}
              height={award.imageHeight}
              className="award-modal-image"
              priority
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "75vh",
                objectFit: "contain",
              }}
            />
          </div>

          {award.link && (
            <div className="award-modal-link-row">
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="award-modal-link"
              >
                <span>{award.link}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
