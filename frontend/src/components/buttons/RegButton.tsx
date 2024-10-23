type Props = {
    buttonText: string | null,
    iconComponent: any |  null
}

const RegButton = (props: Props) => {
  return (
    <button  className='rounded-lg flex items-center gap-4 justify-center my-6 text-base md:text-2xl p-2 px-8 text-green-400 uppercase border-2 w-full border-green-400 active:border-b-green-900 border-b-green-700 border-b-8 active:border-b-4 active:mb-7 active:top-1 relative hover:bg-green-400 hover:text-black'>{props.iconComponent} {props.buttonText} </button>
  )
}

export default RegButton