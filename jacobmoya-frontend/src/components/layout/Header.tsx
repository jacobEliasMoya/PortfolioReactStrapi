import Image from '../media/Image'
import Logo from '../../assets/download.png';
import ListItem from '../lists/ListItem';
import AnchorLink from '../TextHeadingLinks/AnchorLink';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='flex'>
        <div className="logo-container w-1/2">
            <Image imageSrc={Logo} imageTitle={''} imageAlt={''} imageClass={''} />
        </div>

        <nav className="nav-container  w-1/2">
            <ul>
                <ListItem itemtext={'Home'} itemClass={''} itemChildren={<AnchorLink anchorLink={'#'} anchorTitle={'home-link'} anchorText={'Home'} anchorClass={''}/>}/>
            </ul>
        </nav>
    </header>
  )
}