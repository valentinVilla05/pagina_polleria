import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

type menuDelDia = {
  src: string
  alt: string
  dia: number
  className?: string
  offerText: {
    text: string
    description: string
    className?: string
  }
  offerButton: {
    text: string
    href: string
    className?: string
  }
}[]

const MenusSemanales = ({ menu }: { menu: menuDelDia }) => {
  // Obtenemos el día de hoy
  const diaHoy = new Date().getDay()

  // Filtramos los lunes (día 1) y reordenamos el menú para que empiece por hoy
  const menuOrdenado = menu
    .filter(item => item.dia !== 1) // Excluimos los lunes
    .sort((a, b) => {
      // Calcular la distancia desde hoy para cada día
      const distanciaA = (a.dia - diaHoy + 7) % 7
      const distanciaB = (b.dia - diaHoy + 7) % 7

      return distanciaA - distanciaB
    })

  // Aplicar las clases correctas: el primero es grande, los demás son pequeños
  const menuConClases = menuOrdenado.map((item, index) => ({
    ...item,
    className: index === 0 ? 'col-span-2 row-span-2' : 'col-span-2 h-60'
  }))

  return (
    <section id='offers' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <Badge variant='outline' className='h-auto text-sm font-normal'>
            Menús de la semana
          </Badge>

          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>¡Prueba nuestro menú de hoy!</h2>

          <p className='text-muted-foreground text-xl'>
            Menú del dia con 2º plato a elegir. Incluye pan y postre. (Entre semana 11.50€ / Fin de semana 12.50€)
          </p>
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
          {menuConClases.map((image, index) => (
            <div key={index} className={cn('group relative overflow-hidden rounded-none', image.className)}>
              <img
                src={image.src}
                alt={image.alt}
                className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
                loading='lazy'
              />
              {(image.offerText || image.offerButton) && (
                <div className='bg-background/80 absolute inset-x-0 bottom-0 flex flex-col justify-end gap-2 rounded-none p-4 backdrop-blur-sm'>
                  {image.offerText && (
                    <div className={cn('min-w-0 flex-1', image.offerText.className)}>
                      <p className='text-foreground font-(family-name:--font-kaushan-script) text-lg opacity-100! md:text-xl lg:text-2xl xl:text-3xl'>
                        {image.offerText.text}
                      </p>
                      <p className='text-muted-foreground'>{image.offerText.description}</p>
                    </div>
                  )}

                  {image.offerButton && (
                    <div className='shrink-0'>
                      <Button
                        size='lg'
                        asChild
                        className={cn(
                          'relative w-fit overflow-hidden rounded-full text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 group-hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 max-lg:px-3 max-sm:px-2.5 max-sm:text-sm dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
                        )}
                      >
                        <a href='#contact-us' hidden={diaHoy != image.dia}>
                          Pídelo ya!
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenusSemanales
