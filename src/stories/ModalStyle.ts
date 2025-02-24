import styled from "styled-components";
import { Modal, Fade } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

export const CustomFade = styled(Fade)``;

export const ModalContainer = styled.div`
  background-color: #fffbe3;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  @media screen and (max-width: 480px) {
    width: 85%;
  }
`;

export const CustomCheckCircleIcon = styled(CheckCircleIcon)`
  color: #93bc12;
  margin-right: 1rem;
  font-size: 3.5rem;
`;
export const ModalTitleContainer = styled.div`
  background-color: #93bc12;
  padding: 1.5rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  display: flex;
  justify-content: center;
`;

export const ModalTitleText = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 2.5rem;
`;

export const ModalExplainContainer = styled.div`
  margin-top: 3rem;
  padding: 2rem 4rem 1rem 4rem;
`;

export const ExplainContainer = styled.div``;

export const ExplainText = styled.div`
  font-size: 1.9rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
`;

export const MiddleExplainContainer = styled.div`
  padding-right: 4rem;
  padding-left: 4rem;
  text-align: center;
`;
export const MiddleExplainText = styled.p`
  font-size: 1.8rem;
`;

export const MiddleExplainSpan = styled.span`
  font-weight: bold;
`;

export const MiddleExplainRedText = styled.p`
  font-weight: bold;
  color: #ea5753;
  margin-top: 1rem;
  font-size: 1.8rem;
`;

export const ModalCheckContainer = styled.div`
  padding: 3rem 4rem 5rem 4rem;
  display: flex;
  justify-content: space-between;
`;

export const CustomLable = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.8rem;
`;

export const CustomInput = styled.input`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

export const ConfirmButton = styled.button`
  border: none;
  background-color: #83a80d;
  width: 30%;
  padding: 1rem 0 1rem 0;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    color: #666666;
    cursor: not-allowed;
  }
  &:hover {
    background-color: "#83A80D";
  }
`;
