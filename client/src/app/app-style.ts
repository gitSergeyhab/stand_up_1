import styled from 'styled-components';


export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 70px;
    background: #0d0101;
    min-width: 320px;

`;

export const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: #ffffff;
    width: 100%;

    @media (min-width: 500px) {
        width: 80%;
    };

    @media (min-width: 900px) {
        width: 60%;
    };
`;
