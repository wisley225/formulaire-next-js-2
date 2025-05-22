'use client'

import Image from "next/image";
import { useEffect,useState ,useRef } from "react";
import gsap from "gsap";


export default function Home() {
const [indexActuel,setIndexActual]=useState(0)
const [enAnimation,setAnimation]=useState(false)
const ImageRef=useRef<HTMLImageElement>(null)

const imageUrl=[
'photo1.jpg',
'photo2.jpg',
'photo3.jpg',
'photo4.jpg',
'photo5.jpg',
'photo6.jpg',
'photo7.jpg',
'photo8.jpg',
]

const mettreAjour=(nouvelIndex:number)=>{

if (enAnimation)return
setAnimation(true)

 imageUrl.forEach( (element,i )=>{

  if (i===nouvelIndex && ImageRef.current){ {

const ctx=gsap.context(()=>{

gsap.fromTo(ImageRef.current,{
transition:1,
duration:4,
opacity:1,
onComplete:()=>setAnimation(false),
},

{


onComplete:()=>setAnimation(false),
},




) 








return () => ctx.revert();

  })



 return

  }

 }})
}

const Image_suivante=()=>{

if (enAnimation)return
setIndexActual(prev=>{
const nouvelIndex=(prev+1)%imageUrl.length
mettreAjour(nouvelIndex)

return nouvelIndex
})

}

useEffect( ()=>{
  const interval = setInterval(() => {
    Image_suivante()
  }, 7000);

  return () => clearInterval(interval);
})
  return (
    <form className=" flex h-screen ">
      <div  className=" w-7/12 relative">

       <Image
        src={ `/${imageUrl[indexActuel]}`}
        alt="photo1"
        fill
        className="object-cover object-center "
        ref={ImageRef}
        />

       </div>



      <div className="w-5/12  justify-center items-center flex flex-col">
  <p className=" mb-5  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 text-4xl font-bold">
   <span>w</span>
   <span>e</span>
   <span>s</span>
   <span>e</span>
   <span>e</span>
   <span>m</span>
   <span>b</span>
   <span>a</span>
  </p>

  <h1 className="font-bold text-xl mb-1"> connectez vous pour continuer</h1>
<p className=" mb-5">vous n'avez pas de compte ? <a href="" className="text-blue-400">creer un compte</a></p>

<div className=" flex flex-col w-96  mb-5 ">

<label className=" text-lg mb-1" > Email</label>
<input type="email" className=" h-15 rounded-lg pl-5 mb-5 border border-gray-400 bg-white " />



<label htmlFor="" className=" text-lg mb-1" > Mot de passe</label>
<input type="password" className=" h-15 rounded-lg pl-5  border border-gray-400 bg-white " />

<div className=" my-2 flex justify-between  w-full "><div className=" flex   "><input type="radio"/><span className="">se souvenir de moi</span> </div>  <a href="" className="text-blue-400 ">Mot de passe oublié ?</a></div>
    <button className=" border py-2 rounded-full text-xl text-white bg-blue-600 cursor-pointer hover:bg-blue-700  font-serif"> Se connecter</button>

</div>


       </div>

    </form>
  );
}
