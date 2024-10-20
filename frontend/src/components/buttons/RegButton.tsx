type Props = {
    buttonText: string
}

const RegButton = (props: Props) => {
  return (
    <button className='text-xl p-4 px-8 text-green-400 uppercase border-2 border-green-400 border-b-green-800 border-b-8 active:border-b-4 active:top-1 relative '> {props.buttonText} </button>
  )
}

export default RegButton