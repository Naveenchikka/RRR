import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const mailSlice = createSlice({
    name: "mail",
    initialState: {
        SendMessageIsOpen: false,
        selectedMessage: null,
    },

    reducers: {
        openSendMessage: (state) =>{
            state.SendMessageIsOpen = true
        },
        closeSendMessage: (state) => {
            state.SendMessageIsOpen = false
        },
        openMessage: (state,action) => {
            state.selectedMessage = action.payload
        },
    },
});

export const { openSendMessage, closeSendMessage, openMessage} = mailSlice.actions;
export const selectSendMessageIsOpen = (state) => state.mail.SendMessageIsOpen;
export const selectedMail = (state) => state.mail.selectedMessage;
export default mailSlice.reducer;