import { useState } from "react";
import {
  CustomModal,
  CustomFade,
  ModalContainer,
  CustomCheckCircleIcon,
  ModalTitleContainer,
  ModalTitleText,
  ModalExplainContainer,
  ExplainContainer,
  ExplainText,
  MiddleExplainContainer,
  MiddleExplainText,
  MiddleExplainSpan,
  MiddleExplainRedText,
  ModalCheckContainer,
  CustomLable,
  CustomInput,
  ConfirmButton,
} from "./ModalStyle";

interface ModalProps {
  isOpen?: boolean;
  closeModal?: () => void;
  state: "CU" | "GS25" | "ETC";
}

export default function Modal({
  isOpen = true,
  closeModal,
  state,
}: ModalProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CustomModal open={isOpen} closeAfterTransition>
      <CustomFade in={isOpen}>
        <ModalContainer>
          <ModalTitleContainer>
            <ModalTitleText>기부 접수 완료</ModalTitleText>
          </ModalTitleContainer>
          <ModalExplainContainer>
            {state === "CU" ? (
              <ExplainContainer>
                <ExplainText>
                  <CustomCheckCircleIcon />
                  발송된 알림톡 승인번호 확인
                </ExplainText>
                <ExplainText>
                  <CustomCheckCircleIcon />
                  가까운 CU / 이마트 24에서 택배 접수 진행
                </ExplainText>
              </ExplainContainer>
            ) : state === "GS25" ? (
              <ExplainContainer>
                <ExplainText>
                  <CustomCheckCircleIcon />
                  발송된 알림톡 승인번호 확인
                </ExplainText>
                <ExplainText>
                  <CustomCheckCircleIcon />
                  가까운 GS25에서 택배 접수 진행
                </ExplainText>
              </ExplainContainer>
            ) : (
              <ExplainContainer>
                <ExplainText>
                  <CustomCheckCircleIcon />
                  기부번호 + 휴대번호 뒤 4자리 박스 겉면에 기입
                </ExplainText>
                <ExplainText>
                  <CustomCheckCircleIcon />
                  기부번호 + 휴대번호 뒤 4자리 미기재 시 접수 불가
                </ExplainText>
              </ExplainContainer>
            )}
          </ModalExplainContainer>

          <MiddleExplainContainer>
            <MiddleExplainText>
              <MiddleExplainSpan>기부금영수증</MiddleExplainSpan>은 기부 완료 후
              발송되는 알림톡에서 신청가능
            </MiddleExplainText>
            <MiddleExplainRedText>
              카카오 알림톡 차단시, 안내 메시지를 받아보실 수 없어요
            </MiddleExplainRedText>
          </MiddleExplainContainer>

          <ModalCheckContainer>
            <CustomLable>
              <CustomInput
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              안내 사항을 확인하였습니다
            </CustomLable>
            <ConfirmButton disabled={!isChecked} onClick={closeModal}>
              확인
            </ConfirmButton>
          </ModalCheckContainer>
        </ModalContainer>
      </CustomFade>
    </CustomModal>
  );
}
