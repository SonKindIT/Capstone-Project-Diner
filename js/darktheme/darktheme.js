var checkbox = document.querySelector('input[name=mode]');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        document.querySelector(".light").style.display = "block";
        document.querySelector(".dark").style.display = "none";

    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector(".light").style.display = "none";
        document.querySelector(".dark").style.display = "block";

    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}

