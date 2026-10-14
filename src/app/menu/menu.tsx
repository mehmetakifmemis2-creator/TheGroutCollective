"use client";
import Link from "next/link";
import { useState } from "react";
import { categories, items, MenuItem } from "@/content/menu-data";
import "./menu.css";
function Photo({item}:{item:MenuItem}) {
 if(!item.photo) return null;
 const [file,x,y,w,h,sourceWidth=1415,sourceHeight=2000]=item.photo;
 const filename=typeof file === "number" ? `menu-${file}` : file;
 return <svg className="gm-photo" viewBox={`${x} ${y} ${w} ${h}`} role="img" aria-label={item.name}><image href={`./assets/${filename}.jpeg`} width={sourceWidth} height={sourceHeight} /></svg>;
}
export default function Menu(){
 const [category,setCategory]=useState("Tatlılar"); const [query,setQuery]=useState("");
 const normalize=(s:string)=>s.toLocaleLowerCase("tr-TR").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ı/g,"i");
 const shown=items.filter(i=>(query.trim()?normalize(i.name+" "+i.description).includes(normalize(query.trim())):i.group===category));
 return <div className="gm" id="menu-top"><a href="#menu-list" className="skip-link">Menüye geç</a>
 <header className="gm-header"><Link className="gm-logo" href="/">the grout.</Link><span>COFFEE · CAKE · COLLECTIVE</span><Link href="/">Ana sayfa ↗</Link></header>
 <main><section className="gm-hero"><div className="gm-intro"><p className="gm-kicker">THE GROUT / DİJİTAL MENÜ</p><h1>coffee &amp;<br/><em>choclate</em></h1><p className="gm-lede">Kahvenize eşlik eden tatlar,<br/>sofrada uzayan sohbetler.</p><a className="gm-explore" href="#menu-list">Menüyü keşfet <span>↓</span></a></div></section>
 <div className="gm-preview">ÖNİZLEME <span>Kahve ve içecek seçenekleri taslaktır. Fiyatları henüz belirlenmemiştir.</span></div>
 <section className="gm-menu" id="menu-list"><nav className="gm-tabs" aria-label="Menü kategorileri">{categories.map((c,n)=><button key={c} aria-pressed={category===c&&!query} onClick={()=>{setCategory(c);setQuery("");}}><small>0{n+1}</small>{c}</button>)}</nav>
 <div className="gm-toolbar"><div><p className="gm-kicker">SEÇ, KEŞFET, KEYFİNİ ÇIKAR</p><h2>{query?"Arama sonuçları":category}<sup>{shown.length.toString().padStart(2,"0")}</sup></h2></div><label className="gm-search"><span>Menüde ara</span><div><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Bir tat arayın…"/>{query&&<button aria-label="Aramayı temizle" onClick={()=>setQuery("")}>×</button>}<span aria-hidden="true">⌕</span></div></label></div>
 {!query&&category==="Tatlılar"&&<p className="gm-subtitle">%100 Belçika çikolatasıyla servis edilir.</p>}
 <div className="gm-grid" aria-live="polite">{shown.map((item,n)=><article key={item.name} className={item.photo?"gm-item":"gm-item gm-text-item"}>{item.photo&&<div className="gm-image"><Photo item={item}/></div>}<div className="gm-item-body"><p className="gm-item-label">{item.draft?"TASLAK SEÇENEK":item.group} <span>{String(n+1).padStart(2,"0")}</span></p><div className="gm-title-price"><h3>{item.name}</h3><span className="gm-price">{item.price!==null?`${item.price}₺`:item.literalPrice||"—"}</span></div><p className="gm-description">{item.description}</p>{item.draft&&<p className="gm-note">Fiyat henüz belirlenmedi</p>}{item.note&&<p className="gm-note">{item.note}</p>}</div></article>)}</div>
 {!shown.length&&<div className="gm-empty"><h3>Bu tat henüz menümüzde yok.</h3><p>Başka bir ürün adıyla yeniden arayabilirsiniz.</p><button onClick={()=>setQuery("")}>Menüye dön ↗</button></div>}
 </section></main><footer className="gm-footer"><div className="gm-logo">the grout.</div><p>Güzel şeyler, bir arada.</p><a href="#menu-top">Başa dön ↑</a><small>THE GROUT COLLECTIVE · MENÜ ÖNİZLEMESİ</small></footer></div>
}

