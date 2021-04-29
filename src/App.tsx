import styled from 'styled-components';
import Bucket from './bucket/Bucket';
import Faucet from './faucet/Faucet';

interface AppProps {
    className?: string;
}


function App({ className }: AppProps) {
  return (
    <div className={className}>
        <Faucet></Faucet>
        <Bucket></Bucket>
    </div>
  );
}

const styledApp = styled(App)`
    margin: auto;
    padding: 20px;
    width: 600px;
`;

export default styledApp;
