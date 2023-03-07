import styled from 'styled-components'
import colors from '../../constants/colors'

interface Props {
  text?: string
  style?: object
}

const Button = ({ text, style, ...props }: Props) => {
  return (
    <StyledButton style={style} {...props}>
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
  padding: 12px;
  font-family: 'Inter Medium';
  font-size: 15px;
  background: ${colors.blue};
  color: ${colors.white};
  border-radius: 6px;
  border: 0;
  cursor: pointer;
`

export default Button
