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

    //  Негативные сценарии
    QUnit.test("Передан null", function(assert) {
        assert.throws(
            () => sortByFrequency(null),
            /Invalid argument/,
            "Должно выбрасываться исключение при передаче null."
        );
    });

    QUnit.test("Передан undefined", function(assert) {
        assert.throws(
            () => sortByFrequency(undefined),
            /Invalid argument/,
            "Должно выбрасываться исключение при передаче undefined."
        );
    });

    QUnit.test("Передано число вместо массива", function(assert) {
        assert.throws(
            () => sortByFrequency(123),
            /Invalid argument/,
            "Должно выбрасываться исключение при передаче числа."
        );
    });

    QUnit.test("Передана строка вместо массива", function(assert) {
        assert.throws(
            () => sortByFrequency("not array"),
            /Invalid argument/,
            "Должно выбрасываться исключение при передаче строки."
        );
    });

    QUnit.test("Передан объект вместо массива", function(assert) {
        assert.throws(
            () => sortByFrequency({ a: 1 }),
            /Invalid argument/,
            "Должно выбрасываться исключение при передаче объекта."
        );
    });
});
