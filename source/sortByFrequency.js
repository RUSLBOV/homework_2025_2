/**
 * Сортируем массив чисел по частоте встречаемости.
 * Если частота одинаковая,то сортируем числа по возрастанию.
 *
 * @param {number[]} arr - Входной массив чисел
 * @returns {number[]} Новый отсортированный массив
 * @
 * @example
 * sortByFrequency([4, 6, 2, 4, 6, 4]) // [4, 4, 4, 6, 6, 2]
 * sortByFrequency([1, 2, 3, 2, 1, 2]) // [2, 2, 2, 1, 1, 3]
 * @author Ягубов Р.М WEB-22.
 */
function sortByFrequency(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Ошибка! Входные данные должны быть массивом типа number!");
    }

    const frequency = {};
    for (const num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    return [...arr].sort((a, b) => {
        if (frequency[b] === frequency[a]) {
            return a - b;
        }
        return frequency[b] - frequency[a];
    });
}
