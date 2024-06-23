import { css } from "@emotion/react";

import AngleRight from "@/shared/assets/angle-right.png";
import AngleRightW from "@/shared/assets/angle-right-w.png";
import { Color } from "../ui/constants";

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
    color: ${Color.text5};
    line-height: normal;
    cursor: pointer;
    background-color: transparent;
    background-image: url(${AngleRight});
    background-repeat: no-repeat;
    background-position: right 23px top 22px;
    transition: all, 0.3s ease 0.3s;
    :hover {
        background-color: ${Color.base2};
        border-color: ${Color.base2};
    }
`;
export const Light = css`
    ${Default}
    color: #fff;
    border-color: #fff;
    background-image: url(${AngleRightW});
    :hover {
        background-image: url(${AngleRight});
        color: ${Color.text5};
    }
`;
export const SolidDark = css`
    ${Default}
    color: #fff;
    background-color: ${Color.text5};
    background-image: url(${AngleRightW});
    :hover {
        color: ${Color.text5};
        border-color: black;
        background-color: ${Color.base};
        background-image: url(${AngleRight});
    }
`;
