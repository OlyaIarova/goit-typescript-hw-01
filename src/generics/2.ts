type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

// Використання generics для вказівки типів полів T і U для параметрів top і bottom.
function compare<
  T extends Pick<AllType, "name" | "color">, // T-Pick<AllType, означає, що top повинен містити поля name і color.
  U extends Pick<AllType, "position" | "weight"> // U-Pick<AllType, означає, що bottom повинен містити поля position і weight.
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
export { };
    
//У вас є тип AllType. Існує функція compare, яка приймає два об'єкти.
// Ці об'єкти містять поля AllType. Ваше завдання – використовувати Pick 
//та generics для вказівки, що поля цих параметрів належать AllType.
// Функція compare повинна повертати AllType.