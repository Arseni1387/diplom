import styled from 'styled-components'
import colors from '../../constants/colors'

export const Form = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 410px;
  min-width: 200px;
`

export const Container = styled.div`
  position: fixed;
  overflow:auto;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
`

export const Line = styled.hr`
  margin-top: 12px;
  border: 1px solid ${colors.line};
`

export const ImgTrain = styled.img`
  min-width: 40vw;
  margin-left:10%;
  margin-right:10%;
`


