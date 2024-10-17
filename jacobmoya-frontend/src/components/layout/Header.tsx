import ListItem from '../lists/ListItem';

type Props = {}

export default function Header({}: Props) {

    interface NavItems {
        isActive: boolean,
        path:string,
        text:string,
        children: NavItems[] | null
    }

    const navigation:NavItems[] = [

        {
            isActive: true,
            path: '#',
            text: 'Home',
            children: [
                {
                    path: '#',
                    isActive: true,
                    text: 'Information',
                    children: null,
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'Journey',
                    children: null,
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'Homelife',
                    children: null,
                }
            ]
        },
        
        {
            isActive: false,
            path: '#',
            text: 'Portfolio',
            children: [
                {
                    path: '#',
                    isActive: false,
                    text: 'Spotlight',
                    children: null,
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'Web Design & Development',
                    children: null,
                },              
                {
                    path: '#',
                    isActive: false,
                    text: 'Passion Projects',
                    children: null,
                },
            ]
        },

        {
            isActive: false,
            path: '#',
            text: 'Skills',
            children: [
                {
                    path: '#',
                    isActive: false,
                    text: 'HTML',
                    children: null,
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'CSS',
                    children: null,
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'SCSS',
                    children: null,
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'BootStrap',
                    children: null,
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'WordPress',
                    children: null,
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'Tailwind',
                    children: null,
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'JavaScript',
                    children: null,
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'TypeScript',
                    children: null,
                }
            ]
        },

        {
            isActive: false,
            path: '#',
            text: 'Contact',
            children: [
                {
                    path: '#',
                    isActive: false,
                    text: 'Who I Am',
                    children: null,
                }
            ]
        }

        ,

        {
            isActive: false,
            path: '#',
            text: 'TBD',
            children: [
                {
                    path: '#',
                    isActive: false,
                    text: 'Who I Am',
                    children: null,
                }
            ]
        }
    ]

    return (
        <header className='flex items-end justify-center text-orange-300 z-10 relative pt-6'>
            <div className="flex items-center justify-start w-1/12 relative px-2">
                <h1 className=' text-black bg-orange-300 p-2 w-max font-bold '>
                    JM
                </h1>
            </div>

            <nav className="nav-container text-center w-10/12 uppercase border-b-2 border-orange-300 ">
                <ul className='w-full md:flex items-center md:flex-row flex-col hidden justify-evenly text-2xl '>
                    {
                        navigation.map(item=>{
                            return(
                                <ListItem 
                                    itemtext={item.text} 
                                    itemClass={ `p-1 cursor-pointer w-full md:w-2/12  border-2 border-b-0 border-orange-300 -mb-0.5 ${item.isActive ? 'bg-black':''}` } 
                                    itemChildren={
                                        <ul className={`absolute flex items-center justify-start gap-4 -bottom-full text-xl p-0 ${item.isActive ? '': 'hidden'}`} >
                                            {
                                                item.children?.map(item=>{
                                                    return(
                                                        <li className={`${item.isActive ? '' : 'opacity-30'}`}>{item.text} </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    }
                                />                            
                            )
                        })
                    }

                </ul>
            </nav>

            <div className="flex items-center justify-end logo-container text-right w-1/12 relative px-2">
                <h1 className=' text-black bg-orange-300 p-2 px-4 w-max font-bold'>
                    X
                </h1>
            </div>

        </header>
    )
}