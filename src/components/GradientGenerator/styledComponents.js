// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(${props => props.GradientValue});
`
export const AppContent = styled.div`
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 80%;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  text-align: center;
`
export const DirectionListContainer = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 20px 0px;
`
export const ListHeading = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: #ffffff;
`
export const PickColorHeading = styled(ListHeading)`
  font-weight: 400;
  font-size: 23px;
`
export const ColorCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 400px;
  @media screen and (max-width: 767px) {
    min-width: 300px;
  }
`

export const ColorInput = styled.input`
  background-color: inherit;
  border: none;
  outline: none;
  width: 100px;
  height: 50px;
  cursor: pointer;
`

export const ColorInputCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ColorText = styled(ListHeading)`
  font-size: 20px;
  font-weight: 400;
`
export const GenerateBtn = styled.button`
  background-color: #00c9b7;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 550;
  color: #1e293b;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  border: none;
  margin-top: 30px;
  padding: 12px 24px;
`
