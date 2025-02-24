import { CommonButton } from "./CommonBtnStyle";

interface CommonBtnProps {
  children: string;
  disabled?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export default function CommonBtn({
  children,
  disabled = false,
  backgroundColor = "#83A80D",
  size = "medium",
  onClick,
}: CommonBtnProps) {
  return (
    <CommonButton
      disabled={disabled}
      color={backgroundColor}
      size={size}
      onClick={onClick}
    >
      {children}
    </CommonButton>
  );
}
