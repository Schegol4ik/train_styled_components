import React from 'react';
import {CardImage} from "./CardImage.styled";
import rectangle from "../assets/images/Rectangle.svg";
import {DescriptionCard} from "./DescriptionCard.styled";
import {Title} from "./Title.styled";
import {Text} from "./Text.styled";
import {ControlPanel} from "./ControlPanel.styled";
import {Button} from "./Button.styled";
import {Card} from "./Card.styled";

type CardComponentType = {
    title: string
}
const CardComponent = ({title}: CardComponentType) => {
    return (
        <Card>
            <CardImage src={rectangle}/>
            <DescriptionCard>
                <Title>{title}</Title>
                <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
            </DescriptionCard>
            <ControlPanel>
                <Button color="#4E71FE" btnType="primary">See more</Button>
                <Button color="#4E71FE" btnType="outline">Save</Button>
            </ControlPanel>
        </Card>
    );
};

export default CardComponent;