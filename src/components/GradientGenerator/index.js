import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  AppContent,
  Heading,
  DirectionListContainer,
  ListHeading,
  PickColorHeading,
  ColorCardContainer,
  ColorInputCard,
  ColorInput,
  ColorText,
  GenerateBtn,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    GradientDirection: gradientDirectionsList[0].value,
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    GradientValue: `to ${
      gradientDirectionsList[0].value
    }, ${'#8ae323'}, ${'#014f7b'}`,
  }

  getActiveId = activeValue => {
    this.setState({GradientDirection: activeValue})
  }

  renderDirectionOption = () => {
    const {GradientDirection} = this.state
    return (
      <>
        <ListHeading>Choose Direction</ListHeading>
        <DirectionListContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              directionDetails={eachItem}
              key={eachItem.directionId}
              isActive={GradientDirection === eachItem.value}
              getActiveId={this.getActiveId}
            />
          ))}
        </DirectionListContainer>
      </>
    )
  }

  onChangeColorOne = event => {
    this.setState({colorOne: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({colorTwo: event.target.value})
  }

  onGenerateColors = () => {
    const {GradientDirection, colorOne, colorTwo} = this.state

    this.setState({
      GradientValue: `to ${GradientDirection}, ${colorOne}, ${colorTwo}`,
    })
  }

  render() {
    const {GradientValue, colorOne, colorTwo} = this.state
    return (
      <AppContainer
        GradientValue={GradientValue}
        data-testid="gradientGenerator"
      >
        <AppContent>
          <Heading>Generate a CSS Color Gradient</Heading>
          {this.renderDirectionOption()}
          <PickColorHeading>Pick the Colors</PickColorHeading>
          <ColorCardContainer>
            <ColorInputCard>
              <ColorText>{colorOne}</ColorText>
              <ColorInput
                type="color"
                value={colorOne}
                onChange={this.onChangeColorOne}
              />
            </ColorInputCard>
            <ColorInputCard>
              <ColorText>{colorTwo}</ColorText>
              <ColorInput
                type="color"
                value={colorTwo}
                onChange={this.onChangeColorTwo}
              />
            </ColorInputCard>
          </ColorCardContainer>
          <GenerateBtn type="button" onClick={this.onGenerateColors}>
            Generate
          </GenerateBtn>
        </AppContent>
      </AppContainer>
    )
  }
}
export default GradientGenerator
