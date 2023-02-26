import styled from 'styled-components'

export const StyledQuantitySelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  min-width: 4.5rem;

  background-color: ${({ theme }) => theme.colors['base-button']};
  padding: 0.5rem;
  border-radius: 6px;

  span {
    color: ${({ theme }) => theme.colors['base-title']};
    line-height: 130%;
  }
`

export const SelectQuantityButton = styled.button`
  border: none;
  background-color: transparent;
  /* all: unset; */
  display: flex;

  color: ${({ theme }) => theme.colors.purple};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`
