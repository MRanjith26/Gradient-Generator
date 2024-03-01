// Write your code here
import {ListItem, DirectionBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, getActiveId} = props
  const {value, displayText} = directionDetails

  const onClickGetValue = event => {
    getActiveId(event.target.value)
  }

  return (
    <ListItem>
      <DirectionBtn value={value} isActive={isActive} onClick={onClickGetValue}>
        {displayText}
      </DirectionBtn>
    </ListItem>
  )
}
export default GradientDirectionItem
