
function myReduce<T, U>(
  array: ,
  callback: (
    accumulator: ,
    currentValue: ,
    index: number,
    array: 
  ) => ,
  initialValue: 
) {
  // Начальное значение аккумулятора
  let accumulator = initialValue;

  // Итерируем по массиву  
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator; // Возвращаем результат
}

const result = myReduce([1, 2, 3], (res, number) => res + number, 0)

console.log(result) // 6




