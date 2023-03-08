import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useModal from './useModal';

export default function useAuthCheck() {
  const [isLogined, setIsLogined] = useState(false);
  const { setContent, closeModal } = useModal();
  const navigate = useNavigate();

  const authError = () => {
    navigate('/auth/login');
    setContent('로그인이 필요한 페이지 입니다.', [{ name: '확인', handler: closeModal }]);
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      authError();
    }
    setIsLogined(true);
  }, []);
  return { isLogined };
}
