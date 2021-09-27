import styled from "styled-components";
import { useGlobalContext } from "../../context";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <Container isModalOpen={isModalOpen}>
      <Wrapper>
        <Content>Hello, Signal Fish!</Content>
        <Button onClick={closeModal}>
          <FaTimes />
        </Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 400px;
  height: 250px;
  background: #cce6f7;
  display: ${(props) => (props.isModalOpen ? "block" : "none")};
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.p`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
export default Modal;
