import { useSearchModal } from "@/features/header/state";
import styled from "@emotion/styled";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
const StyledForm = styled.form`
    padding: 0 15px;
    input {
        width: 500px;
        font-size: 40px;
        border: none;
        border-bottom: 2px solid #333;
        background: none;
        color: #999;
    }
`;

export const SearchForm = () => {
    const { setOpen } = useSearchModal();
    const [inputValue, setInputValue] = useState("");
    const redirect = useNavigate();

    const search = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        redirect(`search?kq=${inputValue}`);
        setOpen(false);
    };

    return (
        <StyledForm action="search" onSubmit={search}>
            <input type="text" value={inputValue} onChange={(it) => setInputValue(it.target.value)} placeholder="Search here....." />
        </StyledForm>
    );
};
