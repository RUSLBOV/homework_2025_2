'use strict';

QUnit.module("Тестируем функцию sortByFrequency", function() {
    QUnit.test("Работает правильно с сортировкой по частоте появления", function(assert) {
        const result = sortByFrequency([4, 6, 2, 6, 4, 4, 2, 2, 2]);

        assert.deepEqual(result, [2, 2, 2, 2, 4, 4, 4, 6, 6], "Массив должен быть отсортирован по частоте.");
    });

    QUnit.test("Работает правильно с пустым массивом", function(assert) {
        const result = sortByFrequency([]);

        assert.deepEqual(result, [], "Пустой массив должен вернуть пустой массив.");
    });

    QUnit.test("Работает правильно с массивом с одним элементом", function(assert) {
        const result = sortByFrequency([5]);

        assert.deepEqual(result, [5], "Массив с одним элементом должен вернуть тот же элемент.");
    });

    QUnit.test("Сортировка при одинаковой частоте должна идти по возрастанию", function(assert) {
        const result = sortByFrequency([3, 1, 2]);
        assert.deepEqual(result, [1, 2, 3], "Элементы с одинаковой частотой сортируются по возрастанию.");
    });

    QUnit.test("Работает с отрицательными числами", function(assert) {
        const result = sortByFrequency([-1, -2, -1, 3, 3, 3]);
        assert.deepEqual(result, [3, 3, 3, -1, -1, -2], "Функция должна корректно работать с отрицательными числами.");
    });

    QUnit.test("Возвращает пустой массив при передаче null", function(assert) {
        const result = sortByFrequency(null);
        assert.deepEqual(result, [], "Должен возвращать пустой массив при передаче null");
    });

    QUnit.test("Возвращает пустой массив при передаче undefined", function(assert) {
        const result = sortByFrequency(undefined);
        assert.deepEqual(result, [], "Должен возвращать пустой массив при передаче undefined");
    });

    QUnit.test("Возвращает пустой массив при передаче строки", function(assert) {
        const result = sortByFrequency("string");
        assert.deepEqual(result, [], "Должен возвращать пустой массив при передаче строки");
    });

    QUnit.test("Возвращает пустой массив при передаче числа", function(assert) {
        const result = sortByFrequency(123);
        assert.deepEqual(result, [], "Должен возвращать пустой массив при передаче числа");
    });

    QUnit.test("Возвращает пустой массив при передаче объекта", function(assert) {
        const result = sortByFrequency({});
        assert.deepEqual(result, [], "Должен возвращать пустой массив при передаче объекта");
    });

    QUnit.test("Игнорирует нечисловые значения в массиве", function(assert) {
        const result = sortByFrequency([1, "string", 2, null, 3, undefined, 1]);
        assert.deepEqual(result, [1, 1, 2, 3], "Должен игнорировать нечисловые значения в массиве");
    });
});
