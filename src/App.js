import styled from 'styled-components';
import Media from 'react-media';

const H1 = styled.h1`
  color: green;
`

function App() {
    return (
        <>
            <Media query="(max-width: 768px)">
                <H1>
                    Hello Gonito mobile!
                </H1>
            </Media>
            <Media query="(min-width: 768px)">
                <H1>
                    Hello Gonito desktop!
                </H1>
            </Media>
        </>
    );
}

export default App;
