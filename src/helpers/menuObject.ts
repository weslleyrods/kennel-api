
type MenuItem = '' | 'all' | 'dog' | 'cat' | 'fish'
export const createMenuObject = (activeMenu: MenuItem) => {
  let menu = {
    all: false,
    dog: false,
    cat: false,
    fish: false
  };

  if(activeMenu !== '')
    menu[activeMenu] = true;
  return menu;
}