'use strict';

const input = document.querySelector('.form__input');
const inputButton = document.querySelector('.form__input-button');

input.addEventListener('input', (e) => {
  const stringValue = e.target.value;
  const check = /@.*\./.test(stringValue);

  if (stringValue === '') {
    e.target.classList.remove('form__input--filled');
    inputButton.disabled = true;
  } else if (!check) {
    e.target.classList.remove('form__input--filled');
    inputButton.disabled = true;
  } else if (check) {
    e.target.classList.add('form__input--filled');
    inputButton.disabled = false;
  }
});

const exhibitions = document.querySelector('.section__article-wrapper');
const events = document.querySelectorAll('.events');
const news = document.querySelectorAll('.news');

const sectionObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.1,
    delay: 100,
  },
);

sectionObserver.observe(exhibitions);
events.forEach(article => sectionObserver.observe(article));
news.forEach((article) => sectionObserver.observe(article));
