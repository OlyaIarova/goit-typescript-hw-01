export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record

const RoleDescriptio: Record<UserRole, string> = {// Використання Record для типізації RoleDescription
  //ключ у контексті об'єкта є значенням, кожне значення є рядком, що описує роль.
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

export {};

// У вас є перелік UserRole, який використовується для класифікації користувачів
// у вашому додатку.Ви хочете створити об'єкт RoleDescription, який зіставлятиме
// кожну роль користувача з її описом.
