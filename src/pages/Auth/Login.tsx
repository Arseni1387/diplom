import styled from 'styled-components'
import Button from '../../components/UI/Button'
import Checkbox from '../../components/UI/Checkbox'
import Input from '../../components/UI/Input'
import Text from '../../components/UI/Text'
import colors from '../../constants/colors'
import { Container, Form, Line, ImgTrain } from './AuthStyles'

const Login = () => {
  return (
    <Container>
      <Frame style={{ backgroundColor: colors.blue }}>
        <ImgTrain src={require('../../assets/train.png')} />
      </Frame>
      <Frame>
        <Form style={{ marginLeft: '10%', marginRight: '10% ' }}>
          <Text type='title' text='Account Login' />
          <Text
            text='If you are already a member you can login with your email address
            and password.'
          />
          <Line />
          <Text type='label' text='email' />
          <Input type='email' />
          <Text type='label' text='password' />
          <Input type='password' />
          <Checkbox text='Remember me' id='Remember me' />
          <Button text='Login' />
          <TextBlock>
            <Text
              text='Dont have an account ?'
              link
              myHref='/registration'
              linkText='Sign up here'
            />
          </TextBlock>
        </Form>
      </Frame>
    </Container>
  )
}

const Frame = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-height: 100vh; ;
`

const TextBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 25px;
`

export default Login
