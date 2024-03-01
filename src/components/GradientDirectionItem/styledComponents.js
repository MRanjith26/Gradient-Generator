// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  width: 130px;
  list-style-type: none;
  margin-left: 10px;
  @media screen and (max-width: 767px) {
    width: 45%;
  }
`

export const DirectionBtn = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  border-radius: 6px;
  border: none;
  padding: 12px 24px;
  margin-bottom: 10px;
  outline: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
  margin: 3px;
`
