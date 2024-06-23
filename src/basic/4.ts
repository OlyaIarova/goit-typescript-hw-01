function showMessage(message: string): void {// message тип string. Функція не повертає значення, тому тип значення-void.
  console.log(message);
}

function calc(num1: number, num2: number): number {//num1 і num2 мають бути number.Функція повертає число (number).
  return num1 + num2;
}

function customError(): never {// не приймає жодних аргументів. Функція викликає помилку і не повертає значення, тому тип значення, що повертається, буде never.
  throw new Error("Error");
}
export {};


