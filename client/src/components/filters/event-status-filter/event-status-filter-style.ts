import styled from 'styled-components';

export const EventStatusFieldSet = styled.fieldset`

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & input {
    margin-right: 0.2rem;
  }


  @media (min-width: 1200px) {

    flex-direction: column;
    justify-content: flex-start;
  }
`;
