function kiemTraLoaiTamGiac(a, b, c) {
  if (a == b && b == c) {
    return "Tam giác này là tam giác đều.";
  } else if (a == b || b == c || c == a) {
    return "Tam giác này là tam giác cân.";
  } else if (
    a * a + b * b == c * c ||
    b * b + c * c == a * a ||
    c * c + a * a == b * b
  ) {
    return "Tam giác này là tam giác vuông.";
  } else {
    return "Tam giác này không thuộc loại đều, cân, vuông.";
  }
}

// Ví dụ sử dụng
console.log(kiemTraLoaiTamGiac(3, 3, 3)); // Output: Tam giác này là tam giác đều.
console.log(kiemTraLoaiTamGiac(3, 4, 4)); // Output: Tam giác này là tam giác cân.
console.log(kiemTraLoaiTamGiac(3, 4, 5)); // Output: Tam giác này là tam giác vuông.
console.log(kiemTraLoaiTamGiac(7, 3, 4)); // Output: Tam giác này không thuộc loại đều, cân, vuông.
