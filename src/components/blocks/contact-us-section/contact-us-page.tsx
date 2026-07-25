import type { ComponentType } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

type ContactInfo = {
  title: string
  icon: ComponentType
  description: string
  link?: string
}[]

const ContactUs = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  return (
    <section
      id='contact-us'
      className='before:bg-muted relative overflow-hidden py-12 before:absolute before:inset-0 before:-z-10 before:skew-y-3 sm:py-20 lg:py-28'
    >
      {/* --- Ambientación de Fondo: Destellos cálidos de iluminación --- */}
      <div className='bg-primary/5 pointer-events-none absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full blur-3xl' />
      <div className='bg-primary/5 pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-96 w-96 rounded-full blur-3xl' />

      {/* --- Marcas de Agua Dobles (Logotipos difuminados en las esquinas) --- */}
      <div className='pointer-events-none absolute top-0 left-0 z-0 -translate-x-16 -translate-y-16 opacity-[0.03]'>
        <img src='/images/logo.png' alt='' className='h-[400px] w-[400px] rotate-12 object-contain shadow-none' />
      </div>
      <div className='pointer-events-none absolute right-0 bottom-0 z-0 translate-x-16 translate-y-16 opacity-[0.03]'>
        <img src='/images/logo.png' alt='' className='h-[500px] w-[500px] rotate-12 object-contain shadow-none' />
      </div>

      {/* --- Densidad de Platos Decorativos Flotantes (01 al 05) --- */}
      <img
        src='/images/hero-section/dish-01.png'
        className='absolute top-10 left-6 z-10 hidden size-28 rotate-[-15deg] opacity-75 shadow-none drop-shadow-xl transition-transform duration-500 hover:scale-110 xl:block'
        alt='Decoración'
      />
      <img
        src='/images/hero-section/dish-02.png'
        className='absolute top-24 right-12 z-10 hidden size-32 rotate-[20deg] opacity-70 shadow-none drop-shadow-lg transition-transform duration-500 hover:scale-110 lg:block'
      />
      <img
        src='/images/hero-section/dish-03.png'
        className='absolute top-1/2 -left-14 z-10 hidden size-36 -translate-y-1/2 rotate-[35deg] opacity-80 shadow-none drop-shadow-xl transition-transform duration-500 hover:scale-110 lg:block'
      />
      <img
        src='/images/hero-section/dish-04.png'
        className='shadow-nonesize-28 absolute top-1/3 -right-12 z-10 hidden rotate-[-25deg] opacity-75 shadow-none drop-shadow-lg transition-transform duration-500 hover:scale-110 xl:block'
      />
      <img
        src='/images/hero-section/dish-05.png'
        className='absolute right-1/3 bottom-8 z-10 hidden size-36 rotate-[15deg] opacity-80 shadow-none drop-shadow-xl transition-transform duration-500 hover:scale-110 lg:block'
      />

      {/* --- Contenedor de la interfaz --- */}
      <div className='relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-20'>
          <Badge
            variant='outline'
            className='border-primary/30 bg-background/50 h-auto rounded-full px-4 py-0.5 text-sm font-normal'
          >
            Contacto
          </Badge>
          <div className='relative pl-2 text-center'>
            <h2 className='text-foreground text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl'>Contáctanos</h2>
            <div className='bg-primary/70 mx-auto mt-3 h-1 w-16 rounded-full'></div>
          </div>
          <p className='max-w-lg text-xl font-medium text-muted-foreground'>
            ¡Contáctanos y recibe tu pedido sin filas y sin tener que esperar!
          </p>
        </div>

        <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16'>
          {/* Imagen principal con marco y volumen */}
          <div className='group hover:shadow-3xl border-primary/10 bg-background relative overflow-hidden rounded-2xl border shadow-2xl transition-all duration-300'>
            <img
              src='/images/contact-us-01.webp'
              alt='Contact illustration'
              className='h-[400px] w-full object-cover shadow-none transition-transform duration-700 group-hover:scale-105 max-lg:max-h-70 sm:h-[500px]'
              loading='lazy'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60'></div>
          </div>

          {/* Información y Tarjetas */}
          <div>
            <h3 className='text-foreground mb-3 text-3xl font-bold tracking-tight'>Estamos para atenderte</h3>
            <p className='mb-8 text-lg leading-relaxed font-medium text-muted-foreground'>
              Si te gustó nuestros servicios, no dudes en ponernos una valoración positiva en Google Maps.
            </p>

            {/* Grid de Tarjetas de Contacto */}
            <div className='grid gap-6 sm:grid-cols-2'>
              {contactInfo.map((info, index) => {
                const isClickable = !!info.link

                const cardContent = (
                  <Card
                    className={`bg-background group relative h-full overflow-hidden rounded-2xl border shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                      isClickable ? 'hover:border-primary cursor-pointer' : ''
                    }`}
                  >
                    <CardContent className='relative z-10 flex h-full flex-col items-center justify-center gap-4 p-6 text-center lg:p-8'>
                      <Avatar className='border-primary/10 bg-primary/5 text-primary size-12 border shadow-sm transition-transform duration-300 group-hover:scale-110'>
                        <AvatarFallback className='bg-transparent [&>svg]:size-6'>
                          <info.icon />
                        </AvatarFallback>
                      </Avatar>
                      <div className='space-y-2'>
                        <h4 className='text-foreground text-lg font-bold tracking-wide'>{info.title}</h4>
                        <div className='text-muted-foreground leading-relaxed font-semibold'>
                          {info.description.split('\n').map((line, idx) => (
                            <p key={idx}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )

                if (isClickable) {
                  return (
                    <a key={index} href={info.link} target='_blank' rel='noopener noreferrer' className='block h-full'>
                      {cardContent}
                    </a>
                  )
                }

                return (
                  <div key={index} className='h-full'>
                    {cardContent}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
