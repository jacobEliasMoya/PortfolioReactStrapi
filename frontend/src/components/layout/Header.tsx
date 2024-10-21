import { useEffect, useState } from 'react';
import ListItem from '../lists/ListItem';

type Props = {}

export default function Header({}: Props) {

    interface NavItems {
        id:number,
        isActive: boolean,
        path:string,
        text:string,
        children: NavItems[] | null
    }

    const initializeSelection = (idKey:number) =>{
        setNavState((prevState) => prevState.map((item)=> item.id === idKey ? {...item,isActive: item.isActive ? item.isActive : !item.isActive } : {...item,isActive:false}));
    }

    const initializeSubSelection = (idKey:number) =>{
        setNavState((prevState) => prevState.map((item)=> item.children ? {...item, children: item.children.map(item=> item.id === idKey ? {...item, isActive: item.isActive ? item.isActive : !item.isActive} : {...item, isActive: false} )} : item ));
    }

  
    const [navState, setNavState] = useState<NavItems[]>([
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
                    id: 6
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'Journey',
                    children: null,
                    id: 7
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'Homelife',
                    children: null,
                    id: 8
                },
            ],
            id: 1
        },
        
        {
            isActive: false,
            path: '#',
            text: 'Portfolio',
            children: [
                {
                    path: '#',
                    isActive: true,
                    text: 'Spotlight',
                    children: null,
                    id: 9
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'Web Design & Development',
                    children: null,
                    id: 10
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'Passion Projects',
                    children: null,
                    id: 11
                },
            ],
            id: 2
        },

        {
            isActive: false,
            path: '#',
            text: 'Skills',
            children: [
                {
                    path: '#',
                    isActive: true,
                    text: 'HTML',
                    children: null,
                    id: 12
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'CSS',
                    children: null,
                    id: 13
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'SCSS',
                    children: null,
                    id: 14
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'BootStrap',
                    children: null,
                    id: 15
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'WordPress',
                    children: null,
                    id: 16
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'Tailwind',
                    children: null,
                    id: 17
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'JavaScript',
                    children: null,
                    id: 18
                },
                {
                    path: '#',
                    isActive: false,
                    text: 'TypeScript',
                    children: null,
                    id: 19
                }
            ],
            id: 3
        },

        {
            isActive: false,
            path: '#',
            text: 'Contact',
            children: [
                {
                    path: '#',
                    isActive: true,
                    text: 'Who I Am',
                    children: null,
                    id: 20
                }
            ],
            id: 4
        }

        ,

        {
            isActive: false,
            path: '#',
            text: 'TBD',
            children: [
                {
                    path: '#',
                    isActive: true,
                    text: 'Who I Am',
                    children: null,
                    id: 21
                }
            ],
            id: 5
        }
    ]);

 
    useEffect(()=>{
        console.log(navState)
    },[navState])

    return (
        <header className=' flex items-end justify-center text-green-400 z-10 relative pt-6'>
            <div className="hidden items-center justify-start w-1/12 relative px-2">
                <h1 className=' text-black bg-green-400 p-2 w-max font-bold '>
                    JM
                </h1>
            </div>

            <nav className="nav-container text-center w-full uppercase border-b-2 border-green-400 ">
                <ul className=' w-full flex items-center md:flex-row flex-col  justify-evenly text-2xl  md:text-3xl '>
                    {
                        navState.map(item=>{
                            return(
                                <ListItem 
                                    itemKey={item.id}
                                    onclick={()=> initializeSelection(item.id)}  
                                    itemtext={item.text} 
                                    itemClass={ `p-1 cursor-pointer w-full md:w-2/12  border-2 border-b-0 border-green-400   ${item.isActive ? '-mb-0.5 py-2 bg-black':'-mb-2 hover:-mb-0.5 hover:py-2 top-3 hover:bg-green-400 hover:text-black'}` } 
                                    itemChildren={
                                        <ul className={`md:absolute top-full flex items-center mt-4 mb-2 flex-wrap justify-center md:justify-start gap-x-2 text-base md:text-2xl  ${item.isActive ? '': 'hidden'}`} >
                                            {
                                                item.children?.map(item=>{
                                                    return(
                                                        <li onClick={()=>initializeSubSelection(item.id)} key={item.id} className={`px-2 ${item.isActive ? 'bg-green-400 text-black ' : 'hover:bg-green-400 hover:text-black  opacity-30'}`}>{item.text} </li>
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

            <div className="hidden items-center justify-end logo-container text-right w-1/12 relative px-2">
                <h1 className=' text-black bg-green-400 p-2 px-4 w-max font-bold'>
                    X
                </h1>
            </div>

        </header>
    )
}