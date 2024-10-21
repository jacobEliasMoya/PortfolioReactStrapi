type Props = {
    buttonText: string
}

const RegButton = (props: Props) => {
  return (
    <button className=' my-6 text-base md:text-xl p-4 px-8 text-green-400 uppercase border-2 border-green-400 active:border-b-green-900 border-b-green-700 border-b-8 active:border-b-4 active:mb-7 active:top-1 relative hover:bg-green-400 hover:text-black'> {props.buttonText} </button>
  )
}

export default RegButton