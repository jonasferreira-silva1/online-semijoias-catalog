'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send to your API
    setSubmitted(true)
  }

  return (
    <section className="border-b border-border bg-secondary/30 py-10">
      <div className="container px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-semibold text-foreground md:text-2xl">
              Junte-se a nós
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Obtenha descontos exclusivos
            </p>
          </div>
          
          {submitted ? (
            <p className="text-primary">Obrigada por se cadastrar!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <Input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 border-border bg-background"
              />
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 border-border bg-background"
              />
              <Button 
                type="submit" 
                className="h-12 whitespace-nowrap bg-foreground px-8 text-background hover:bg-foreground/90"
              >
                Cadastrar
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
