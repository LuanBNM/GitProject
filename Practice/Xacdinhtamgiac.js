function kiemTraTamGiac(a, b, c) {
    if (a > 0 && b > 0 && c > 0) { // Kiểm tra các cạnh phải lớn hơn 0
      if (a + b > c && b + c > a && c + a > b) { // Kiểm tra điều kiện tổng hai cạnh lớn hơn cạnh còn lại
        return "Đây là một tam giác hợp lệ.";
      } else {
        return "Đây không phải là một tam giác hợp lệ.";
      }
    } else {
      return "Các cạnh phải lớn hơn 0.";
    }
  }
  
 