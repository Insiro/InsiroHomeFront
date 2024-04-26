import { Color, MediaQuery } from "@/shared/ui/constants";
import styled from "@emotion/styled";
export const TextBlock = styled.div`
    padding-left: 87px;
    padding-right: 35px;
    span {
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        color: ${Color.text2};
        letter-spacing: 2px;
    }
    h2 {
        margin-bottom: 30px;
        font-size: 48px;
    }
    @media (max-width: 1350px) {
        padding-left: 40px;
        padding-right: 30px;
    }
    ${MediaQuery.Max1199} {
        padding-left: 30px;
        padding-right: 30px;
    }
`;
