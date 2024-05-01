import { TextBlock } from "@/widgets/Text";
import { BlockTitle } from "@/widgets/Text/ui/SmallTitle";

export const Home = () => {
    return (
        <TextBlock style={{ padding: "0 15px", paddingTop: "160px" }}>
            <div className="row" style={{ maxWidth: "100%" }}>
                <div className="col-xl-6 p-0">
                    <TextBlock>
                        <span>about me</span>
                        <h2>Profile</h2>
                        <p>will be fill</p>
                        <TextBlock>
                            <BlockTitle>Usable Languages</BlockTitle>
                            <br />
                            <p>
                                <li>lang 1</li>
                            </p>
                            <BlockTitle>Skills</BlockTitle>
                            <br />

                            <li>
                                <span>studying</span>
                                <br />
                            </li>

                            <p></p>
                        </TextBlock>
                    </TextBlock>
                </div>
            </div>
        </TextBlock>
    );
};
