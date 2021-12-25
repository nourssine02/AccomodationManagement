import React  from 'react';
import styled from 'styled-components';

const Section = styled.section`
    justify-content:center;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
 



`;
const Container = styled.div`

    display: flex;
    flex: 1;
    align-items: center;
    max-width: fit-content;
    padding: 20px 50px ;
    height: 100px;
    border: 1px solid lightgray;
    border-radius: 80px;
    box-shadow: 5px 5px 5px 5px gray;
    margin-top: 100px;
    


`;
const Select = styled.select`
    padding: 5px;
    border: none;
    outline: none;
    width: 80%;
    margin-bottom: 3px;
    background-color: #fff;
    font-family: 'Lora' , sans-serif;
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

const Button = styled.button`
    border-radius: 30px;
    padding: 12px 40px;
    

`;
const ColumnLocation = styled.div``;
const ColumnProperty = styled.div``;
const ColumnPrice = styled.div``;
const SearchSection = () => {
    return (
        <Section>
            <Container>


                <ColumnLocation>
                    <Select>
                        <option>Location</option>
                        <option>Location 1</option>
                        <option>Location 2</option>
                    </Select>
                    <Input type='text' placeholder='Location' /> 
                </ColumnLocation>

                <ColumnProperty>
                    <Select>
                        <option>Property Type</option>
                        <option>Type 1</option>
                        <option>Type 2</option>
                    </Select>
                    <Input type='text' placeholder='Property Type' />

                </ColumnProperty>

                <ColumnPrice>
                    <Select>
                        <option>Max Price</option>
                        <option>Min Price</option>
                        <option>Average</option>
                    </Select>
                    <Input type='text' placeholder='150$' />

                </ColumnPrice>
                <Button>Search</Button>
            </Container>
           
          
        </Section>
        
    )
}

export default SearchSection
