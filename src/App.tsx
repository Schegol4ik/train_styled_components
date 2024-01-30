import React, {useState} from 'react';
import {Box} from "./components/Box.styled";
import CardComponent from "./components/CardComponent";

const App = () => {

    const [valueTitle, setValueTitle] = useState('Headline')

    return (
        <Box>
            <CardComponent title={valueTitle}/>
            <CardComponent title={"Hello"}/>
        </Box>
    );
};

export default App;

