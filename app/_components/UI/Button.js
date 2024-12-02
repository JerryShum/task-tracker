function Button({ onClick, children, type }) {
   const baseStyle = "px-4 py-2 font-semibold rounded-xl";
   const typeStyles = {
      primary:
         "bg-primary-lighter text-background hover:bg-primary-light duration-300",
      secondary:
         "bg-accent-lighter text-background hover:bg-accent-light duration-300",
      danger: "bg-red-500 text-white hover:bg-red-700",
   };

   const buttonStyle = `${baseStyle} ${typeStyles[type] || ""}`;

   return (
      <button onClick={onClick} className={buttonStyle}>
         {children}
      </button>
   );
}

export default Button;
