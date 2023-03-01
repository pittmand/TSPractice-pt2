import WareHouse from "./models/Warehouse";
import { addPhone, deletePhoneByIndex, deletePhoneByName, filter5G, filterPriceLessThan, filterPriceGreaterThan, findPhoneByName, calcAverageCost, doWeHaveA5GPhone, phoneFlashSale, phoneFlashSaleV2 } from "./models/Warehouse";


let detroitWarehouse: WareHouse[] = [
    {
       name: "iPhone SE",
       price: 399,
       fiveG: false,
    },
    {
       name: "iPhone XR",
       price: 499,
       fiveG: false,
    },
    {
       name: "iPhone 11",
       price: 599,
       fiveG: false,
    },
    {
       name: "iPhone 12 Mini",
       price: 729,
       fiveG: true,
    },
    {
       name: "iPhone 12",
       price: 829,
       fiveG: true,
    },
    {
       name: "iPhone 12 Pro",
       price: 999,
       fiveG: true,
    },
    {
       name: "iPhone 12 Max",
       price: 1099,
       fiveG: true,
    },
    {
       name: "Pixel 4a",
       price: 349,
       fiveG: false,
    },
    {
       name: "Pixel 5",
       price: 699,
       fiveG: true,
    }];
    

let newYorkWarehouse: WareHouse[] = [
    {
        name: "iPhone SE",
        price: 399,
        fiveG: false,
    },
    {
        name: "Pixel 5",
        price: 699,
        fiveG: true,
    },
    {
        name: "Pixel 4a 5G",
        price: 499,
        fiveG: true,
    },
    {
        name: "Pixel 4a 5G",
        price: 499,
        fiveG: true,
    },
    {
        name: "Pixel 4a 5G",
        price: 499,
        fiveG: true,
    },
    {
        name: "Pixel 4a",
        price: 349,
        fiveG: false,
    },
    {
        name: "Pixel 4a",
        price: 349,
        fiveG: false,
    },
    {
        name: "Galaxy S10",
        price: 750,
        fiveG: false,
    },
    {
        name: "Galaxy S10+",
        price: 1500,
        fiveG: true,
    }];
        
let chicagoWarehouse: WareHouse[] = [
    {
        name: "Galaxy S10",
        price: 750,
        fiveG: false,
    },
    {
        name: "Galaxy S10+",
        price: 1500,
        fiveG: true,
    },
    {
        name: "Galaxy S10+",
        price: 1500,
        fiveG: true,
    },
    {
        name: "Galaxy S10+",
        price: 1500,
        fiveG: true,
    },
    {
        name: "iPhone 12",
        price: 829,
        fiveG: true,
    },
    {
        name: "iPhone 12 Pro",
        price: 999,
        fiveG: true,
    },
    {
        name: "iPhone 12 Max",
        price: 1099,
        fiveG: true,
    },
    {
        name: "Pixel 4a",
        price: 349,
        fiveG: false,
    },
    {
        name: "Pixel 5",
        price: 699,
        fiveG: true,
    }];

console.log("Chicago updates");
        
console.log("Chicago warehouse phones with 5G", filter5G(chicagoWarehouse));

console.log("Chicago warehouse phones less than $1000", filterPriceLessThan(chicagoWarehouse, 1000));

console.log("Chicago has 5G items: ", doWeHaveA5GPhone(chicagoWarehouse));

console.log("Chicago phones matching Galaxy S10+", findPhoneByName(chicagoWarehouse, "Galaxy S10+"))

console.log("Chicago phones matching Pixel 4a", findPhoneByName(chicagoWarehouse, "Pixel 4a"))

console.log("Chicago warehouse average cost", calcAverageCost(chicagoWarehouse))

console.log("Chicago warehouse phones greater than $1000",filterPriceGreaterThan(chicagoWarehouse, 1000));

addPhone(chicagoWarehouse, "Samsunng G99", 1099.99, true);
console.log("Adding phone to Chicago warehouse: ", chicagoWarehouse);

deletePhoneByIndex(chicagoWarehouse, 2);
console.log("Removed phone to Chicago warehouse by index: ", chicagoWarehouse);

deletePhoneByName(chicagoWarehouse, "Galaxy S10+");

console.log("Removed phone to Chicago warehouse by name: ", chicagoWarehouse);

console.log("Chicago warehouse flash sales by 25%", phoneFlashSale(chicagoWarehouse, .25))

console.log("Chicago warehouse flash sales by 10% for ", phoneFlashSaleV2(chicagoWarehouse, "iPhone 12 Pro", .10))


console.log("New York updates");

console.log("NewYork Warehouse current", newYorkWarehouse);

addPhone(newYorkWarehouse, "Apple 28", 1899, true);
console.log("NewYork Warehouse after add", newYorkWarehouse);

console.log("NewYork warehouse phones with 5G", filter5G(newYorkWarehouse));

console.log("NewYork warehouse phones less than $1000", filterPriceLessThan(newYorkWarehouse, 1000));

console.log("NewYork has 5G items: ", doWeHaveA5GPhone(newYorkWarehouse));

console.log("NewYork phones matching Galaxy S10+", findPhoneByName(newYorkWarehouse, "Galaxy S10+"))

console.log("NewYork phones matching Pixel 4a", findPhoneByName(newYorkWarehouse, "Pixel 4a"))

console.log("NewYork warehouse average cost", calcAverageCost(newYorkWarehouse))

console.log("NewYork warehouse phones greater than $1000",filterPriceGreaterThan(newYorkWarehouse, 1000));

deletePhoneByIndex(newYorkWarehouse, 2);
console.log("Removed phone to NewYork warehouse by index: ", newYorkWarehouse);

deletePhoneByName(newYorkWarehouse, "Galaxy S10+");

console.log("Removed phone to NewYork warehouse by name: ", newYorkWarehouse);

console.log("NewYork warehouse flash sales by 25%", phoneFlashSale(newYorkWarehouse, .10))

console.log("NewYork warehouse flash sales by 10% for ", phoneFlashSaleV2(newYorkWarehouse, "Apple 28", .15))

console.log("end of script");