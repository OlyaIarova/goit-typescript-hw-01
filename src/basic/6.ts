interface User {
  //User визначає типізацію обов'язкових властивостей name, age та email.
  name: string;
  age: number;
  email: string;
  address?: Address; //адреса необов'язкова
}
interface Address {
  // Address визначає типізацію властивостуй city та country.
  city: string;
  country: string;
}

const mango: User = { //mango типізовано відповідно до інтерфейсу User
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User = { //poly типізовано відповідно до інтерфейсу User
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

/*
 * Створіть інтерфейс User для типізації об'єктів, які містять такі властивості.
 *  Зверніть увагу, що адреса є необов'язковою властивістю.
 */
