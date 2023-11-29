import ids from './BannerDesign.module.css'

export default function BannerDesign() {
  return (
      <>
        <div id={ids.parchment}></div>
        <div className='flex flex-col items-center justify-center h-[200px]'>
            <h1 className="text-4xl text-primary text-zillaslab font-[700]">Check out these available books!</h1>
            <p className='text-zillaslab font-[400] text-[#383838]'>Book your fave book before it&apos;s too late</p>
        </div>
        <svg className='hidden'>
        <filter id="wavy2">
            <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"></feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
        </svg>
      </>
  )
}
