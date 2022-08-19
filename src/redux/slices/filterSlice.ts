import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type filterSliceState = {
    roomId: number | null;
    districtId: number | null;
}

const initialState: filterSliceState = {
    roomId: null,
    districtId: null,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setRoomId(state, action: PayloadAction<number>) {
            state.roomId = action.payload;
        },
        setDistrictId(state, action: PayloadAction<number>) {
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