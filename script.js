// get the mode of theme from local storage
let theme = localStorage.getItem('theme');

// check the theme mode in local storage,
// if it has the mode, set the stored theme 
// otherwise set light mode as default theme 
if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

// get the elements of theme buttons
let themeDots = document.getElementsByClassName('theme-button');

//recognize which theme button (mode) clicked and store the mode 
for (var i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        console.log('clicked', mode);
        setTheme(mode);
    })

}

//set the style respected to the selected mode
function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'style.css';
    }
    else if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css';
    }
    else if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css';
    }
    else if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css';
    }
    // store the mode in local storage
    localStorage.setItem('theme', mode);
}