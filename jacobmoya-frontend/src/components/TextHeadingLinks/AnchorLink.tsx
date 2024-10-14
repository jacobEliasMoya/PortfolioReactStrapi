type Props = {
    anchorLink:string,
    anchorTitle:string,
    anchorText:string,
    anchorClass:string
}

const AnchorLink = (props: Props) => {
  return (
    <a href={props.anchorLink} title={props.anchorTitle} className={props.anchorClass}>{props.anchorText}</a>
  )
}

export default AnchorLink