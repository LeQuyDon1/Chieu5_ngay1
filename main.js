
// Câu 1: 
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: 
const products = [
    new Product(1, "Laptop Dell", 15000000, 5, "Electronics", true),
    new Product(2, "iPhone 15", 20000000, 8, "Electronics", true),
    new Product(3, "Áo thun nam", 200000, 50, "Clothing", true),
    new Product(4, "Quần jeans", 300000, 30, "Clothing", true),
    new Product(5, "Tai nghe Sony", 25000000, 12, "Electronics", true),
    new Product(6, "Mũ lưỡi trai", 150000, 20, "Accessories", true)
];

// Câu 3: 
const productInfo = products.map(product => ({
    name: product.name,
    price: product.price
}));

console.log("Câu 3 - Thông tin sản phẩm:");
console.log(productInfo);

// Câu 4: 
const inStockProducts = products.filter(product => product.quantity > 0);
console.log("Câu 4 - Sản phẩm còn hàng:");
console.log(inStockProducts);

// Câu 5: 
const hasExpensiveProduct = products.some(product => product.price >= 30000000);
console.log("Câu 5 - Có sản phẩm giá >= 30.000.000:", hasExpensiveProduct);

// Câu 6: 
const allAccessoriesAvailable = products.filter(p => p.category === "Accessories")
                                        .every(p => p.isAvailable === true);
console.log("Câu 6 - Tất cả Accessories đều có sẵn:", allAccessoriesAvailable);

// Câu 7:
const totalInventoryValue = products.reduce((sum, product) => {
    return sum + (product.price * product.quantity);
}, 0);
console.log("Câu 7 - Tổng giá trị kho hàng:", totalInventoryValue.toLocaleString("vi-VN") + " VNĐ");

// Câu 8: 
console.log("Câu 8 - Danh sách sản phẩm:");
for (const product of products) {
    const status = product.isAvailable ? "Còn hàng" : "Hết hàng";
    console.log(`${product.name} - ${product.category} - ${status}`);
}

// Câu 9: 
console.log("Câu 9 - Sử dụng for...in:");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

// Câu 10: 
const availableProductNames = products
    .filter(product => product.isAvailable && product.quantity > 0)
    .map(product => product.name);
console.log("Câu 10 - Sản phẩm đang bán và còn hàng:", availableProductNames);