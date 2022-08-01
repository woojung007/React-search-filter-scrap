import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 673px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 202px;
  border-radius: 0 0 30px 30px;
`;

const Button = styled.button`
  width: 295px;
  height: 60px;
  background: #3478f6;
  border-radius: 16px;

  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #ffffff;
  cursor: pointer;
`;

const Image = styled.img`
  width: 27px;
  height: 36px;
  margin-bottom: 8px;
`;

const Content = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #6d6d6d;
  margin-bottom: 20px;
`;

const EmptyScrapPage = () => {
  const moveToHome = () => {
    window.location.href = "/";
  };
  return (
    <Wrapper>
      <Image src="/images/scrap.png" alt="scrap" />
      <Content>저장된 스크랩이 없습니다.</Content>
      <Button onClick={moveToHome}>스크랩 하러 가기</Button>
    </Wrapper>
  );
};

export default EmptyScrapPage;
