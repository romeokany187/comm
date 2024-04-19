import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className='flex flex-col gap-[3rem] text-white font-Montserrat py-4 sm:px-16 px-6'>
        <div className="flex justify-between items-center gap-3">
          <div className="flex gap-6 text-sm">
            <div className="flex ">
              <h3>Langue</h3>
              <span class="material-symbols-outlined">
                arrow_drop_down
              </span>
            </div>
            <div className="flex ">
              <h3>Pays RD Congo</h3>
              <span class="material-symbols-outlined">
                arrow_drop_down
              </span>
            </div>
            <div className="flex">
              <h3>Besoin d'aide ? + 243 974843438</h3>
            </div>
          </div>
          <div className="text-sm flex  ">
            <Link href="/apropos" className='border-r-2 px-3'>
              <p className='logo_text'>Apropos</p>
            </Link>
            <hr className='' />
            <Link href="/politique" className='border-r-2 px-3'>
              <p className='logo_text'>politique d'utilisation</p>
            </Link>
            <Link href="/contacter" className=' px-3'>
              <p className='logo_text'>Contactez nous</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[2rem] ">
          <div className="logo">
            <h1 className='text-4xl font-bold'>Motor <span className='text-primary-yellow'>.Gar</span></h1>
          </div>
          <div className="w-[40%] ">
            <form action="" className='flex w-full'>
              <input type="text" placeholder='Recherceher le produit...' className='border-none focus:border-none p-3 w-full' />
              <div className='p-2 flex items-center justify-center bg-primary-yellow'>
                <span class="material-symbols-outlined">
                  search
                </span>
              </div>
            </form>
          </div>
          <div className="">
            <Link href='/connexion' className='flex items-center gap-2'>
              <span class="material-symbols-outlined " >
                person
              </span>

              <p className='text-xs'>connexion <br /> Mon compte</p>
            </Link>
          </div>
          <div className="">
            <Link href='/Admire' className='flex items-center gap-2'>
              <div className="relative">
                <span class="material-symbols-outlined ">
                  favorite
                </span>
                <span className='text-xs absolute top-[-7px] right-[-5px] bg-primary-yellow rounded-full  px-[0.2rem] '>8</span>
              </div>
              <p className='text-xs'>Admire <br /> Mes likes</p>
            </Link>
          </div>
          <div className="">
            <Link href='/connexion' className='flex items-center gap-2'>
              <div className="relative">
                <span class="material-symbols-outlined">
                  shopping_cart
                </span>
                <span className='text-xs absolute top-[-7px] right-[-5px] bg-primary-yellow rounded-full  px-[0.2rem] '>8</span>
              </div>
              <p className='text-xs'>Pour <br /> Mon pannier</p>
            </Link>
          </div>
        </div>
      </div><div className="flex justify-around items-center font-Montserrat text-white text-sm p-2 bg-primary-black">
        <div className="flex gap-2 text-sm items-center">
          <span class="material-symbols-outlined">
            menu
          </span>
          <p>Departement shop</p>
        </div>
        <div className=" flex gap-5 text-xs ">
          <Link href="/" className='active'>
            <p >ACCUEIL</p>
          </Link>
          <Link href="/moto">
            <p>MOTOS</p>
          </Link>
          <Link href="/voiture">
            <p>VOITUURE</p>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-3">
          <span class="material-symbols-outlined">
            person_pin_circle
          </span>
          <p>Adresse...</p>
        </div>
      </div>

    </div>

  )
}

export default Navbar