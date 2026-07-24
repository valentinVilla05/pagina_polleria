'use client'

import { useEffect, useState, useMemo, useCallback } from 'react'
import { ArrowRightIcon, Flame, Snowflake, ShoppingBasket } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'
import { Button } from '@/components/ui/button'
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

export type MenuData = {
  id: number
  img: string
  imgAlt: string
}

const CarruselPrincipal = ({ menudata }: { menudata: MenuData[] }) => {
  const [mainApi, setMainApi] = useState<CarouselApi>()
  const [thumbApi, setThumbApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const plugins = useMemo(() => [Autoplay({ delay: 3000, stopOnInteraction: false })], [])

  useEffect(() => {
    if (!mainApi) return
    mainApi.on('select', () => {
      const selectedIndex = mainApi.selectedScrollSnap()

      setCurrent(selectedIndex)
      thumbApi?.scrollTo(selectedIndex)
    })
  }, [mainApi, thumbApi])

  const handleThumbClick = useCallback(
    (index: number) => {
      mainApi?.scrollTo(index)
    },
    [mainApi]
  )

  return (
    <section id='home' className='relative flex-1 overflow-hidden py-12 lg:py-24'>
      <div className='mx-auto flex h-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8'>
        {/* Hero Header */}
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-5'>
          <div className='flex w-full flex-col gap-6 max-lg:items-center lg:col-span-3'>
            {/* Etiquetas Decorativas */}
            <div className='flex flex-wrap justify-center gap-3 lg:justify-start'>
              {[
                { icon: Snowflake, text: 'Hay hielo' },
                { icon: Flame, text: 'Pan de leña' },
                { icon: ShoppingBasket, text: 'Pollos por encargo' },
                { icon: ShoppingBasket, text: 'Cuscus casero' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className='bg-background/20 border-border text-foreground flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-md'
                >
                  <item.icon className='size-4' />
                  {item.text}
                </div>
              ))}
            </div>

            <h1 className='font-alexbrush text-foreground text-6xl font-semibold whitespace-nowrap sm:text-9xl'>
              Asadero Ronda
            </h1>

            <p className='text-foreground/90 max-w-xl text-2xl leading-relaxed font-medium max-lg:text-center'>
              Pollo asado, platos caseros y postres recién preparados.
            </p>

            {/* Cambia la clase del botón por esta configuración */}
            <Button
              asChild
              size='lg'
              className='bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 font-bold'
            >
              <a href='#contact-us'>
                Pide por Whatsapp <ArrowRightIcon className='ml-2' />
              </a>
            </Button>
          </div>

          {/* Carousel principal con marco elegante */}
          <Carousel className='w-full lg:col-span-2' setApi={setMainApi} plugins={plugins} opts={{ loop: true }}>
            <CarouselContent>
              {menudata.map(item => (
                <CarouselItem key={item.id} className='flex w-full items-center justify-center'>
                  <img src={item.img} alt={item.imgAlt} className='size-72 object-contain shadow-none' />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Thumbs Section */}
        <div className='lg:col-span-3'>
          <Carousel className='relative w-full' setApi={setThumbApi} opts={{ loop: true }}>
            <CarouselContent>
              {menudata.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className='flex basis-1/3 cursor-pointer justify-center md:basis-1/4 lg:basis-1/6'
                  onClick={() => handleThumbClick(index)}
                >
                  <div
                    className={cn(
                      'relative flex items-center justify-center rounded-2xl border p-2 shadow-none transition-all',
                      current === index ? 'border-accent bg-popover/10' : 'border-transparent'
                    )}
                  >
                    <img src={item.img} alt={item.imgAlt} className='size-20 object-contain shadow-none' />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default CarruselPrincipal
