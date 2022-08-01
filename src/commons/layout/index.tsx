import Header from "./header";
import Nav from "./nav";
import styled from "styled-components";

const Layout = (props: any) => {
  return (
    <Wrapper>
      <Header />
      <Body>{props.children}</Body>
      <Nav />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 375px;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  background-color: #f0f1f4;
  border-radius: 0 0 30px 30px;
`;
export default Layout;
