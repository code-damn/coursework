import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    roomId: '',
    districtId: '',
    newsId: []
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setRoomId(state, action) {
            state.roomId = action.payload;
        },
        setDistrictId(state, action) {
            state.districtId = action.payload;
        },
        setUrlFilter(state, action) {
            state.roomId = action.payload.roomId;
            state.districtId = action.payload.districtId;
        }
    }
})

export const { setRoomId, setDistrictId, setUrlFilter } = filterSlice.actions

export default filterSlice.reducer