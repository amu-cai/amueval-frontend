import metricIco from "../assets/metric_ico.svg";
import coinsIco from "../assets/coins_ico.svg";
import baselineIco from "../assets/baseline_ico.svg";
import clockIco from "../assets/clock_ico.svg";
import cupIco from "../assets/cup_ico.svg";
import textIco from "../assets/text_ico.svg";
import imageIco from "../assets/image_ico.svg";
import tabularIco from "../assets/tabular_ico.svg";

const ELEMENTS_PER_PAGE = 12;
const MINI_DESCRIPTION_LENGTH = 70;
const API = 'https://gonito.net/api';
const CHALLENGES_PAGE = '/challenges';
const CHALLENGE_PAGE = '/challenge';

const MINI_DESCRIPTION_RENDER = (description) => {
    if (description) {
        if (description.length <= MINI_DESCRIPTION_LENGTH)
            return description;
        return `${description.slice(0, MINI_DESCRIPTION_LENGTH)}...`;
    }
    return 'xxx';
}

const RENDER_ICO = (type) => {
    switch (type) {
        case 'metric':
            return metricIco;
        case 'prize':
            return coinsIco;
        case 'baseline':
            return baselineIco;
        case 'deadline':
            return clockIco;
        case 'bestScore':
            return cupIco;
        case 'text':
            return textIco;
        case 'image':
            return imageIco;
        case 'tabular':
            return tabularIco;
        default:
            return '';
    }
}

export {
    ELEMENTS_PER_PAGE,
    API,
    CHALLENGES_PAGE,
    CHALLENGE_PAGE,
    MINI_DESCRIPTION_LENGTH,
    MINI_DESCRIPTION_RENDER,
    RENDER_ICO
};