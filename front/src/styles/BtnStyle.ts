import styled, { css, BtnStyle } from "styled-components";
import theme from "./Theme";

const check = css<BtnStyle>`
  border: 1px solid ${({ check }) => check === 'true' ? theme.colors.main : theme.colors.greyBorder};
  border-radius: 2px;
  background: ${({ check }) => check === 'true' ? theme.colors.main : theme.colors.greyBtnBg};
  color: ${({ check }) => check === 'true' ? '#fff' : theme.colors.greyText};
`;

// 마이페이지 버튼
export const SmallBtn = styled.button`
  width: 88px;
  height: 28px;
  border: 1px solid ${({ theme }) => theme.colors.greyBorder};
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.greyBtnBg};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.greyText};

  transition: all .3s;

  &:hover{
    border: none;
    background: ${({ theme }) => theme.colors.main};
    color: #fff;
  }
`;

// 체어코치 하러가기, 확인완료, 이메일로 시작하기
export const MiddleBtn = styled.button<BtnStyle>`
  width: 200px;
  height: 48px;
  border-radius: 2px;
  background: ${({ hover }) => hover === 'true' ? theme.colors.mainDark : theme.colors.main};
  color: #fff;
  transition: .3s;


  &:hover{
    background: ${({ theme }) => theme.colors.main};
  }
`;

// 로그인 버튼
export const LoginBtn = styled.button`
  width: 400px;
  height: 40px;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.main};
  color: #fff;
`

// 회원가입, 회원정보 수정 버튼
export const InputBtn = styled.button<BtnStyle>`
  width: 400px;
  height: 40px;
  ${check}
`

// 네, 아니오 / 다시하기, 나가기
export const CheckBtn = styled.button<BtnStyle>`
  width: ${({ size }) => size === 'big' ? '440px' : '200px'};
  height: 48px;
  ${check}
`;