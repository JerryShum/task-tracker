function Button({ onClick, children, type }) {
   const baseStyle = "px-4 py-2 font-semibold rounded-xl";
   const typeStyles = {
      primary: " bg-primary-lighter text-background",
      secondary: " bg-accent-lighter text-background",
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
