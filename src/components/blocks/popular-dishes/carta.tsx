'use client'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

type Dish = {
  image: string
  alt: string
  name: string
  type: string
  description: string
}[]

const Dishes = ({ dishes }: { dishes: Dish }) => {
  const [pagina, setPagina] = useState(0) // Estado para la pagina actual
  const PAGE_SIZE = 4 // Numero de cards por pagina

  const ultima_pagina = Math.max(0, Math.ceil(dishes.length / PAGE_SIZE) - 1)
  const indice_incio = pagina * PAGE_SIZE
  const platos_visibles = dishes.slice(indice_incio, indice_incio + PAGE_SIZE)

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
          <button onClick={retroceder} disabled={pagina == 0}>
            Atras
          </button>
          <div className='grid gap-6 md:grid-cols-2 lg:gap-y-10 xl:grid-cols-4'>
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
          <button onClick={avanzar} disabled={pagina == ultima_pagina}>
            Adelante
          </button>
        </div>
      </div>
    </section>
  )
}

export default Dishes
