const button = document.querySelector("#button");
const sQuotes = document.querySelector(".displayBody");
const quotesFrom = document.querySelector(".displayName");

fetch("https://type.fit/api/quotes")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let data1 = [];
    data.map(async (d) => {
      data1.push(d);
    });
    button.addEventListener("click", (e) => {
      let rendom = Math.floor(Math.random() * 1640);
      sQuotes.innerHTML = `" ${data1[rendom].text} "`;
      quotesFrom.innerHTML = `${data1[rendom].author}`;
    });
  });
