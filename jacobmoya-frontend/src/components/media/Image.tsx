type Props = {
    imageSrc:string,
    imageTitle:string,
    imageAlt:string,
    imageClass:string
}

const Image = (props: Props) => {
  return (
    <img src={props.imageSrc} alt={props.imageAlt} title={props.imageTitle} className={props.imageClass}/>
  )
}

export default Image