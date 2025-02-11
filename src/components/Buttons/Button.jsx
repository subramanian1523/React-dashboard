export const Button = ({
  onClick,
  children,
  className,
  icon,
  disabled,
}) => {
  return (
    <button
      className={`flex w-full items-center justify-center gap-[2%] rounded-lg border border-gray-300 p-3 ${className} ${
        disabled ? 'cursor-not-allowed opacity-50' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && icon} {children}
    </button>
  );
};
