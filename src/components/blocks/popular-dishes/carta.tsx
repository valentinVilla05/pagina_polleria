'use client'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { useEffect, useState } from 'react'

type Dish = {
  image: string
  alt: string
  name: string
  type: string
  description: string
}[]

const Dishes = ({ dishes }: { dishes: Dish }) => {
  const [pagina, setPagina] = useState(0) // Estado para la pagina actual

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

  const ultima_pagina = Math.max(0, Math.ceil(dishes.length / tamanoPagina) - 1)
  const indice_incio = pagina * tamanoPagina
  const platos_visibles = dishes.slice(indice_incio, indice_incio + tamanoPagina)

  const retroceder = () => setPagina(current => Math.max(0, current - 1))
  const avanzar = () => setPagina(current => Math.min(ultima_pagina, current + 1))

  return (
    <section id='popular-dishes' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-24'>
          <Badge variant='outline' className='h-auto text-sm font-normal'>
            Nuestra carta
          </Badge>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Carta completa</h2>
          <p className='text-muted-foreground text-xl'>
            Explora nuestra variedad de platos para disfrutar solo o en compañia!
          </p>
        </div>

        {/* Dishes */}
        <div className='flex items-center justify-center gap-6'>
          <button
            onClick={retroceder}
            disabled={pagina == 0}
            aria-label='Página anterior'
            className='hover:bg-muted rounded-full border p-2 transition disabled:cursor-not-allowed disabled:opacity-50'
          >
            <SlArrowLeft className='h-4 w-4' />
          </button>
          <div className='grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4'>
            {platos_visibles.map((member, index) => (
              <Card
                key={index}
                className='hover:border-primary border-primary/10 overflow-hidden rounded-none border py-0 shadow-none ring-0 transition-colors duration-300'
              >
                <CardContent className='px-0'>
                  <div className='bg-muted'>
                    <img src={member.image} alt={member.alt} className='h-auto w-full' />
                  </div>
                  <div className='space-y-3 px-6 py-5'>
                    <CardTitle className='text-lg font-semibold'>{member.name}</CardTitle>
                    <Separator />
                    <div className='text-muted-foreground'>
                      <p className='mb-1 text-base font-medium'>{member.type}</p>
                      <p className='text-base'>{member.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <button
            onClick={avanzar}
            disabled={pagina == ultima_pagina}
            aria-label='Página siguiente'
            className='hover:bg-muted rounded-full border p-2 transition disabled:cursor-not-allowed disabled:opacity-50'
          >
            <SlArrowRight className='h-4 w-4' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Dishes
