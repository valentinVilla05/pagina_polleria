import { Clock8Icon, MapPinIcon, Mail, PhoneIcon } from 'lucide-react'

export const contactInfo = [
  {
    title: 'WhatsApp',
    icon: PhoneIcon,
    description: '+34 642 65 36 04',
    link: 'https://api.whatsapp.com/send/?phone=34642653604&text=Hola%2C+quiero+hacer+un+pedido&type=phone_number&app_absent=0'
  },
  {
    title: 'Horario',
    icon: Clock8Icon,
    description: 'De martes a domingo\n10:00 am a 5:00 pm'
  },
  {
    title: 'Encuéntranos',
    icon: MapPinIcon,
    description: 'C. Adelfa, 2, Ronda,\n 18006 Granada',
    link: 'https://www.google.com/maps/place/Asadero+Ronda+y+comida+para+llevar/@37.163977,-3.6049971,17z/data=!3m1!4b1!4m6!3m5!1s0xd71fd81dbc3c2ef:0x1841d2889a600732!8m2!3d37.1639728!4d-3.6024222!16s%2Fg%2F11z9rfc5cf?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    title: 'Email',
    icon: Mail,
    description: 'info@seliziakitchen.com',
    link: 'mailto:info@seliziakitchen.com' // opcional, si también quieres que Email sea clicable
  }
]
