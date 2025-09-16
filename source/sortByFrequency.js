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
        return [];
    }
    
    const numbersOnly = arr.filter(item => typeof item === 'number' && !isNaN(item));
    
    if (numbersOnly.length === 0) {
        return [];
    }
    
    const frequency = {};
    for (const num of numbersOnly) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    return [...numbersOnly].sort((a, b) => {
        if (frequency[b] === frequency[a]) {
            return a - b;
        }
        return frequency[b] - frequency[a];
    });
}
