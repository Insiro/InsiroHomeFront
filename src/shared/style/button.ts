import { css } from "@emotion/react";

import AngleRight from "@/shared/assets/angle-right.png";
import AngleRightW from "@/shared/assets/angle-right-w.png";

export const Default = css`
    display: inline-block;
    border: 2px solid #000000;
    font-size: 16px;
    font-weight: 700;
    min-width: 189px;
    padding: 15px 28px;
    padding-right: 62px;
    letter-spacing: 0.08em;
    border-radius: 0;
    text-align: center;
    text-transform: uppercase;
    color: #323232;
    line-height: normal;
    cursor: pointer;
    background-color: transparent;
    background-image: url(${AngleRight});
    background-repeat: no-repeat;
    background-position: right 23px top 22px;
`;
export const Light = css`
    ${Default}
    color: #fff;
    border-color: #fff;
    background-image: url(${AngleRightW});
`;
export const SolidDark = css`
    ${Default}
    color: #fff;
    background-color: #323232;
    background-image: url(${AngleRightW});
`;
