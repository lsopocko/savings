import { useEffect } from 'react';
import styled from 'styled-components';
import Bucket from './bucket/Bucket';
import Faucet from './faucet/Faucet';
import { interval } from 'rxjs';
import { useDispatch, useSelector } from 'react-redux';

interface AppProps {
    className?: string;
}

function App({ className }: AppProps) {
    const dispatch = useDispatch();
    const income = useSelector((state: any) => state.income);
    const expenditure = useSelector((state: any) => state.expenditure);

    useEffect(() => {
        console.log('income', income);
        console.log('expenditure', expenditure);
        dispatch({type: 'water/recalculateLevel' });
    }, [dispatch, income, expenditure]);


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
