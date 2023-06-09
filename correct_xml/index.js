const button = document.querySelector("button");

const fetchData = async (url) => {
  console.log(url)
  await fetch(url)
    .then((res) => res.text)
    .then((data) => console.log(data));
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("input");

  fetchData(input.value);
});
