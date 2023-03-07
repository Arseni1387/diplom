import styled, { css } from 'styled-components'
import colors from '../../constants/colors'

interface Props {
  text?: string
  style?: object
  link?: boolean | undefined
  type?: string
  myHref?: string
  linkText?: string
}

const Text = ({ text, link, style, ...props }: Props) => {
  return (
    <StyledText style={style} {...props}>
      {text}
      {link && <Link href={props.myHref}>{'\u00A0' + props.linkText}</Link>}
    </StyledText>
  )
}

const StyledText = styled.div<Props>`
  display: flex;
  font-family: 'Inter Regular';
  line-height: 28px;
  font-size: 18px;
  text-align: left;
  color: ${colors.lightGray};

  ${(props) =>
    props.type === 'label' &&
    css`
      margin-top: 12px;
      font-family: 'Inter Medium';
      line-height: 19px;
      font-size: 16px;
      color: ${colors.grey};
    `}

  ${(props) =>
    props.type === 'title' &&
    css`
      font-family: 'Inter Bold';
      font-size: 30px;
      line-height: 36px;
      color: ${colors.black};
    `}
`

const Link = styled.a`
  color: ${colors.blue};
  text-decoration: none;
`

export default Text
