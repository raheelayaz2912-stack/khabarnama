const EN_MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const UR_MONTHS = [
  "جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون",
  "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر",
];

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function formatEnglishDateTime(iso: string): string {
  const d = new Date(iso);
  const hours24 = d.getHours();
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const ampm = hours24 < 12 ? "AM" : "PM";
  return `${EN_MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} · ${hours12}:${pad(d.getMinutes())} ${ampm} PKT`;
}

export function formatUrduDateTime(iso: string): string {
  const d = new Date(iso);
  const hours24 = d.getHours();
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const ampm = hours24 < 12 ? "صبح" : "شام";
  return `${d.getDate()} ${UR_MONTHS[d.getMonth()]} ${d.getFullYear()} · ${hours12}:${pad(d.getMinutes())} ${ampm}`;
}

export function formatEnglishDateShort(iso: string): string {
  const d = new Date(iso);
  return `${EN_MONTHS[d.getMonth()].slice(0, 3)} ${d.getDate()}`;
}
