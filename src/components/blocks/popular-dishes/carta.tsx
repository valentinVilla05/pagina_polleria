'use client'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

import { Separator } from '@/components/ui/separator'
import { useEffect, useMemo, useState } from 'react'

type Dish = {
  image: string
  alt: string
  name: string
  type: string
  description: string
}[]

const Dishes = ({ dishes, titulo }: { dishes: Dish; titulo: string }) => {
  const [pagina, setPagina] = useState(0)

  const [tamanoPagina, setTamanoPagina] = useState(() => {
    if (typeof window === 'undefined') return 4
    if (window.innerWidth >= 1280) return 4
    if (window.innerWidth >= 768) return 2

    return 1
  })

  useEffect(() => {
    const actualizarTamanoPagina = () => {
      const nuevoTamano = window.innerWidth >= 1280 ? 4 : window.innerWidth >= 768 ? 2 : 1

      setTamanoPagina(nuevoTamano)
      setPagina(0)
    }

    actualizarTamanoPagina()
    window.addEventListener('resize', actualizarTamanoPagina)

    return () => window.removeEventListener('resize', actualizarTamanoPagina)
  }, [])

  const paginas = useMemo(() => {
    const grupos: Dish[] = []

    for (let i = 0; i < dishes.length; i += tamanoPagina) {
      grupos.push(dishes.slice(i, i + tamanoPagina))
    }

    return grupos.length > 0 ? grupos : [[]]
  }, [dishes, tamanoPagina])

  const ultima_pagina = Math.max(0, paginas.length - 1)

  useEffect(() => {
    setPagina(current => Math.min(current, ultima_pagina))
  }, [ultima_pagina])

  const retroceder = () => setPagina(current => Math.max(0, current - 1))
  const avanzar = () => setPagina(current => Math.min(ultima_pagina, current + 1))

  return (
    <section id='popular-dishes' className='relative overflow-hidden py-12 sm:py-20 lg:py-28'>
      {/* --- ELEMENTOS DECORATIVOS DE FONDO --- */}
      <div className='pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden'>
        {/* Logo como marca de agua semitransparente */}
        <img
          src='/images/logo.png'
          alt='Decoración Logo'
          className='absolute -top-10 -left-10 h-64 w-64 -rotate-12 transform opacity-5'
        />
        {/* Platos decorativos difuminados en las esquinas */}
        <img
          src='/images/hero-section/dish-01.webp'
          alt='Decoración Plato 1'
          className='absolute top-20 right-[-5%] h-72 w-72 rounded-full object-cover opacity-10 blur-sm'
        />
        <img
          src='/images/hero-section/dish-03.webp'
          alt='Decoración Plato 3'
          className='absolute bottom-10 left-[-5%] h-60 w-60 rotate-45 transform rounded-full object-cover opacity-10 blur-sm'
        />
      </div>
      {/* -------------------------------------- */}

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16'>
          <h2 className='text-foreground text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl'>{titulo}</h2>
          <div className='bg-primary mt-4 h-1 w-20 rounded-full'></div>
        </div>

        {/* Controles y Carrusel */}
        <div className='flex items-center justify-center gap-2 sm:gap-6'>
          <button
            onClick={retroceder}
            disabled={pagina == 0}
            aria-label='Página anterior'
            className='hover:bg-primary hover:text-primary-foreground border-primary/20 bg-background disabled:hover:bg-background disabled:hover:text-foreground rounded-full border-2 p-3 shadow-sm transition-all disabled:cursor-not-allowed disabled:opacity-40'
          >
            <SlArrowLeft className='h-5 w-5' />
          </button>

          <div className='w-full max-w-6xl overflow-hidden py-4'>
            <div
              className='flex transition-transform duration-700 ease-out'
              style={{ transform: `translateX(-${pagina * 100}%)` }}
            >
              {paginas.map((grupo, paginaIndex) => (
                <div
                  key={paginaIndex}
                  className='grid w-full flex-shrink-0 grid-cols-1 gap-6 px-2 md:grid-cols-2 xl:grid-cols-4'
                >
                  {grupo.map((member, index) => (
                    <Card
                      key={index}
                      className='group hover:border-primary/50 border-primary/10 bg-card overflow-hidden rounded-2xl border shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'
                    >
                      <CardContent className='p-0'>
                        <div className='bg-muted overflow-hidden'>
                          <img
                            src={member.image}
                            alt={member.alt}
                            className='aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110'
                          />
                        </div>
                        <div className='flex flex-grow flex-col space-y-3 px-6 py-6'>
                          {/* Cambio 1: Reemplazar 'text-foreground' por un color oscuro para el nombre del plato */}
                          <CardTitle className='text-xl font-bold text-[#3c0909] transition-colors group-hover:opacity-80'>
                            {member.name}
                          </CardTitle>

                          <Separator className='bg-[#3c0909]/20' />

                          {/* Cambio 2: Quitar 'text-muted-foreground' y poner un color oscuro para el resto del texto */}
                          <div className='flex-grow text-[#3c0909]/80'>
                            {/* Cambio 3: Quitar 'text-primary' y dejar que herede el color oscuro */}
                            <p className='mb-2 text-sm font-bold tracking-wider text-[#3c0909] uppercase'>
                              {member.type}
                            </p>
                            <p className='text-sm leading-relaxed'>{member.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={avanzar}
            disabled={pagina == ultima_pagina}
            aria-label='Página siguiente'
            className='hover:bg-primary hover:text-primary-foreground border-primary/20 bg-background disabled:hover:bg-background disabled:hover:text-foreground rounded-full border-2 p-3 shadow-sm transition-all disabled:cursor-not-allowed disabled:opacity-40'
          >
            <SlArrowRight className='h-5 w-5' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Dishes
