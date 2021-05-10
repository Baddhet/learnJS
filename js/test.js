const MENU_LIST = [
  "Main",
  "Profile",
  "Schedule",
  "Students",
  "Reports",
  "Administration",
];

const role = {
  admin: "Admin",
  student: "Student",
  teacher: "Teacher",
};
const adminMenu = getMenu(MENU_LIST, role.admin);
const studentMenu= getMenu(MENU_LIST, role.student);
const teacherMenu= getMenu(MENU_LIST, role.teacher);

function getMenu(allMenu, role) {
  switch (role) {
    case "Student":
      return allMenu.filter(item => ["Main", "Schedule"].includes(item))
    case "Teacher":
      return allMenu.filter(item => item !== "Administration")
    default:
      return allMenu;
  }
}
console.log(studentMenu);