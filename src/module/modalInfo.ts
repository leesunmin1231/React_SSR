import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type buttonType = { name: string; handler: () => void };
export interface ModalInfo {
  display: boolean;
  message: string;
  buttons: buttonType[];
}

export const modalInfo = createSlice({
  name: 'modalInfo',
  initialState: { display: false, message: '', buttons: [] } as ModalInfo,
  reducers: {
    addContent(state, action: PayloadAction<ModalInfo>) {
      return { ...action.payload };
    },
  },
});

export const { addContent } = modalInfo.actions;
export default modalInfo.reducer;
