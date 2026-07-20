import InstagramIcon from '@/assets/svg/instagram-icon'

import { Separator } from '@/components/ui/separator'

import { footerData } from '@/assets/data/footer'

const Footer = () => {
  return (
    <footer className='bg-muted' style={{ clipPath: 'polygon(0 16px, 100% 0, 100% 100%, 0 100%)' }}>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8'>
        <a href='/#home'>
          <div className='flex items-center gap-3'>
            <img src='/images/logo.png' alt='Asadero Ronda' className='shadow-none' />
            <span className='text-chart-5 text-[20px] font-semibold'>Asadero Ronda</span>
          </div>
        </a>

        <div className='flex items-center gap-5 whitespace-nowrap'>
          {footerData.map(item => (
            <a
              key={item.title}
              href={item.href}
              className='text-primary-foreground hover:text-muted-foreground text-base! hover:bg-transparent'
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className='flex items-center gap-4'>
          <a href='#' className='hover:text-primary'>
            <InstagramIcon className='size-8' />
          </a>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6'>
        <p className='text-muted-foreground text-center text-balance'>
          {`©${new Date().getFullYear()}`}{' '}
          <a href='/#home' className='hover:underline'>
            Valentín Villa Pozo y Daniel Alfonso Vilain
          </a>
          , Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
