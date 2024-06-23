import axios from "axios";

//Функція fetchData оголошується з параметром типу T, що дозволяє їй бути гнучкою і працювати з будь-яким типом даних. Promise<T> - повертає проміс, що містить дані типу T.
async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url); //axios.get<T>(url)- параметр типу для методу axios.get, щоб точно вказати тип даних, які очікуються у відповіді.
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
