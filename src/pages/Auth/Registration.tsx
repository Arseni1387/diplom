import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../components/UI/Button'
import Input from '../../components/UI/Input'
import Text from '../../components/UI/Text'
import colors from '../../constants/colors'
import { Container, Form, Line, ImgTrain } from './AuthStyles'

const Registration = () => {
  return (
    <Container>
      <LeftFrame>
        <ImgTrain src={require('../../assets/train.png')} />
      </LeftFrame>
      <RightFrame>
        <ArrowBack href='/login'>
          <Img src='https://cdn0.iconfinder.com/data/icons/web-seo-and-advertising-media-1/512/218_Arrow_Arrows_Back-512.png' />
          <Text text='Back' />
        </ArrowBack>
        <FormContainer>
          <Form>
            <Text type='title' text='Account Signup' />
            <Text text='Become a member and enjoy exclusive promotions.' />
            <Line />
            <Text type='label' text='surname' />
            <Input type='text' />
            <Text type='label' text='name' />
            <Input type='text' />
            <Text type='label' text='email' />
            <Input type='email' />
            <Text type='label' text='password' />
            <Input type='password' />
            <Button text='Registration' />
          </Form>
        </FormContainer>
      </RightFrame>
    </Container>
  )
}

const RightFrame = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 50%;
  min-height: 100vh;
`
const LeftFrame = styled(RightFrame)`
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${colors.blue};
`

const FormContainer = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  justify-content: center;
  align-self: center;
`

const Img = styled.img`
  position: relative;
  display: flex;
  width: 30px;
  height: 30px;
`

const ArrowBack = styled.a`
  position: relative;
  display: flex;
  min-width: 10%;
  margin-top: 12px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    transition: all 0.3s ease-in-out 0s;
    box-shadow: 2px 5px 25px -3px ${colors.buttonBack};
    border-radius: 10px;
  }
`

export default Registration
