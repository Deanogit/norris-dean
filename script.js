const btn = document.querySelector('#joke-btn');

const jokeEl = document.querySelector('#joke');

function renderJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open('Get', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // console.log(JSON.parse(this.responseText));
      const joke = JSON.parse(this.responseText);
      console.log(joke.value);
      jokeEl.innerHTML = `<h4>"${joke.value}"</h4>`;
    } else {
      jokeEl.innerHTML = `<h4>Something went wrong (not funny)</h4> Error ${this.status}`;
    }
  };
  xhr.send();
}

btn.addEventListener('click', renderJoke);

document.addEventListener('DOMContentLoaded', renderJoke());
