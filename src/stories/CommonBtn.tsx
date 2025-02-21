interface CommonBtnProps {
  children: string;
  disabled: boolean;
  color: string;
  onClick: () => void;
}

export default function CommonBtn({
  children,
  disabled,
  color,
  onClick,
}: CommonBtnProps) {
  return (
    <button
      disabled={disabled}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
