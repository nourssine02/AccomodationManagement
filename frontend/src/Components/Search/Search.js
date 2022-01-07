import React, { useState } from 'react';
import styled from 'styled-components';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@mui/icons-material/People';
import { useHistory } from 'react-router-dom';


const Container = styled.div`
    position: sticky;
    top: 35px;
    left: 25%;
    width: 100vw; 

    h2{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 559px;
        padding: 10px;
        background-color: white;
        position: absolute;
        left: 0;
        top: 380px;
    }
  
    
`;
const Input = styled.input`
    width: 539px;
    padding: 20px;
    position: absolute;
    left: 0;
    height: 30px;
    top: 420px;
    border: none;
    &:focus{
        outline-width: 0;
    }
`;
const Button = styled.button`
    position: absolute;
    left: 0;
    top: 480px;
    text-transform: inherit;
    background-color: green;
    color: #fff;
    width: 579px;

    &:hover{
        background-color: white;
        color: green;
    }
`;
function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }

    const handleSelect = (range) => {
        setStartDate(range.selection.startDate);
        setEndDate(range.selection.endDate);
    }
    return (
        <Container>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>Number of guests <PeopleIcon />  </h2>
            <Input min={0} defaultValue={2} type="number" />
            <Button onClick={() => history.push('/search')} >Search</Button>
        </Container>
    )
}
export default Search