const themeSwitcher = document.getElementById('theme-switch-toggle');
const bodyClass = document.querySelector('body').classList;
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeSwitcher.addEventListener('change', onChangeTheme);

if (localStorage.getItem('theme') === 'dark-theme') {
  bodyClass.add('dark-theme');
  themeSwitcher.setAttribute('checked', 'checked');
}

function onChangeTheme() {
  if (themeSwitcher.checked) {
    changeThemeClassAndSave({ add: Theme.DARK, del: Theme.LIGHT });
    return;
  }
  changeThemeClassAndSave({ add: Theme.LIGHT, del: Theme.DARK });
}

function changeThemeClassAndSave(obj) {
  const { add, del } = obj;

  bodyClass.add(add);
  bodyClass.remove(del);
  localStorage.setItem('theme', add);
}
