import type { ComponentType } from 'react'

type Stat = {
  icon: ComponentType
  description: string[]
}

const AboutUs = ({ stats }: { stats: Stat[] }) => {
  return (
    <section id='about-us' className='relative overflow-hidden py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header con Logo */}
        <div className='mx-auto mb-16 flex flex-col items-center text-center'>
          <img src='/images/logo.png' alt='Logo' className='mb-6 h-24 w-auto opacity-90' />
          <h2 className='text-foreground font-serif text-4xl font-bold'>Nuestra Esencia</h2>
        </div>

        {/* Contenedor principal con decoración */}
        <div className='relative mx-auto max-w-4xl'>
          {/* Platos decorativos flotantes */}
          <img
            src='/images/hero-section/dish-01.webp'
            className='absolute top-0 -left-20 hidden size-32 rotate-[-15deg] opacity-80 lg:block'
            alt='Decoración'
          />
          <img
            src='/images/hero-section/dish-02.webp'
            className='absolute top-20 -right-20 hidden size-28 rotate-[10deg] opacity-80 lg:block'
            alt='Decoración'
          />
          <img
            src='/images/hero-section/dish-03.webp'
            className='absolute bottom-10 -left-16 hidden size-24 rotate-[20deg] opacity-80 lg:block'
            alt='Decoración'
          />

          {/* Imagen Principal */}
          <img
            src='/images/asadero_ronda.webp'
            alt='About us illustration'
            className='marco-elegante h-full w-full object-cover'
            loading='lazy'
          />

          {/* Stats card */}
          <div className='bg-background/95 mx-auto mt-8 grid w-full max-w-2xl gap-4 border p-6 shadow-2xl backdrop-blur-sm sm:grid-cols-2'>
            {stats.map((stat, index) => (
              <div key={index} className='flex flex-col items-center justify-center gap-2 p-4 text-center'>
                <div className='text-accent flex size-10 items-center justify-center [&>svg]:size-8'>
                  <stat.icon />
                </div>
                <p className='text-foreground text-lg font-medium'>{stat.description[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
