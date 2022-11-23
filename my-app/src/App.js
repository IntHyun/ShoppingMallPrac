import Home from './pages/Home/Home';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import styled from 'styled-components';

const GlobalStlyes = createGlobalStyle`
  ${reset}

  button {
    border: none;
    cursor: pointer;
    padding: 0;
}
`;

const MainStyled = styled.main`
    display: flex;
    justify-content: center;
    margin-top: 160px;
    padding-bottom: 156px;
`;

function App() {
    return (
        <>
            <GlobalStlyes />
            <MainStyled>
                <Home />
            </MainStyled>
        </>
    );
}
export default App;
