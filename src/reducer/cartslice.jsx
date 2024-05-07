import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("Cart")) || {
    Cart :[],
    Count :0,
};

export const CartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addCart(state,action)
        {
            const NewItem = action.payload;
            const existingItem = state.Cart.find((item)=>item.id===NewItem.id);
            if(existingItem)
                existingItem.Count+=NewItem.Count;
            else
                state.Cart.push(NewItem);

            state.Count+=NewItem.Count;
            localStorage.setItem("Cart",JSON.stringify(state));
            
        },
        removeCart(state,action)
        {
            const Itemid = action.payload;
            const ItemIdx= state.Cart.findIndex((item)=>item.id ===Itemid);

            if(ItemIdx !==-1)
                {
                    state.Count -=state.Cart[ItemIdx].Count;
                    state.Cart.splice(ItemIdx,1);
                    localStorage.setItem("Cart",JSON.stringify(state));
                }
            
        },
        clearCart(state){
             state.Cart =[];
             state.Count =0;
             localStorage.removeItem("Cart");

             
        },
    },
});
export const {
    addCart,removeCart,clearCart
}= CartSlice.actions;

export default CartSlice.reducer;