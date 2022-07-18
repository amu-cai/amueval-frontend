import React from "react";
import Media from "react-media";
import theme from "../../../utils/theme";
import _mobileRender from "./_mobileRender";
import _desktopRender from "./_desktopRender";

const Leaderboard = () => {
    const [variant, setVariant] = React.useState(0);

    const mobileRender = () => {
        return _mobileRender(variant, setVariant);
    }

    const desktopRender = () => {
        return _desktopRender(variant, setVariant);
    }

    return (
        <>
            <Media query={theme.mobile}>
                {mobileRender()}
            </Media>
            <Media query={theme.desktop}>
                {desktopRender()}
            </Media>
        </>
    )


}

export default Leaderboard;