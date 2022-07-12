import React from "react";
import {FlexColumn} from "../../utils/containers";
import {Body, H2, Medium} from "../../utils/fonts";

const Csi = () => {
    return (
        <FlexColumn as='section' alignmentX='flex-start'>
            <H2 as='h2' margin='0 0 24px 0'>
                Center for artificial intelligence
            </H2>
            <Body as='p' margin='0 0 16px 0'>
                <Medium as='span' display='inline'>Gonito.net</Medium> belongs to the
                <Medium as='span' display='inline'>&nbsp;Artificial Intelligence Centre (CSI)&nbsp;</Medium>
                at Adam Mickiewicz University (UAM) which conducts research on the development of artificial
                intelligence, carries out scientific and research and development projects, integrates the research
                of scientists from various departments of Adam Mickiewicz University and outside it - from leading
                scientific centers in Poland and abroad as well as those employed in business entities.
            </Body>
            <Medium as='p'>
                CSI also cooperates with business entities in creating new solutions to be implemented in enterprises.
            </Medium>
        </FlexColumn>
    );
}

export default Csi;