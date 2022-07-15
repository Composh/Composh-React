import styled from 'styled-components';



export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 8px;
  padding-right: 8px;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
`;


// export const ToolbarContainer = styled(Toolbar)`
//   height: ${Metrics.TOOLBAR_WEB}px !important;
//   min-height: ${Metrics.TOOLBAR_WEB}px !important;
//   background-color: ${(props: IToolbarProps) => props.backgroundColor || 'transparent'};

//   @media (min-width:320px) {
//     height: ${Metrics.TOOLBAR_ANDROID}px !important;
//     min-height: ${Metrics.TOOLBAR_ANDROID}px !important;
//   }

//   @media (min-width:480px) {
//     height: ${Metrics.TOOLBAR_ANDROID}px !important;
//     min-height: ${Metrics.TOOLBAR_ANDROID}px !important;
//   }

//   @media (min-width:600px) {
//     height: ${Metrics.TOOLBAR_WEB}px !important;
//     min-height: ${Metrics.TOOLBAR_WEB}px !important;
//   }

//   @media (min-width:801px) {
//     height: ${Metrics.TOOLBAR_WEB}px !important;
//     min-height: ${Metrics.TOOLBAR_WEB}px !important;
//   }

//   @media (min-width:1025px) {
//     height: ${Metrics.TOOLBAR_WEB}px !important;
//     min-height: ${Metrics.TOOLBAR_WEB}px !important;
//   }

//   @media (min-width:1281px) {
//     height: ${Metrics.TOOLBAR_WEB}px !important;
//     min-height: ${Metrics.TOOLBAR_WEB}px !important;
//   }
// `;
