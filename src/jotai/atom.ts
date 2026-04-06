import { atom } from "jotai";

// Types
type TProduct = {
  name: string
  vendor: string
  ships: string
  price: number
  id: string
  category: string
}

type TPaymentMethodPopUp = {
  src: string
  name: string
  address: string
}

const products = atom<TProduct[]>([]);
const cart = atom<TProduct[]>([]);

// Payment PopUp 
const paymentPopUp =atom()
const paymentMethodPopUp = atom<TPaymentMethodPopUp>()


const product ={
    name:"Game of Thrones - Chapter One",
    vendor:"Alpha001",
    ships:"Worldwide",
    price:45,
    id:'bj43kbfrgkfignfhk',
    category:'Books'
}


export {
    products,cart,product,paymentPopUp,paymentMethodPopUp
}
export type { TPaymentMethodPopUp,TProduct };
