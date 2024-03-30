import { ReactNode } from "react";

const SmallTitle = (props: { children: ReactNode }) => {
    return (
        <h3
            style={{
                textDecoration: "underline",
                textDecorationColor: "grey",
                textUnderlineOffset: "under",
            }}
        >
            {props.children}
        </h3>
    );
};
export const Home = () => {
    return (
        <div className="content-warp">
            <div className="row">
                <div className="col-xl-6 p-0">
                    <div className="content-text">
                        <span>about me</span>
                        <h2>Profile</h2>
                        <p>will be fill</p>
                        <div className="content-text">
                            <SmallTitle>Usable Languages</SmallTitle>
                            <br />
                            <p>
                                <li>lang 1</li>
                            </p>
                            <SmallTitle>Skills</SmallTitle>
                            <br />

                            <li>
                                <span>studying</span>
                                <br />
                            </li>

                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
