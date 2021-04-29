import styled from 'styled-components';

interface FaucetProps {
    className?: string;
}

function Faucet({ className }: FaucetProps) {
    return (
      <div className={className}>
          <span className="stream"></span>
          <img src="faucet.svg" alt=""/>
          <form>
              <h2>Add income</h2>
                <fieldset>
                    <input type="text"/>
                    <input type="value"/>
                </fieldset>
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
    }

    img {
        position: relative;
        width: 300px;
        height: 300px;
        z-index: 20;
    }
`;


export default styledFaucet;
