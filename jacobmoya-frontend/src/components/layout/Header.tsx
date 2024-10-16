import ListItem from '../lists/ListItem';
import AnchorLink from '../TextHeadingLinks/AnchorLink';

type Props = {}

export default function Header({}: Props) {

    interface NavItems {
        text:string,
        link:string,
        class:string,
        title:string,
        isActive:boolean
    }

    const navigation:NavItems[] = [

        {
            text: 'Home',
            link: '#',
            class: 'w-full md:w-2/12 rounded-lg rounded-b-none border-2 border-b-0 border-orange-300 -mb-0.5 ',
            title: 'Home',
            isActive: true
        },
        {
            text: 'Websites',
            link: '#',
            class: 'w-full md:w-2/12 rounded-lg rounded-b-none border-2 border-b-0 border-orange-300 -mb-0.5 ',
            title: 'Websites',
            isActive: false
        },
        {
            text: 'Projects',
            link: '#',
            class: 'w-full md:w-2/12 rounded-lg rounded-b-none border-2 border-b-0 border-orange-300 -mb-0.5 ',
            title: 'Projects',
            isActive: false
        },
        {
            text: 'Code',
            link: '#',
            class: 'w-full md:w-2/12 rounded-lg rounded-b-none border-2 border-b-0 border-orange-300 -mb-0.5 ',
            title: 'Code',
            isActive: false
        },
        {
            text: 'Contact',
            link: '#',
            class: 'w-full md:w-2/12 rounded-lg rounded-b-none border-2 border-b-0 border-orange-300 -mb-0.5 ',
            title: 'Contact',
            isActive: false
        },


    ]

    return (
        <header className='flex items-end justify-center text-orange-300 border-b-2 border-orange-300'>
            <div className="flex items-center justify-start w-3/12 relative ">
                <h1 className=' text-black bg-orange-300 p-4 w-max font-bold '>
                    JM
                </h1>
            </div>

            <nav className="nav-container text-center w-6/12 uppercase ">
                <ul className='w-full md:flex items-center md:flex-row flex-col hidden justify-between text-2xl '>
                    {
                        navigation.map(item=>{
                            return(
                                <ListItem 
                                    itemtext={item.text} 
                                    itemClass={item.isActive ? `${item.class} bg-black` : item.class} 
                                    itemChildren={
                                        
                                    <AnchorLink 
                                        anchorLink={item.link} 
                                        anchorTitle={item.title} 
                                        anchorText={item.text} 
                                        anchorClass={'hover:font-bold'}
                                    />}
                                />                            
                            )
                        })
                    }
                </ul>
            </nav>

            <div className="flex items-center justify-end logo-container text-right w-3/12 relative">
                <h1 className=' text-black bg-orange-300 p-4 w-max font-bold'>
                    X
                </h1>
            </div>

        </header>
    )
}