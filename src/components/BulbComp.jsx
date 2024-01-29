import React, { useState } from 'react';
import styled from 'styled-components';


function Bulb() {

    const [isBulb1On, setIsBulb1On] = useState(false);
    const [isBulb2On, setIsBulb2On] = useState(false);

 
    const toggleBulb1 = () => {
        setIsBulb1On((prevIsBulb1On) => !prevIsBulb1On);
    };
    const toggleBulb2 = () => {
        setIsBulb2On((prevIsBulb2On) => !prevIsBulb2On);
    };
    
    const BulbContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 300px;
    padding: 50px;
    border: 1px solid black;
    width: 400px;
  `;

    const BulbCircle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${(props) => (props.isOn ? '#ffdd57' : '#e0e0e0')};
    margin-bottom: 20px;
    transition: background-color 0.3s ease-in-out;
  `;

    const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 100px;
    background-color: ${props => (props.isOn ? '#FF5733' : '#4CAF50')};
    color: white;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s ease-in-out;
    `;

    return (
        <div style={{display:'flex',justifyContent:'center'}}>
        <BulbContainer>
        <div>
          <BulbCircle isOn={isBulb1On} />
          <Button isOn={isBulb1On} onClick={toggleBulb1}>
            {isBulb1On ? 'Turn Off' : 'Turn On'}
          </Button>
        </div>
        <div>
          <BulbCircle isOn={isBulb2On} />
          <Button isOn={isBulb2On} onClick={toggleBulb2}>
            {isBulb2On ? 'Turn Off' : 'Turn On'}
          </Button>
        </div>
      </BulbContainer>
      </div>
      
    );
  };

export default Bulb;
