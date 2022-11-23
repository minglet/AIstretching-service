import styled from "styled-components";

export const NotificationLayout = styled.div`
  ${({ theme }) => theme.common.contentMinLayout};
  background: linear-gradient(108.15deg, #8C63FF 1.69%, #936CFF 8.1%, #AC8EFF 33.75%, #D1C2FD 96.37%);
  flex-direction:column;
  color:#FFFFFF;
  .inner {
    ${({ theme }) => theme.common.inner};
    padding: 120px 0;
    display:flex;
    flex-direction:column;
    align-items:center;
`;
export const TextBox=styled.div`
text-align:center;
`
export const TitleText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.title};
  margin:auto;
`;
export const SubTitleText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.subTitle};
  font-weight:800;
`;
export const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSize.text};
  margin-top:32px;
  line-height: 1.25;
`;
export const Bold=styled.span`
font-weight:800;
`

export const MiddleCont=styled.div`
display:flex;
justify-content:center;
margin-top:60px;
`
export const Card=styled.div`
width:336px;
height:398px;
display:flex;
flex-direction:column;
background:rgba(241, 237, 252, 0.2);
border: 1px solid #FFFFFF;
box-shadow: 0px 4px 20px rgba(64, 62, 86, 0.2);
border-radius: 2px;
margin-right:20px;
padding:32px 40px 64px 40px;
`
export const LowCont=styled.div`
display:flex;
justify-content:center;
margin-top:18px;
`

export const Image=styled.img`
width:256px;
height:176px;
margin-top:24px;
`

export const Btn=styled.button`
width:208px;
height:48px;
background: #403E56;
margin-top:86px;
color:#FFFFFF;
&:hover{
    background:${({ theme }) => theme.colors.main};
}
`



