import aristocracy from "../src/assets/img/Aristocracy.jpg"
import placeGuard from "../src/assets/img/Palace Guard.jpg"
import warrior from "../src/assets/img/Warrior.jpg"
import nobleWoman from "../src/assets/img/Noble Woman.jpg"
import queen from "../src/assets/img/Queen.jpg"
import womanAristocracy from "../src/assets/img/Woman Aristocracy.jpg"
import littleAristocrat from "../src/assets/img/Little Aristocrat.jpg"
import littleNoble from "../src/assets/img/Little Noble.jpg"
import littlePrince from "../src/assets/img/Little Prince.jpg"

const products = [
    {id: '1', name: 'Aristocracy', price: 1200, img: aristocracy, idCat:'1'},
    {id: '2', name: 'Palace Guard', price: 1500, img: placeGuard, idCat:'1'},
    {id: '3', name: 'Warrior', price: 1800, img: warrior, idCat:'1'},
    {id: '4', name: 'Noble Woman', price: 1350, img: nobleWoman, idCat:'2'},
    {id: '5', name: 'Queen', price: 1740, img: queen, idCat:'2'},
    {id: '6', name: 'Woman Aristocracy', price: 1500, img: womanAristocracy, idCat:'2'},
    {id: '7', name: 'Little aristicrat', price: 950, img: littleAristocrat, idCat:'3'},
    {id: '8', name: 'Little Noble', price: 1020, img: littleNoble, idCat:'3'},
    {id: '9', name: 'Little Prince', price: 1100, img: littlePrince, idCat:'3'},
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout (() => {
            resolve(products);
        }, 2000)
    })
}

export const getOneProduct = (id) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const product = products.find(item => item.id === id)
            resolve(product);
        }, 2000)
    })
}

export const getProductByCat = (idCategory) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const categoryProduct =  products.filter(item => item.idCat === idCategory)
            resolve(categoryProduct);
        }, 2000)
    })
}