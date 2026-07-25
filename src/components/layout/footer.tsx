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
          <a href='https://www.tiktok.com/@asaderorondacomidacasera' className='hover:text-primary'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='oklch(0.18 0.08 22)'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 3 3 0 0 1 .88.13V9.4a7 7 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a5 5 0 0 1-1-.1z' />
            </svg>
          </a>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6'>
        <p className='text-muted-foreground text-center text-balance'>
          {`©${new Date().getFullYear()}`}{' '}
          <a href='https://github.com/valentinVilla05' className='hover:underline'>
            Valentín Villa Pozo
          </a>{' '}
          <span>y</span>{' '}
          <a href='https://github.com/Danvil-dev' className='hover:underline'>
            Daniel Alfonso Vilain
          </a>
          , Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
