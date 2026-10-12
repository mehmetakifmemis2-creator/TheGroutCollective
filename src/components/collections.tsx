"use client";
import { useRef, useState } from "react";
import { tr } from "@/content/tr";
import { Photograph } from "./photograph";
export function Collections() {
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const item = tr.collections.items[selected];
  return <><div className="collection-grid">{tr.collections.items.map((product, i) => <button className="collection-item group" key={product.name} onClick={() => { setSelected(i); dialog.current?.showModal(); }} aria-label={`${product.name} — ${tr.ui.selection}`}><div className="collection-image"><Photograph name={product.image} alt={product.alt} /><span className="image-badge">{tr.ui.imageLabel}</span><span className="round-arrow" aria-hidden="true">↗</span></div><div className="product-title"><h3>{product.name}</h3><span>0{i + 1}</span></div><p className="eyebrow">{product.type}</p></button>)}</div><dialog ref={dialog} className="concept-dialog" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}><button className="dialog-close" onClick={() => dialog.current?.close()} aria-label={tr.ui.closeDetail}>×</button><div className="dialog-image"><Photograph name={item.image} alt={item.alt} /></div><div className="dialog-copy"><p className="eyebrow">{tr.ui.concept}</p><h2>{item.name}</h2><p>{item.detail}</p><p className="muted">{tr.collections.note}</p><a className="text-link" href="#iletisim" onClick={() => dialog.current?.close()}>{tr.ui.inquiry} <span aria-hidden="true">↗</span></a></div></dialog></>;
}
