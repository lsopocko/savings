import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AddExpenditureAction } from '../features/expenditure/expenditureSlice';
import { AddIncomeAction } from '../features/income/incomeSlice';

interface FaucetProps {
    className?: string;
}

function Faucet({ className }: FaucetProps) {
    const [income, setIncome] = useState(0);
    const [incomeTitle, setIncomeTitle] = useState('');
    const [expenditure, setExpenditure] = useState(0);
    const [expenditureTitle, setExpenditureTitle] = useState('');
    const dispatch = useDispatch();

    const onAddIncome = () => {
        dispatch<AddIncomeAction>({type: 'income/add', income: income});
    }

    const onAddExpenditure = () => {
        dispatch<AddExpenditureAction>({type: 'expenditure/add', title: expenditureTitle, amount: expenditure });
    }

    const handleIncomeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIncome(parseInt(event.target.value));
    }

    const handleIncomeTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIncomeTitle(event.target.value);
    }

    const handleExpenditureChange = (event: ChangeEvent<HTMLInputElement>) => {
        setExpenditure(parseInt(event.target.value));
    }

    const handleExpenditureTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setExpenditureTitle(event.target.value);
    }

    return (
      <div className={className}>
          <span className="stream"></span>
          <img src="faucet.svg" alt=""/>
          <form>
                <p>
                    Add your monthly income and all your monthly expenses to visualize when you reach your goal - <b>350k</b>
                </p>
                <h2>Add income</h2>
                <input type="text" name="incomeTitle" placeholder="Title" onChange={handleIncomeTitleChange}/>
                <input type="number" name="income" placeholder="Amount" onChange={handleIncomeChange}/>
                <input type="button" onClick={onAddIncome} value="Add"/>

                <br/><br/><br/>

                <h2>Add expenditure</h2>
                <input type="text" name="title" placeholder="Title" onChange={handleExpenditureTitleChange}/>
                <input type="number" name="expenditure" placeholder="Amount" onChange={handleExpenditureChange}/>
                <input type="button" onClick={onAddExpenditure} value="Add"/>
          </form>
      </div>
    );
}

const styledFaucet = styled(Faucet)`
    margin-left: 120px;
    position: relative;
    margin-bottom: 50px;

    .stream {
        position: absolute;
        width: 5px;
        height: 494px;
        background: #3e9eff;
        top: 260px;
        left: 10px;
        z-index: 10;
    }

    form {
        position: absolute;
        top: 0;
        left: 300px;
        bottom: 0;
        border-left: 10px solid #ffffff;
        padding-left: 30px;

        p {
            color: #ffffff;
            font-size: 17px;
        }
    }

    input[type=text],
    input[type=number] {
        border: none;
        padding: 3px;
        margin-bottom: 15px;
        background: transparent;
        border-bottom: 1px solid #fafafa;
        color: #fff;

        &:focus,
        &:active {
            outline: none;
        }
    }

    input[type=button] {
        border: none;
        padding: 5px 13px;
        cursor: pointer;
    }

    img {
        position: relative;
        width: 300px;
        height: 300px;
        z-index: 20;
    }

    h2 {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
    }
`;


export default styledFaucet;
