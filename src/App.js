import { styled } from "styled-components";
import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Category from "./components/Category";

function App() {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
    </Container>
  );
}

export default App;

const Container = styled.main`
  position: relative;

  /* calc() CSS 함수를 사용하면 CSS 속성의 값으로 계산식을 지정 */
  min-height: calc(100vh - 250px);
  /* overflow 속성은 요소의 박스에 내용이 더 길때, 어떻게 보일지 선택하는 속성 */
  /* overflow-x 속성은 x축, 즉 왼쪽과 오른쪽의 내용이 더 길 때(가로) */
  /* 부모요소의 범위를 넘어가는 자식 요소의 부분은 보이지 않게 */
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  /* 가상 요소 after를 이용하여 이미지를 백그라운데 넣기 */
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
