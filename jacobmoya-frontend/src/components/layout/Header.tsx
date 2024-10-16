import ListItem from '../lists/ListItem';
import AnchorLink from '../TextHeadingLinks/AnchorLink';

type Props = {}

export default function Header({}: Props) {

    interface NavItems {
        text:string,
        link:string,
        class:string,
        title:string
    }

    const navigation:NavItems[] = [

        {
            text: 'Home',
            link: '#',
            class: 'w-2/12 rounded-lg p-6',
            title: 'Home'
        },
        {
            text: 'Websites',
            link: '#',
            class: 'w-2/12 rounded-lg p-6',
            title: 'Websites'
        },
        {
            text: 'Projects',
            link: '#',
            class: 'w-2/12 rounded-lg p-6',
            title: 'Projects'
        },
        {
            text: 'Code',
            link: '#',
            class: 'w-2/12 rounded-lg p-6',
            title: 'Code'
        },
        {
            text: 'Contact',
            link: '#',
            class: 'w-2/12 rounded-lg p-6',
            title: 'Contact'
        },


    ]

    return (
        <header className='flex items-center justify-center p-4 text-orange-300 border-b-4 border-orange-300'>
            <div className="flex items-center justify-start w-3/12 relative ">
                <h1 className=' text-black bg-orange-300 p-4 w-max font-bold'>
                    JM
                </h1>
            </div>

            <nav className="nav-container text-center w-6/12 uppercase ">
                <ul className='w-full flex items-center justify-between text-2xl '>
                    {
                        navigation.map(item=>{
                            return(
                                <ListItem 
                                    itemtext={item.text} 
                                    itemClass={item.class} 
                                    itemChildren={
                                        
                                    <AnchorLink 
                                        anchorLink={item.link} 
                                        anchorTitle={item.title} 
                                        anchorText={item.text} 
                                        anchorClass={'hover:font-bold w-full h-full'}
                                    />}
                                />                            
                            )
                        })
                    }
                </ul>
            </nav>

            <div className="flex items-center justify-end logo-container text-right w-3/12 relative">
                <h1 className=' text-black bg-orange-300 p-4 w-max font-bold'>
                    JM
                </h1>
            </div>

        </header>
    )
}