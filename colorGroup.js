export default function groupColor(hexColor) {
  // Удаляем символ '#' из HEX-кода
  hexColor = hexColor.replace('#', '');

  // Преобразуем HEX в RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Определяем цветовую группу
  if (r > g && r > b) {
      return "Красный";
  } else if (g > r && g > b) {
      return "Зеленый";
  } else if (b > r && b > g) {
      return "Синий";
  } else if (r > 200 && g > 200 && b < 100) {
      return "Желтый";
  } else {
      return "Неопределенный цвет";
  }
}
