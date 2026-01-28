'use client'

import Image from 'next/image'
import Link from 'next/link'

const launches = [
  {
    id: 1,
    name: 'Brinco Argola Cristal',
    image: '/lifestyle/launch-1.jpg',
    href: '/categoria/brincos',
  },
  {
    id: 2,
    name: 'Colar Pingente Delicado',
    image: '/lifestyle/launch-2.jpg',
    href: '/categoria/colares',
  },
  {
    id: 3,
    name: 'Pingente Personalizado',
    image: '/lifestyle/launch-3.jpg',
    href: '/categoria/colares',
  },
  {
    id: 4,
    name: 'Pulseira Tennis Dourada',
    image: '/lifestyle/launch-4.jpg',
    href: '/categoria/pulseiras',
  },
]

export function LaunchesSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-semibold uppercase tracking-wide text-foreground md:text-4xl">
            Últimos Lançamentos
          </h2>
          <p className="mt-2 text-muted-foreground">
            Confira o que acabamos de lançar
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {launches.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[3/4] w-full">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-serif text-sm italic text-white drop-shadow-lg">
                    {item.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
