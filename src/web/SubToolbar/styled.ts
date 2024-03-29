import styled from 'styled-components';



export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


// export const SubToolbarComponent = styled(Toolbar)`
//   height: ${Sizes.SUBTOOLBAR_WEB}px !important;
//   min-height: ${Sizes.SUBTOOLBAR_WEB}px !important;
//   padding-left: ${(props: ISubToolbarProps) => props.noSubToolbarPadding ? 0 : 8}px;
//   padding-right: ${(props: ISubToolbarProps) => props.noSubToolbarPadding ? 0 : 8}px;
//   background-color: ${(props: ISubToolbarProps) => props.backgroundColor || 'transparent'};

//   @media (min-width:320px) {
//     height: ${Sizes.SUBTOOLBAR_ANDROID}px !important;
//     min-height: ${Sizes.SUBTOOLBAR_ANDROID}px !important;
//   }

//   @media (min-width:480px) {
//     height: ${Sizes.SUBTOOLBAR_ANDROID}px !important;
//     min-height: ${Sizes.SUBTOOLBAR_ANDROID}px !important;
//   }

//   @media (min-width:600px) {
//     height: ${Sizes.SUBTOOLBAR_WEB}px !important;
//     min-height: ${Sizes.SUBTOOLBAR_WEB}px !important;
//   }

//   @media (min-width:801px) {
//     height: ${Sizes.SUBTOOLBAR_WEB}px !important;
//     min-height: ${Sizes.SUBTOOLBAR_WEB}px !important;
//   }

//   @media (min-width:1025px) {
//     height: ${Sizes.SUBTOOLBAR_WEB}px !important;
//     min-height: ${Sizes.SUBTOOLBAR_WEB}px !important;
//   }

//   @media (min-width:1281px) {
//     height: ${Sizes.SUBTOOLBAR_WEB}px !important;
//     min-height: ${Sizes.SUBTOOLBAR_WEB}px !important;
//   }
// `;
