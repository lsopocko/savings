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

    return (
      <div className={className}>
          <span className="goal"></span>
          <span className="crack">
            <span className="stream"></span>
          </span>
          <span className="water"></span>
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
        border-top: 2px dashed #fff;
        width: 30px;
        position: absolute;
        left:0;
        top: 30px;
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
    }

    .water {
        position: absolute;
        bottom: 0;
        background: #3e9eff;
        width: 100%;
        height: 50px;
        border-radius: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
`;


export default styledBucket;
