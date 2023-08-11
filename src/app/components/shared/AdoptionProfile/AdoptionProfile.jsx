function AdoptionProfile(props){
  return (
    <a className={props.className} href="">
      <img className={props.classNameImg} alt={props.alt} src={props.src} />
      <span className={props.classNameCardFooter}>
        <span>{props.namePet}</span>
        <span>{props.descriptionPet}</span>
        <span>{props.agePet}</span>
      </span>
    </a>
  )
};

export default AdoptionProfile;