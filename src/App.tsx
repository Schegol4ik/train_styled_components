import React from 'react';
import {Card} from "./components/Card.styled";
import {CardImage} from "./components/CardImage.styled";
import {DescriptionCard} from "./components/DescriptionCard.styled";
import {Title} from "./components/Title.styled";
import {Text} from "./components/Text.styled";
import {ControlPanel} from "./components/ControlPanel.styled";
import {Button} from "./components/Button.styled";
import rectangle from "./assets/images/Rectangle.svg"
import {Box} from "./components/Box.styled";

const App = () => {
    return (
        <Box>
            <Card>
                <CardImage src={rectangle}/>
                <DescriptionCard>
                    <Title>Headline</Title>
                    <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                </DescriptionCard>
                <ControlPanel>
                    <Button color="#4E71FE" btnType="primary">See more</Button>
                    <Button color="#4E71FE" btnType="outline">Save</Button>
                </ControlPanel>
            </Card>
        </Box>
    );
};

export default App;

