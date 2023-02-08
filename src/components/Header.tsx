import styled from "styled-components";

const Header = styled.header`
    position: sticky;
    width: 100%;
    height: 150px;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #660101;
    padding: 0px 40px;
    filter: drop-shadow(0px 5px 8px #5c5c5c);

    &:first-child{
        color: #eaeaea;
        font-size: 28px;
    }
`;

export default Header;