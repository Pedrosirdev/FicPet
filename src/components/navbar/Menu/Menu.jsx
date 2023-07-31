export default function Menu(){
  const bar = document.querySelectorAll('.bar')
  const divLinksNavbar = document.querySelector('.div-links-navbar')

  function click(){
    bar.forEach(classBar => {
      classBar.classList.toggle('bar')
    });

    divLinksNavbar.classList.toggle('translate')
  }

  return (
    <div onClick={click} id="menu">
    <span className=""></span>
    <span className=""></span>
    <span className=""></span>
  </div>
  )
}