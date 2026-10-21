const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "menu.html"), "utf8");
const order = ["tatlilar", "yemekler", "sicak-kahveler", "soguk-kahveler", "icecekler"];
const sections = [...html.matchAll(/<section\b([^>]*data-menu-section="([^"]+)"[^>]*)>/g)];
assert.deepEqual(sections.map(match => match[2]), order, "Menu category order has regressed");
assert(!/data-menu-button|gm-tabs/.test(html), "Category buttons must not return");
assert.equal((html.match(/id="urunler"/g) || []).length, 1, "Menu anchor must exist exactly once");
sections.forEach(([tag, , key], index) => {
  assert(!/\bhidden\b/.test(tag), key + " must be visible without JavaScript");
  assert(tag.includes(index < 2 ? "gm-food" : "gm-drinks"), key + " is missing its layout class");
});

// Validate nesting and ensure each category stays inside the menu container.
const stack = [];
const voidTags = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
const markup = html.replace(/<!--[\s\S]*?-->/g, "");
for (const [tag, closing, name] of markup.matchAll(/<(\/?)([a-z][a-z0-9]*)\b[^>]*>/gi)) {
  if (closing) {
    assert.equal(stack.pop()?.name, name, "Mismatched closing tag: " + tag);
  } else if (!voidTags.has(name)) {
    if (tag.includes("data-menu-section")) {
      assert(stack.some(entry => entry.tag.includes('id="urunler"')), "Category escaped menu container");
    }
    stack.push({ name, tag });
  }
}
assert.equal(stack.length, 0, "Unclosed HTML elements");
for (const [, src] of html.matchAll(/(?:src|href)="(assets\/[^"?]+)(?:\?[^"]*)?"/g)) {
  assert(fs.existsSync(path.join(root, src)), "Missing asset: " + src);
}
for (const filename of ["tiramisu.jpg", "napolyon.jpg"]) {
  assert(html.includes("assets/images/menu/" + filename), "Missing dessert photo: " + filename);
}

// Exercise filtering and clearing with the actual product text from the page.
const categories = [...html.matchAll(/<section[^>]*data-menu-section="[^"]+"[^>]*>([\s\S]*?)<\/section>/g)].map(([, content]) => ({
  items: [...content.matchAll(/<article\b[\s\S]*?<\/article>/g)].map(([article]) => ({ textContent: article.replace(/<[^>]*>/g, " "), hidden: false })),
  querySelectorAll() { return this.items; },
}));
let onInput;
const input = { value: "", addEventListener(event, callback) { onInput = callback; } };
vm.runInNewContext(fs.readFileSync(path.join(root, "assets/js/menu.js"), "utf8"), {
  document: { querySelectorAll: () => categories, querySelector: () => input },
});
input.value = "brownie";
onInput();
assert(categories[0].items.some(item => !item.hidden), "Dessert search failed");
assert(categories.slice(1).every(section => section.hidden), "Unmatched categories stayed visible");
input.value = "no-such-product-123";
onInput();
assert(categories.every(section => section.hidden), "No-match search failed");
input.value = "";
onInput();
assert(categories.every(section => !section.hidden && section.items.every(item => !item.hidden)), "Clearing search must restore every product");
console.log("Menu checks passed: structure, category order, photos, assets and search reset.");
