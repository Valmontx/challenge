import red from '../assets/red.png'
import wifi from '../assets/wifi.png'
import batery from '../assets/batery.png'


function Header() {
  return (
    <section className="section-principal">
    
      <div className='status-bar'>
     
        <p className="hour"> 9:20 </p>
        <div className="icons">
          <img src={red} alt="" />
          <img src={wifi} alt="" />
          <img src={batery} alt="" />
         
        </div>      
      </div>
      <div className="title">
      <h1> People of Star Wars </h1>
      </div>
      
    </section>
  )
  

}

export { Header }