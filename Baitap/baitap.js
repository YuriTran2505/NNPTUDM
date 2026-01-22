// =====================
// Câu 1: Constructor function Product
// =====================
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// =====================
// Câu 2: Tạo mảng products ít nhất 6 sản phẩm, >= 2 danh mục
// =====================
let products = [
  new Product(1, "MacBook Pro M3", 42000000, 5, "Laptop", true),
  new Product(2, "iPhone 15 Pro Max", 35000000, 0, "Phone", true),
  new Product(3, "Logitech Mouse", 800000, 20, "Accessories", true),
  new Product(4, "Mechanical Keyboard", 1500000, 3, "Accessories", false),
  new Product(5, "Samsung Monitor", 6000000, 7, "Accessories", true),
  new Product(6, "ASUS Gaming Laptop", 29000000, 2, "Laptop", true),
];

// =====================
// Câu 3: Tạo mảng mới chỉ chứa name, price
// =====================
let namePriceList = products.map((p) => ({
  name: p.name,
  price: p.price,
}));

console.log("Câu 3:", namePriceList);

// =====================
// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
// =====================
let inStockProducts = products.filter((p) => p.quantity > 0);
console.log("Câu 4:", inStockProducts);

// =====================
// Câu 5: Kiểm tra có ít nhất 1 sản phẩm giá > 30.000.000 không
// =====================
let hasOver30M = products.some((p) => p.price > 30000000);
console.log("Câu 5:", hasOver30M);

// =====================
// Câu 6: Kiểm tra tất cả sản phẩm category "Accessories" có isAvailable = true không
// =====================
let accessoriesAvailable = products
  .filter((p) => p.category === "Accessories")
  .every((p) => p.isAvailable === true);

console.log("Câu 6:", accessoriesAvailable);

// =====================
// Câu 7: Tính tổng giá trị kho (price * quantity)
// =====================
let totalInventoryValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
console.log("Câu 7:", totalInventoryValue.toLocaleString("vi-VN"), "VND");

// =====================
// Câu 8: Dùng for...of in ra: Tên - Danh mục - Trạng thái
// =====================
console.log("Câu 8:");
for (let p of products) {
  let status = p.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${p.name} - ${p.category} - ${status}`);
}

// =====================
// Câu 9: Dùng for...in để in ra tên thuộc tính + giá trị tương ứng (1 sản phẩm)
// =====================
console.log("Câu 9:");
for (let key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

// =====================
// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
// (isAvailable = true && quantity > 0)
// =====================
let sellingAndInStockNames = products
  .filter((p) => p.isAvailable === true && p.quantity > 0)
  .map((p) => p.name);

console.log("Câu 10:", sellingAndInStockNames);
