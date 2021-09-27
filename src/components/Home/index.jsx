import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context";

const Home = () => {
  const { openSidebar, openModal } =
    useGlobalContext();

  return (
    <Container>
      <BarsButton
        onClick={openSidebar}
      >
        <FaBars />
      </BarsButton>
      <ModalButton onClick={openModal}>show modal</ModalButton>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const BarsButton = styled.button`
  position: absolute;
  text-transform: capitalize;
  top: 30px;
  left: 30px;
  background: transparent;
  font-size: 35px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const ModalButton = styled.button`
  position: absolute;
  text-transform: capitalize;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 25px;
  background: #cce6f7;

  &:hover {
    opacity: 0.6;
  }
`;

export default Home;
