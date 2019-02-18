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


//Scenario title consts
export const NOZ_TITLES={
    THE_GATHERING:'The Gathering',
    THE_MIDNIGHT_MASKS:'The Midnight Masks',
    THE_DEVOURER_WITHIN:'The Devourer Below'
}



//Scenario objects
const ScenarioObjs=[
    {   
    NOZ: 
        {
           scenarios: 
            [
                    {
                        title:NOZ_TITLES.THE_GATHERING,
                        icon:gatheringIcon,
                        background_image:gatheringBackgroundImage   ,
                    },
                    {
                        title:NOZ_TITLES.THE_MIDNIGHT_MASKS,
                        icon:mMasksIcon,
                        background_image:midnightMasksBackgroundImage,
                    },
                    {
                        title:NOZ_TITLES.THE_DEVOURER_WITHIN,
                        icon:devourerIcon,
                        background_image:devourerBackdgroundImage,
                    },
            ],
            difficulties:
            [
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
            ],
            setup:
            [
                {
                label:NOZ_TITLES.THE_GATHERING,
                procedures:['Gather all cards from the following encounter sets: The Gathering, Rats, Ghouls, Striking Fear, Ancient Evils, and Chilling Cold','Put the Study location into play. Set each other location aside, out of play. Each investigator begins play in the Study.',
            'Set the Ghoul Priest and Lita Chantler cards aside, out of play.','Shuffle the remainder of the encounter cards (from the previously gathered encounter sets) to form the encounter deck.']
            },
            {
                label:NOZ_TITLES.THE_MIDNIGHT_MASKS,
                procedures:['Gather all cards from the following encounter sets: The Midnight Masks, Chilling Cold, Nightgaunts, Dark Cult, and Locked Doors.',
            'Set the Cult of Umôrdhoth encounter set aside as a separate “Cultist deck,” and shuffle it.','Choose one of the two Downtown locations and one of the two Southside locations at random and put them into play. Remove the other versions of Downtown and Southside from the game. Then, put the Northside, Easttown, Rivertown, St. Mary’s Hospital, Graveyard, Miskatonic University, and Your House locations into play. ']
            }
        ]
},
    }
];

export default ScenarioObjs;