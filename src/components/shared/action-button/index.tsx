type ActionButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function ActionButton({
  children,
  className,
}: ActionButtonProps) {
  return (
    <button
      className={`flex items-center gap-1 cursor-pointer max-w-fit cursor font-medium underline ${className} `}
    >
      {children}
    </button>
  );
}
