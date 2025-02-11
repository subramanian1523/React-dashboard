export const InputField = ({ label, id, type, value, onChange, placeholder, icon }) => {
  return (
    <div className="">
      <label
        htmlFor={id}
        className="mb-[5px] block text-sm font-semibold uppercase text-gray-700"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          className="mb-3 w-full rounded-lg border border-gray-300 bg-gray-50 p-3"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {icon && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 transform pb-[5px] text-gray-600"
            onClick={icon.onClick}
          >
            {icon.icon}
          </button>
        )}
      </div>
    </div>
  );
};