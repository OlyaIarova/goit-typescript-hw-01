enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {//Функція приймає аргумент day типу DayOfWeek, повертає булеве значення
   return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}; 

