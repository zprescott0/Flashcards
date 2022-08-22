import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {},
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = {
                ...action.payload
            };
        }
    }
});

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;

export const selectCards = state => state.cards.cards;