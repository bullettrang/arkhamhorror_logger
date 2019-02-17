import gatheringIcon from '../assets/the_gathering_icon.png';
import mMasksIcon from '../assets/the_midnight_masks_icon.png';
import devourerIcon from '../assets/the_devourer_below_icon.png';
import gatheringBackgroundImage from '../assets/thegatheringtitleimg.jpg';
import midnightMasksBackgroundImage from '../assets/midnight_masks_background_image.jpg';
import devourerBackdgroundImage from '../assets/devourer_background_image.jpeg';

//chaos tokens
import onePlus from '../assets/oneplus.png';
import zero from '../assets/standardbutton.png';
import minusOne from '../assets/minusone.png';
import minusTwo from '../assets/minustwo.png';
import minusThree from '../assets/minusthree.png';
import minusFour from '../assets/minusfour.png';
import minusFive from '../assets/minusfive.png';
import minusSix from '../assets/minussix.png';
import minusEight from '../assets/minuseight.png';
import skull from '../assets/skull.png';
import cultist from '../assets/hardbutton.png';
import tablet from '../assets/tablet.png';
import tentacle from '../assets/expertbutton.png';
import eldersign from '../assets/easybutton.png';
const ScenarioObjs=[
    {
    NOZ: 
        {
           scenarios: 
            [
                    {
                        title:'The Gathering',
                        icon:gatheringIcon,
                        background_image:gatheringBackgroundImage   ,
                    },
                    {
                        title:'The Midnight Masks',
                        icon:mMasksIcon,
                        background_image:midnightMasksBackgroundImage,
                    },
                    {
                        title:'The Devourer Below',
                        icon:devourerIcon,
                        background_image:devourerBackdgroundImage,
                    },
            ],
            difficulties:[
                {
                    label:'easy',
                    tokens:[onePlus,onePlus,zero,zero,zero,minusOne,minusOne,minusOne,minusTwo,minusTwo,skull,skull,cultist,tablet,tentacle,eldersign]
                },
                {
                    label:'standard',
                    tokens:[onePlus,zero,zero,minusOne,minusOne,minusOne,minusTwo,minusTwo,minusThree,minusFour,skull,skull,cultist,tablet,tentacle,eldersign]
                },
                {
                    label:'hard',
                    tokens:[zero,zero,zero,minusOne,minusOne,minusTwo,minusTwo,minusThree,minusThree,minusFour,minusFive,skull,skull,cultist,tablet,tentacle,eldersign]
                },
                {
                    label:'expert',
                    tokens:[zero,minusOne,minusOne,minusTwo,minusTwo,minusThree,minusThree,minusFour,minusFour,minusFive,minusSix,minusEight,skull,skull,cultist,tablet,tentacle,eldersign]
                },
            ]    
        }

},
];

export default ScenarioObjs;