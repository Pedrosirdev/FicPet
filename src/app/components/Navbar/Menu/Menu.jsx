export default function Menu(){

  function click(){
    const bar = document.querySelectorAll('.bar-off')
    bar.forEach(classBar => {
      classBar.classList.toggle('bar')
    });

    const divLinksNavbar = document.querySelector('.div-links-navbar')
    divLinksNavbar.classList.toggle('off-canvas-active')
    const body = document.getElementById('body')
    body.classList.toggle('overflow-hidden')
  }

  return (
    <div onClick={click} id="menu">
    <span className="bar-off"></span>
    <span className="bar-off"></span>
    <span className="bar-off"></span>
  </div>
  )
}