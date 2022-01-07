import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import Search from './Search'

const Section = styled.section`
    justify-content:center;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    width: 100%;
 
`;
const Container = styled.div`
`;
const InputSearch = styled.div`

    display: flex;
    flex: 1;
    align-items: center;
    max-width: fit-content;
    padding: 20px 50px ;
    height: 60px;
    border: 1px solid lightgray;
    border-radius: 80px;
    //box-shadow: 5px 5px 5px 5px gray;
    margin-top: 100px;
`;


const Input = styled.input.attrs({ type: "text" })`
    border: 1px solid #fff;
    outline: none;
    padding: 8px;
    &:focus{
        outline: none;
        box-shadow: none;
        border: 1px solid var(--color-secondary);
    }

`;

const ShowSearch = styled.div`
    display: flex;
    flex-direction: column;

`;
const Button = styled.button`
    background-color: white;
    font-weight: 900;
    text-transform: inherit;
    color: green;
    outline: none;
    border: none;
    margin-top: 20px;
`;


const SearchSection = () => {
    //const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <Section>
            <Container>
                <InputSearch>
                    <Input type='text' placeholder='Search...' />
                    <FaSearch />
                </InputSearch>
                <ShowSearch>
                    {showSearch && <Search />}
                    <Button onClick={() => setShowSearch(!showSearch)} >{showSearch ? "Hide" : "Search Dates"}</Button>
                </ShowSearch>


            </Container>
        </Section>

    )
}

export default SearchSection
