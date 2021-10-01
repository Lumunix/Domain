let defaultTheme = window.matchMedia("(prefers-color-scheme: dark)");
let theme = sessionStorage.getItem('theme');

if (defaultTheme.matches) {
	document.getElementById("light-dark").innerHTML = "Light";
	document.getElementById("light-icon").style.display = "block";
	document.getElementById("dark-icon").style.display = "none";
} else {
	document.getElementById("light-dark").innerHTML = "Dark";
	document.getElementById("light-icon").style.display = "none";
	document.getElementById("dark-icon").style.display = "block";
}

function prefersColorTest(defaultTheme) {
  if (defaultTheme.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');
   	document.getElementById("light-dark").innerHTML = "Light";
		document.getElementById("light-icon").style.display = "block";
		document.getElementById("dark-icon").style.display = "none";
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("light-dark").innerHTML = "Dark";
		document.getElementById("light-icon").style.display = "none";
		document.getElementById("dark-icon").style.display = "block";
    sessionStorage.setItem('theme', '');
  }
}
defaultTheme.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("light-dark").innerHTML = "Dark";
		document.getElementById("light-icon").style.display = "none";
		document.getElementById("dark-icon").style.display = "block";
	}	else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("light-dark").innerHTML = "Light";
		document.getElementById("light-icon").style.display = "block";
		document.getElementById("dark-icon").style.display = "none";
	} else if (defaultTheme.matches) {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("light-dark").innerHTML = "Dark";
		document.getElementById("light-icon").style.display = "none";
		document.getElementById("dark-icon").style.display = "block";
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("light-dark").innerHTML = "Light";
		document.getElementById("light-icon").style.display = "block";
		document.getElementById("dark-icon").style.display = "none";
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	document.getElementById("light-dark").innerHTML = "Light";
	document.getElementById("light-icon").style.display = "block";
	document.getElementById("dark-icon").style.display = "none";
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	document.getElementById("light-dark").innerHTML = "Dark";
	document.getElementById("light-icon").style.display = "none";
	document.getElementById("dark-icon").style.display = "block";
}
