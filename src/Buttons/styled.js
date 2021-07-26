import styled from "styled-components";

export const Section = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  font-size: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 20px;
    margin-top: 30px;
  }
`;
export const Toggle = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.teal};
  cursor: pointer;
  transition: 1s;
  &:disabled {
    color: ${({ theme }) => theme.color.grey};
    cursor: default;
  }
  &:disabled:hover {
    color: ${({ theme }) => theme.color.grey};
  }
  &:hover {
    filter: brightness(120%);
  }
  &:active {
    filter: brightness(140%);
    transition: none;
  }
`;
