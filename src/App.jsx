import styled from "styled-components"
import Home from './components/Home'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <Container>
      <Home></Home>
      <Modal></Modal>
      <Sidebar></Sidebar>
    </Container>
  )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
`
export default App
