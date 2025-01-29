import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "#1E40AF", // Default blue color
    textColor = "#FFFFFF", // Default white color
    className = "",
    ...props
}) {
    const buttonStyle = {
        backgroundColor: bgColor,
        color: textColor,
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        ...props.style // Allow additional inline styles to be passed
    };

    return ( 
        <button type={type} style={buttonStyle} className={className} {...props}>
            {children}
        </button>
    );
}