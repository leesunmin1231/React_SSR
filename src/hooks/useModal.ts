import { useSetRecoilState } from 'recoil';
import { modalContent } from '../atom';
import { buttonType } from '../types/Modal';

export default function useModal() {
  const setModalContent = useSetRecoilState(modalContent);
  const setContent = (msg: string, buttonList: buttonType[] = []) => {
    setModalContent({ display: true, message: msg, buttons: buttonList });
  };
  const closeModal = () => {
    setModalContent({ display: false, message: '', buttons: [] });
  };
  return { setContent, closeModal };
}
