// Türkçe karakterlerle ve klavyede karşılıklarıyla arama yapılabilsin.
export function normalizeSearch(value: string): string {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i");
}
