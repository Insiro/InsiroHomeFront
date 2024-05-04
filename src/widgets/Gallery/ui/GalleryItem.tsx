import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import { buttonStyle } from "@/shared/style";
import { Centralizer } from "@/widgets/Centralizer";

export type GalleryItemProps = {
    to: string;
    image?: string;
    title: string;
    tags?: string[];
};
type FilteredItemProps = GalleryItemProps & {
    selected: Set<string>;
};

const ItemStyle = css`
    border: black;
    border-radius: 10px;
    border-width: 1.5px;
    border-style: solid;
    padding: 3px;
    margin: 5px;
    position: relative;

    .hover-links {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: #323232;
        display: -ms-flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        opacity: 0;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        transition: all 0.4s;
        text-align: center;
    }
    :hover .hover-links {
        opacity: 1;
    }
    a {
        min-width: 150px;
        position: relative;
        left: -20px;
        opacity: 0;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        transition: all 0.4s;
    }

    :hover a {
        left: 0;
        opacity: 1;
        -webkit-transition: all 0.2s ease 0.4s;
        -o-transition: all 0.2s ease 0.4s;
        transition: all 0.2s ease 0.4s;
    }
`;

export const GalleryItem = (props: GalleryItemProps | FilteredItemProps) => {
    return (
        <div css={[ItemStyle]} className="gallery-item">
            <h3 style={{ textAlign: "center" }}>{props.title}</h3>
            {props.image != null && (
                <Centralizer>
                    <img src={props.image} alt="project icon" style={{ maxHeight: "400px", maxWidth: "100%" }} />
                </Centralizer>
            )}

            <div className="hover-links">
                <Link to={props.to} css={buttonStyle.Light}>
                    about
                </Link>
            </div>
        </div>
    );
};
