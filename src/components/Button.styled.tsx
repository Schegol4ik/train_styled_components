import styled, {css} from "styled-components";

type ButtonType = {
    color?: string
    btnType?: "outline" | "primary"
}
export const Button = styled.button<ButtonType>`
    color: ${({color}) => color || "black"};
    width: 86px;
    height: 30px;
    font-size: 10px;
    border-radius: 5px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 200% */
    border: none;
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px rgba(133, 122, 122, 0.68);

    &:active {
        box-shadow: none;
        
    }

    ${({btnType}) => btnType === "outline" && css<ButtonType>`
        border: 2px solid ${({color}) => color || "transparent"};
        color: ${({color}) => color};
        background-color: transparent;
    `}

    ${({btnType}) => btnType === "primary" && css<ButtonType>`
        background-color: ${({color}) => color};
        color: #fff;
    `}

`