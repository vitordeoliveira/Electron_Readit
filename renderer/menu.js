// Modules
const { remote, shell } = require("electron");

// Menu template
const template = [
  {
    label: "Items",
    submenu: [
      {
        label: "Add new",
        click: window.newItem,
        accelerator: "CmdOrCtrl+o"
      },
      {
        label: "Read item",
        accelerator: "CmdOrCtrl+Enter",
        click: window.openItem
      },
      {
        label: "Delete item",
        accelerator: "CmdOrCtrl+Backspace",
        click: window.deleteItem
      },
      {
        label: "Open in Browser",
        accelerator: "CmdOrCtrl+Shift+o",
        click: window.openItemNative
      },
      {
        label: "Search Items",
        accelerator: "CmdOrCtrl+s",
        click: window.searchItems
      }
    ]
  },
  {
    role: "editMenu"
  },
  {
    role: "windowMenu"
  },
  {
    role: "help",
    submenu: [
      {
        label: "Learn More",
        click: () => {
          shell.openExternal("https://google.com");
        }
      }
    ]
  }
];

// Build menu
const menu = remote.Menu.buildFromTemplate(template);

// Set as main app menu
remote.Menu.setApplicationMenu(menu);
