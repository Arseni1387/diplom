import styled from 'styled-components'
import colors from '../../constants/colors'
import Input from './Input'

interface Props {
  text: string
  id: string
}
const Checkbox = ({ text, id }: Props) => {
  return (
    <StyledCheckbox>
      <Input id={id} type='checkbox' />
      <CheckboxLabel htmlFor={id}>{text}</CheckboxLabel>
    </StyledCheckbox>
  )
}

const StyledCheckbox = styled.div`
  display: flex;
`

const CheckboxLabel = styled.label`
  display: flex;
  margin-top: 12px;
  padding-left: 5px;
  text-align: left;
  font-family: 'Inter Medium';
  line-height: 19px;
  font-size: 16px;
  color: ${colors.grey};
`

export default Checkbox
