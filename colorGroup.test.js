import groupColor from "./colorGroup";

test("groupColor", () => {
  expect(groupColor("#FF0000")).toBe("Красный");
  expect(groupColor("#00FF00")).toBe("Зеленый");
  expect(groupColor("#0000FF")).toBe("Синий");
  expect(groupColor("#FFFF00")).toBe("Желтый");
  expect(groupColor('#000000')).toBe('Неопределенный цвет');
});