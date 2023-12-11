import { createSlice } from "@reduxjs/toolkit";

export const pageNumber = createSlice({
    name: 'pageNumber',
    initialState: {
        pageNumber: 1,
        view: 'list'
    },
    reducers: {
        loadMore: (state) => {
            return {
                ...state,
                pageNumber: state.pageNumber + 1
            }
        },
        changeView: (state, action) => {
            return {
                ...state,
                view: action.payload
            }
        },
    }
})

export const { loadMore, changeView } = pageNumber.actions
export default pageNumber.reducer
