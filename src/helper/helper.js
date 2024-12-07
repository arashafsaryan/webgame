const sumPrice = (products) => {
  return products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
};

const sumQuantity = (products) => {
  return products.reduce((counter, product) => counter + product.quantity, 0);
};

const removeLastTwoWords = (text) => {
  // متن را به آرایه‌ای از کلمات تقسیم می‌کنیم
  const words = text.trim().split(" ");

  // اگر طول آرایه بیشتر از دو باشد، دو کلمه آخر را حذف می‌کنیم
  if (words.length > 2) {
    words.splice(-3);
  } else {
    return ""; // اگر کمتر از دو کلمه وجود داشت، متن خالی برمی‌گردانیم
  }

  // آرایه را دوباره به یک رشته متصل می‌کنیم
  return words.join(" ");
};

export { sumPrice, sumQuantity, removeLastTwoWords };
