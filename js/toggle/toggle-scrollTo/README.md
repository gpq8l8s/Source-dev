```
window.addEventListener('scroll', () => {
const scrollable = document.documentElement.scrollHeight - window.innerHeight;
const scrolled = window.scrollY;

if (Math.ceil(scrolled === scrollable)) {
alert('you reached the bottom');
}
});
```

> what is the reason that scrollable and scrolled have to be defined
