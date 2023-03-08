import { atom } from 'recoil';
import modalType from '../types/Modal';

export const modalContent = atom<modalType>({
  key: 'modal',
  default: { display: false, message: '', buttons: [] },
});
