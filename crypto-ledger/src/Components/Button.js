import React from "react";
import "../Styles/Button.css";

const STYLE = ['btn--primary']

const SIZE = ['btn--medium', 'btn--large']

const COLOR = ['mint-gradiant'];

export const Button = ({
    children,
    type,
    onClick,
    buttonSize,
    buttonColor,
    buttonStyle

}) => {
    const checkButtonStyle = SIZE.includes(buttonStyle) ? buttonStyle : STYLE[0]
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0]
    const checkButtonColor = SIZE.includes(buttonColor) ? buttonColor : COLOR[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick ={onClick} type={type}>{children}</button>
    )
}