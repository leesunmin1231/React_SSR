import styled from '@emotion/styled';

export const AuthInput = styled.input`
  width: 80%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY2};
  color: ${({ theme }) => theme.colors.BLACK};
  padding: 7px 10px;
  font-size: 14px;
  margin-top: 5px;
  &:focus {
    outline-color: ${({ theme }) => theme.colors.GRAY1};
  }
  &::placeholder {
    user-select: none;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.GRAY3};
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.GRAY3} inset !important;
    box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.GRAY3} inset !important;
  }
`;

export const AuthBox = styled.div`
  width: 500px;
  height: min-content;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.PRIMARY_DARK};
  border-radius: 15px;
`;

export const AuthForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-top: 30px;
  padding-bottom: 20px;
  button {
    margin-top: 10px;
  }
`;

export const ErrorMessage = styled.div`
  width: 80%;
  height: 35px;
  text-align: left;
  font-size: 12px;
  padding: 8px 5px;
  div {
    color: ${({ theme }) => theme.colors.RED};
  }
`;

export const FieldName = styled.div`
  width: 80%;
  text-align: left;
  font-size: 15px;
  padding: 0px 5px;
  color: ${({ theme }) => theme.colors.LIGHT_BLACK};
`;
export const Header = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.PRIMARY_LIGHT};
`;
