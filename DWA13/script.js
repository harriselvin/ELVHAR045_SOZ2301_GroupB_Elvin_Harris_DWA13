const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// Exercise 1 - console log all names
names.forEach((name) => {
  console.log(name);
});

// Exercise 2 - console log each name and matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Exercise 3 - map over all provinces & turn to uppercase
const upperCaseProvince = provinces.map((provinces) => provinces.toUpperCase());
console.log(upperCaseProvince);

// Exercise 4 - create new array with map that gets length of name characters
const nameLength = names.map((name) => name.length);
console.log(nameLength);

// Exercise 5 - sort all provinces
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// Exercise 6 - filter out all provinces with with word "Cape"
const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(filteredProvinces.length);

// Exercise 7 - create boolean using map and some to determine whether a name contains "S"
const containsS = names.map((name) => name.toLocaleLowerCase().includes("s"));
console.log(containsS);

// Exercise 8 - turn the above into an object that indicates the province of an individual using reduce
const nameProvinceObj = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(nameProvinceObj);

// Additional Exercises

const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

console.log(
  // Exercise 1 - console log each product name
  (() => {
    products.forEach((product) => {
      console.log(product.product);
    });
  })(),

  // Exercise 2 - filter out products that have a name longer than 5 characters
  (() => {
    const filteredProducts = products.filter(
      (product) => product.product.length <= 5
    );
    console.log(filteredProducts);
  })(),

  // Exercise 3 - convert all stringed prices to numbers using filter and map, and calculate sum price of all remaining products using reduce
  (() => {
    const totalPrice = products
      .filter((product) => product.price && !isNaN(Number(product.price)))
      .map((product) => Number(product.price))
      .reduce((sum, price) => sum + price, 0);
    console.log(totalPrice);
  })(),

  // Exercise 4 - use reduce to concatenate all product names
  (() => {
    const productNames = products.reduce((str, product) => {
      if (str === " ") {
        return product.product;
      } else {
        return `${str} ${product.product},`;
      }
    }, "");
    console.log(productNames);
  })(),

  // Exercise 5 - use reduce to calculate both highest and lowest-priced items
  (() => {
    const highestLowestPrices = products.reduce(
      (result, product) => {
        const price = Number(product.price);
        if (isNaN(price)) {
          return result;
        }
        if (price > result.highest) {
          result.highest = price;
          result.highestName = product.product;
        }
        if (price < result.lowest || result.lowest === null) {
          result.lowest = price;
          result.lowestName = product.product;
        }
        return result;
      },
      { highest: null, lowest: null, highestName: "", lowestName: "" }
    );

    const highestLowestString = `Highest: ${highestLowestPrices.highestName}. Lowest: ${highestLowestPrices.lowestName}`;
    console.log(highestLowestString);
  })(),

  // Exercise 6 - recreate the object with exact same values using Object.entries and reduce
  (() => {
    const modifiedProducts = Object.entries(products).reduce(
      (arr, [key, value]) => {
        const modifiedKey = key === "product" ? "name" : "cost";
        arr.push({ [modifiedKey]: value });
        return arr;
      },
      []
    );

    console.log(modifiedProducts);
  })()
);
