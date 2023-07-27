const taggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const taggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')

// light or dark image

function switchMode(color){
  image1.src = `img/undraw_proud_coder_${color}.svg`
  image2.src = `img/undraw_feeling_proud_${color}.svg`
  image3.src = `img/undraw_conceptual_idea_${color}.svg`
}
// mode function

function switchLightDarkMode(isDark){
  nav.style.backgroundColor = isDark? 'rgb(0 0 0 / 50%)':'rgb(255 255 255 /50%)'
  textBox.style.backgroundColor =isDark? 'rgb(255 255 255 /50%)':'rgb(0 0 0 /50%)'
  taggleIcon.children[0].textContent =isDark? "Dark Mode":"Light Mode"
  isDark? taggleIcon.children[1].classList.replace('fa-sun','fa-moon'):taggleIcon.children[1].classList.replace('fa-moon','fa-sun')
  isDark? switchMode('dark'):switchMode('light')
}

// function darkMode(){
//   nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
//   textBox.style.backgroundColor = 'rgb(255 255 255 /50%)' 
//   taggleIcon.children[0].textContent = "Dark Mode"
//   taggleIcon.children[1].classList.replace('fa-sun','fa-moon')
//   switchMode('dark')
// }
// function lightMode(){
//   nav.style.backgroundColor = 'rgb(255 255 255 /50%)'
//   textBox.style.backgroundColor='rgb(0 0 0 /50%)'
//   taggleIcon.children[0].textContent = "Light Mode"
//   taggleIcon.children[1].classList.replace('fa-moon','fa-sun')
//   switchMode('light')
  
// }

// switch theme dynamically

function switchTheme(event){
  if(event.target.checked){
    document.documentElement.setAttribute('data-theme','dark')
    // darkMode()
    switchLightDarkMode(true)
    localStorage.setItem('theme','dark')
  }
  else{
    document.documentElement.setAttribute('data-theme','light')
    // lightMode()
    switchLightDarkMode(false)
    localStorage.setItem('theme','light')
  }
}

// event listener 
taggleSwitch.addEventListener('change', switchTheme)

// set default theme to dark
document.documentElement.setAttribute('data-theme','dark')
taggleSwitch.checked = true
// darkMode()
switchLightDarkMode(true)