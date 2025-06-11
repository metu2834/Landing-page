export const BtnLink = ({ href, text, className = "" }) => {
  return (
    <a
      href={href}
      className={`px-6 py-2 rounded-full outline-none relative overflow-hidden 
      bg-sky-600 hover:bg-sky-700 text-white font-semibold 
      transition duration-300 ease-in-out 
      border border-sky-600 cursor-pointer ${className}`}
    >
      <span className="relative z-10">{text}</span>
    </a>
  );
};
