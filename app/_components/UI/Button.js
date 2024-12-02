function Button({ onClick, children, type }) {
   const baseStyle = "px-4 py-2 font-semibold rounded";
   const typeStyles = {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-white",
      danger: "bg-red-500 text-white",
   };

   const buttonStyle = `${baseStyle} ${typeStyles[type] || ""}`;

   return (
      <button onClick={onClick} className={buttonStyle}>
         {children}
      </button>
   );
}

export default Button;
