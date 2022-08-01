import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Layout from "./commons/layout/index";
import GlobalStyles from "./commons/styles/globalStyles";
import FilterModal from "./components/modal";
import ScrapPage from "./components/scrap/Scrap";
import EmptyScrapPage from "./components/scrap/EmptyScrap";
import HomePage from "./components/home/index";

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modal" element={<FilterModal />} />
          <Route path="/scrap" element={<ScrapPage />} />
          <Route path="/empty-scrap" element={<EmptyScrapPage />} />
        </Routes>
      </Layout>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ebebeb;
`;

export default App;
