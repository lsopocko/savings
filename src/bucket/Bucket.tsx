import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { SavingsState } from '../redux/state';

interface BucketProps {
    className?: string;
}

function Bucket({ className }: BucketProps) {
    const waterLevel = useSelector((state: SavingsState) => state.water.level);

    useEffect(() => {
        console.log('waterLevel', waterLevel);
    }, [waterLevel]);

    const divStyle = {
        height: `${waterLevel}%`
    };

    return (
      <div className={className}>
          <span className="goal">350 000 zł</span>
          <span className="crack"></span>
          <span className="crack"></span>
          <span className="water" style={divStyle}></span>
      </div>
    );
}

const styledBucket = styled(Bucket)`
    width: 300px;
    height: 400px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    box-shadow: 0 5px 0 5px rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
    position: relative;

    .goal {
        position: absolute;
        left: -82px;
        top: 30px;
        z-index: 10;
        color: #fff;
        font-weight: 500;
        padding-bottom: 5px;

        &:before {
            display: block;
            position: absolute;
            top: 50%;
            margin-top: -1px;
            left: 110%;
            content: '';
            width: 30px;
            border-top: 2px dashed #ff0000;
        }
    }

    .stream {
        position: absolute;
        width: 5px;
        height: 100px;
        background: #3e9eff;
        top:50%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 30;
    }

    .crack {
        position: absolute;
        bottom: 10px;
        right: 10px;
        width: 5px;
        height: 5px;
        border: 2px solid #fff;
        border-radius: 50%;
        z-index: 20;

        &:before {
            content: '';
            position: absolute;
            width: 5px;
            height: 100px;
            background: #3e9eff;
            top:50%;
            left: 50%;
            transform: translateX(-50%);
            z-index: 30;
        }
    }

    .crack + .crack {
        bottom: 15px;
        right: 130px;
    }

    .water {
        position: absolute;
        bottom: 0;
        background: #3e9eff;
        width: 100%;
        border-radius: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
`;


export default styledBucket;
