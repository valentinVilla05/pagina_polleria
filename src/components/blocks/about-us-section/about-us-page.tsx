import type { ComponentType } from 'react'
import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
type Stat = {
  icon: ComponentType
  value: string
}

const AboutUs = ({ stats }: { stats: Stat[] }) => {
  return (
    <section
      id='about-us'
      className='before:bg-muted relative py-8 before:absolute before:inset-0 before:-z-10 before:skew-y-3 sm:py-16 lg:py-24'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mx-auto mb-12 flex max-w-3xl flex-col items-center justify-center space-y-4 text-center md:mb-16 lg:mb-24'></div>

        {/* Video player and stats */}
        <div className='relative mb-8 h-full w-full sm:mb-16 lg:mb-24'>
          <img
            src='/images/asadero_ronda.webp'
            alt='About us illustration'
            className='h-full w-full object-cover'
            loading='lazy'
          />

          {/* Stats card overlapping the video section */}
          <div className='bg-background inline-grid gap-10 border p-8 lg:absolute lg:-bottom-25 lg:left-1/2 lg:-translate-x-1/2 lg:grid-cols-2'>
            {stats.map((stat, index) => (
              <div key={index} className='flex flex-col items-center justify-center gap-2.5 text-center'>
                <div className='flex size-7 items-center justify-center [&>svg]:size-7'>
                  <stat.icon />
                </div>
                <span className='text-2xl font-semibold'>{stat.value}</span>
                <p className='text-muted-foreground text-lg'>
                  {stat.description[0]} <br /> {stat.description[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
