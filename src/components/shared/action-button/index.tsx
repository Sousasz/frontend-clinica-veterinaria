'use client'

type ActionButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function ActionButton({
  children,
  onClick,
  className,
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 cursor-pointer max-w-fit cursor font-medium underline ${className} `}
    >
      {children}
    </button>
  );
}
