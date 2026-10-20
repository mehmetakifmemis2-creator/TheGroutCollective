"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { collections } from "@/content/collections";
import { ui } from "@/content/shared";
import { imageIsPlaceholder, type ImageName } from "@/content/images";
import { Photograph } from "@/components/shared/photograph";
export function Collections() {
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const item = collections.items[selected];
  return (
    <>
      <div className="collection-grid">
        {collections.items.map((product, i) => (
          <button
            className="collection-item group"
            key={product.name}
            onClick={() => {
              setSelected(i);
              dialog.current?.showModal();
            }}
            aria-label={`${product.name} — ${ui.selection}`}
          >
            <div className="collection-image">
              <Photograph name={product.image as ImageName} alt={product.alt} />
              {imageIsPlaceholder(product.image as ImageName) && (
                <span className="image-badge">{ui.imageLabel}</span>
              )}
              <span className="round-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
            <div className="product-title">
              <h3>{product.name}</h3>
              <span>0{i + 1}</span>
            </div>
            <p className="eyebrow">{product.type}</p>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="concept-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="dialog-close"
          onClick={() => dialog.current?.close()}
          aria-label={ui.closeDetail}
        >
          ×
        </button>
        <div className="dialog-image">
          <Photograph name={item.image as ImageName} alt={item.alt} />
        </div>
        <div className="dialog-copy">
          <p className="eyebrow">{ui.concept}</p>
          <h2>{item.name}</h2>
          <p>{item.detail}</p>
          <p className="muted">{collections.note}</p>
          <Link
            className="text-link"
            href="/#iletisim"
            onClick={() => dialog.current?.close()}
          >
            {ui.inquiry} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </dialog>
    </>
  );
}
