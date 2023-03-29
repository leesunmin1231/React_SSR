import { useDispatch } from 'react-redux';
import { buttonType, addContent } from '../module/modalInfo';
import { AppDispatch } from '../module/store';

export default function useModal() {
  const dispatch = useDispatch<AppDispatch>();
  const setContent = (msg: string, buttonList: buttonType[] = []) => {
    dispatch(addContent({ display: true, message: msg, buttons: buttonList }));
  };
  const closeModal = () => {
    dispatch(addContent({ display: false, message: '', buttons: [] }));
  };
  return { setContent, closeModal };
}
