import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

const initialState = {
    item: []
    }
    

const cartSlice = createSlice({
    name: "cart",
    initialState :  JSON.parse(window.localStorage.getItem("producto")) || initialState,
    reducers: {
        addtoCart(state, payload) {
            state.item.push(payload.payload),
            window.localStorage.setItem(`producto`, JSON.stringify( state ))
            Swal.fire({
                text: 'Agregado al carrito...',
                icon: 'success',
                confirmButtonText: 'Ok'
                
            })
        
          
        },
        numItems(state){
            let index = 0;
            state.item.forEach(element => {
                    element.count = index++;
            });
            console.log(state)
        },
        delFromCart(state, payload){
            state.item.splice(payload.payload, 1);
            window.localStorage.setItem("producto", JSON.stringify(state));
            let index = 0;
            state.item.forEach(element => {
                    element.count = index++;
            });
            Swal.fire({
                text: 'Eliminado de carrito...',
                icon: 'warning',
                confirmButtonText: 'Ok'
              })

        },
    }
})

export const { addtoCart, numItems, delFromCart } = cartSlice.actions; 


export default cartSlice.reducer