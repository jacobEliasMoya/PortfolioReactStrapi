import ListItem from '../lists/ListItem';
import AnchorLink from '../TextHeadingLinks/AnchorLink';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='flex items-center justify-center p-6 text-orange-300 border-b-4 border-orange-300'>
        <div className="flex items-center justify-start w-3/12 relative -top-6 ">
            <h1 className=' text-black bg-orange-300 p-4 w-max font-bold'>
                JM
            </h1>
        </div>

        <nav className="nav-container text-center w-6/12 uppercase ">
            <ul className='w-full flex items-center justify-between text-3xl '>
                <ListItem itemtext={'Home'} itemClass={'w-2/12'} itemChildren={<AnchorLink anchorLink={'#'} anchorTitle={'home-link'} anchorText={'Home'} anchorClass={'hover:font-bold '}/>}/>
                <ListItem itemtext={'Websites'} itemClass={'w-2/12'} itemChildren={<AnchorLink anchorLink={'#'} anchorTitle={'home-link'} anchorText={'Websites'} anchorClass={'hover:font-bold'}/>}/>
                <ListItem itemtext={'Projects'} itemClass={'w-2/12'} itemChildren={<AnchorLink anchorLink={'#'} anchorTitle={'home-link'} anchorText={'Projects'} anchorClass={'hover:font-bold'}/>}/>
                <ListItem itemtext={'Code'} itemClass={'w-2/12'} itemChildren={<AnchorLink anchorLink={'#'} anchorTitle={'home-link'} anchorText={'Code'} anchorClass={'hover:font-bold'}/>}/>
                <ListItem itemtext={'Contact'} itemClass={'w-2/12'} itemChildren={<AnchorLink anchorLink={'#'} anchorTitle={'home-link'} anchorText={'Contact'} anchorClass={'hover:font-bold'}/>}/>
            </ul>
        </nav>

        <div className="flex items-center justify-end logo-container text-right w-3/12 -top-6 relative">
            <h1 className=' text-black bg-orange-300 p-4 w-max font-bold'>
                JM
            </h1>
        </div>

    </header>
  )
}