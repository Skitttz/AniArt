export default function initDateObject() {
  const now = new Date();
  const span = document.querySelectorAll("[date-year]");
  const animesYears = [
    { name: "Samurai Champloo", year: 2005 },
    { name: "Cowboy Bepop", year: 1999 },
    { name: "Neon Genesis Evangelion", year: 1995 },
    { name: "Ghost in the Shell", year: 1995 },
    { name: "Akira", year: 1998 },
    { name: "Soul Eater", year: 2003 },
  ];

  animesYears.forEach((item, index) => {
    const Anos = now.getFullYear() - item.year;
    span[index].innerText = `${Anos} anos atrás`;
  });
}
