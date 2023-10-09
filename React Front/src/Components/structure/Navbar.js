import Button from '../reusables/Button'
import ButtonFake from '../reusables/ButtonFake'
import {Link, Router, Route, Switch} from 'react-router-dom'
import star from '../../Assets/star.png'
import egg from '../../Assets/egg.jpg'
import command from '../../Assets/command.png'
import eye from '../../Assets/eye.png'
import skins from '../../Assets/skins.png'
import map from '../../Assets/map.png'
import home from '../../Assets/bed.png'
import compass from '../../Assets/compass.png'
import dust from '../../Assets/glow.png'
import redstone from '../../Assets/redstone.png'
const icons = [

    {
        image: home,
        text: 'Home'
    },
    {
        image: redstone,
        text: 'Contact Us'
    },
    {
        image: command,
        text: 'Settings'
    },
    {
        image: eye,
        text: 'Collections'
    },
    {
        image: egg,
        text: 'Users'
    },
    {
        image: compass,
        text: 'Servers'
    },
    {
        image: eye,
        text: 'Shaders'
    },
    {
        image: dust,
        text: 'Mods'
    },
    {
        image: map,
        text: 'Maps'
    },
    {
        image: skins,
        text: 'skins'
    },
    {
        image: star,
        text: 'Textures'
    }
    
]


const Navbar = () =>{

return(
      
<navbar >
<Link to="/"><ButtonFake/></Link>
<Link to="/Home"><Button image={icons[0].image} text={icons[0].text} > </Button></Link>
<Link to="/Contact"><Button image={icons[1].image} text={icons[1].text}> </Button></Link>
<Link to="/Settings"><Button image={icons[2].image} text={icons[2].text} ></Button></Link>
<Link to="/"><ButtonFake/></Link>
<Link to="/"><ButtonFake/></Link>
<Link to="/"><ButtonFake/></Link>
<Link to="/"><ButtonFake/></Link>
<Link to="/"><ButtonFake/></Link>
<Link to="/users"><Button image={icons[4].image} text={icons[4].text}></Button></Link>
<Link to="/servers"><Button image={icons[5].image} text={icons[5].text}></Button></Link>
<Link to="/shaders"><Button image={icons[6].image} text={icons[6].text}></Button></Link>
<Link to="/mods"><Button image={icons[7].image} text={icons[7].text}></Button></Link>
<Link to="/maps"><Button image={icons[8].image} text={icons[8].text} ></Button></Link>
<Link to="/skins"><Button image={icons[9].image} text={icons[9].text}></Button></Link>
<Link to="/textures"><Button image={icons[10].image} text={icons[10].text}></Button></Link>
<Link to="/"><ButtonFake/></Link>

    </navbar>

)

}
export default Navbar;