import styled from 'styled-components'
import colors from '../../constants/colors'

interface Props {
  style?: object
  text?: string
  type?: string | undefined
  id?: string | undefined
}

const Input = ({ style, text, ...props }: Props) => {
  return (
    <StyledInput style={style} {...props}>
      {text}
    </StyledInput>
  )
}

const StyledInput = styled.input`
  display: flex;
  padding: 12px;
  margin-top: 12px;
  font-family: 'Inter Medium';
  font-size: 15px;
  border: 1px solid ${colors.lightGray};
  border-radius: 6px;
  &:focus {
    outline-color: ${colors.blue};
  }
`

export default Input
