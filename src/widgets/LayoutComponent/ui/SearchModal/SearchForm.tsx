import styled from "@emotion/styled";
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
    return (
        <StyledForm action="search">
            <input type="text" name="kq" id="search-input" placeholder="Search here....." />
        </StyledForm>
    );
};
