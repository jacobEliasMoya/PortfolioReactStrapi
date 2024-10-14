import ListItem from '../lists/ListItem';
import AnchorLink from '../TextHeadingLinks/AnchorLink';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='flex items-center justify-center p-16 text-white	'>
        <div className="logo-container w-1/2">
            {/* <Image imageSrc={Logo} imageTitle={''} imageAlt={''} imageClass={'w-16'} /> */}
            <h1 className='bg-white text-black p-4 w-max font-bold'>
                JM
            </h1>
        </div>

        <nav className="nav-container text-center w-1/2">
            <ul className='w-full flex items-center justify-between'>
                <ListItem itemtext={'Home'} itemClass={'w-2/12'} itemChildren={<AnchorLink anchorLink={'#'} anchorTitle={'home-link'} anchorText={'Home'} anchorClass={''}/>}/>
                <ListItem itemtext={'Websites'} itemClass={'w-2/12'} itemChildren={<AnchorLink anchorLink={'#'} anchorTitle={'home-link'} anchorText={'Websites'} anchorClass={''}/>}/>
                <ListItem itemtext={'Projects'} itemClass={'w-2/12'} itemChildren={<AnchorLink anchorLink={'#'} anchorTitle={'home-link'} anchorText={'Projects'} anchorClass={''}/>}/>
                <ListItem itemtext={'Code'} itemClass={'w-2/12'} itemChildren={<AnchorLink anchorLink={'#'} anchorTitle={'home-link'} anchorText={'Code'} anchorClass={''}/>}/>
                <ListItem itemtext={'Contact'} itemClass={'w-2/12'} itemChildren={<AnchorLink anchorLink={'#'} anchorTitle={'home-link'} anchorText={'Contact'} anchorClass={''}/>}/>
            </ul>
        </nav>
    </header>
  )
}