const themeSwitcher = document.getElementById('theme-switch-toggle');
const bodyClass = document.querySelector('body').classList;

themeSwitcher.addEventListener('change', onChangeTheme);

function onChangeTheme() {
  if (themeSwitcher.checked) {
    console.log('TRUE - Night');
    bodyClass.add('dark-theme');
    bodyClass.remove('light-theme');
    localStorage.setItem('theme', 'dark');
    return;
  }
  console.log('FALSE - Day');
  bodyClass.add('light-theme');
  bodyClass.remove('dark-theme');
  localStorage.setItem('theme', 'light');
}

if (localStorage.getItem('theme') === 'dark') {
  bodyClass.add('dark-theme');
  themeSwitcher.setAttribute('checked', 'checked');
}
