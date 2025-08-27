type ActionButtonProps = {
  children: React.ReactNode;
  className?: string
};

export default function ActionButton({ children, className }: ActionButtonProps) {
  return (
    <span className={`flex items-center gap-1 cursor-pointer max-w-fit cursor font-medium underline ${className} `}>
      {children}
    </span>
  );
}
