import { MediaQuery } from "@/shared/constants";
import { css } from "@emotion/react";
import { ReactNode, useMemo } from "react";

const ItemStyle = css`
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    color: #898d90;
    margin-right: 65px;
    cursor: pointer;
    padding: 10px 0;
    :last-child {
        margin-right: 0;
    }
    ${MediaQuery.Max991} {
        margin-right: 30px;
    }
`;

type FilterProps = { selected: Set<string>; children: ReactNode; onClick: React.MouseEventHandler<HTMLLIElement> };

export const FilterResetItem = (props: FilterProps) => {
    const isActive = useMemo(() => props.selected.size == 0, [props.selected]);
    return (
        <li css={[ItemStyle, isActive && { color: "#323232" }]} className="filter all" data-filter="*" onClick={props.onClick}>
            {props.children}
        </li>
    );
};

export const FilterItem = (props: FilterProps & { name: string }) => {
    const isActive = useMemo(() => props.selected.has(props.name), [props.name, props.selected]);

    return (
        <li css={[ItemStyle, isActive && { color: "#323232" }]} className={"filter " + props.name} onClick={props.onClick}>
            {props.children} {isActive}
        </li>
    );
};
