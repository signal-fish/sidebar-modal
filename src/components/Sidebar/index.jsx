import logo from "../../assets/images/signal-fish.jpg";
import { useGlobalContext } from "../../context";
import { FaTimes } from "react-icons/fa";
import { social, links } from "../../data";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <Container isSidebarOpen={isSidebarOpen}>
      <Header>
        <Image src={logo} alt="signal fish"></Image>
        <Name>Signal Fish</Name>
        <Button onClick={closeSidebar}>
          <FaTimes />
        </Button>
      </Header>
      <Links>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <LinkItem key={id}>
              <PageLink href={url}>
                <Icon>{icon}</Icon>
                {text}
              </PageLink>
            </LinkItem>
          );
        })}
      </Links>
      <Social>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <SocialItem key={id}>
              <SocialLink href={url}>{icon}</SocialLink>
            </SocialItem>
          );
        })}
      </Social>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 320px;
  height: 100vh;
  background: #cce6f7;
  transition: all 0.6s linear;
  transform: ${(props) =>
    props.isSidebarOpen ? "translate(0)" : "translate(-100%)"};

  ${mobile({
    width: "100vw"
  })}
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin: 20px;
`;

const Name = styled.h3`
  margin: 20px 0;
  font-size: 26px;
`;

const Button = styled.button`
  margin-left: 50px;
  background: transparent;
  border: none;
  font-size: 35px;
  padding-top: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const Links = styled.ul`
  list-style: none;
  font-size: 28px;
  margin: 0;
  padding: 0;
`;

const LinkItem = styled.li`
  margin: 30px 0;
`;

const PageLink = styled.a`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  padding-left: 20px;

  &:hover {
    background: lightskyblue;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Social = styled.ul`
  position: absolute;
  bottom: 30px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;

  ${mobile({
    width: "100%",
    justifyContent: "space-around",
    marginRight: "0",
    padding: "0",
  })}
`;

const SocialItem = styled.li`
  margin: 10px;
  font-size: 26px;

  ${mobile({
    margin: "0",
  })}
`;

const SocialLink = styled.a`
  text-decoration: none;

  &:hover {
    opacity: .6;
  }
`;

export default Sidebar;
