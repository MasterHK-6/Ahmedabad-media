document.addEventListener("DOMContentLoaded", () => {
  const calendar = new VanillaCalendar("#calendar", {
    type: "default",
    date: {
      min: new Date().getFullYear() + "-01-01",
      max: new Date().getFullYear() + "-12-31",
    },
    settings: {
      visibility: {
        theme: "light",
      },
    },
  });
  calendar.init();
});

document.getElementById("input-search").addEventListener("focusin", (e) => {
  let prefixSpan = document.getElementById("input-search-container");
  prefixSpan.classList.add("shadow");
  // let input = document.getElementById('input-search');
  // input.classList.add('prefix-icon-border');
});

document.getElementById("input-search").addEventListener("focusout", (e) => {
  let prefixSpan = document.getElementById("input-search-container");
  prefixSpan.classList.remove("shadow");
});

window.addEventListener(`contextmenu`, (e) => e.preventDefault());
