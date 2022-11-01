import { PaperPlaneRight } from "phosphor-react"
import { FormEvent } from 'react';


import "./styles/index.css"

import { Text } from "./components/Text"
import { TextInput } from "./components/TextInput"
import { Button, SendButton } from "./components/Button"
import SelectDropdownCountries from "./components/SelectDropdownCountries"
import SelectDropdownCities from "./components/SelectDropdownCities"


export function App() {
  async function handleSignIn(event: FormEvent) {

    event.preventDefault()

  }
  
  return (
    <div className="bg-natureBlue h-screen flex items-center justify-center">
      <form onSubmit={handleSignIn} className="bg-transWhite w-2/3 h-3/6 rounded-4xl flex flex-row divide-x">
        <div className="w-3/6 h-full flex flex-col items-center justify-center gap-6">
          <Text size="md" className="text-gray-500 mb-2">
            Dados Pessoais
          </Text>
          <TextInput.Root>
            <TextInput.Input required type='text' id="nome" placeholder="Nome" />
          </TextInput.Root>
          <TextInput.Root>
            <TextInput.Input required type='email' id="email" placeholder="E-mail" />
          </TextInput.Root>
          <TextInput.Root>
            <TextInput.Input required type='tel' id="tel" placeholder="Telefone" />
          </TextInput.Root>
          <TextInput.Root>
            <TextInput.Input required type='text' id="cpf" placeholder="CPF" />
          </TextInput.Root>
        </div>

        <div className="w-3/6 h-full flex flex-col items-center justify-center gap-6">
          <Text size="md" className="text-gray-500 mb-2">
            Destinos de Interesse
          </Text>
          <SelectDropdownCountries />
          <SelectDropdownCities />
          <Button type="submit" className="w-32 h-12">
            <SendButton.Icon>
              <PaperPlaneRight />
            </SendButton.Icon>
            Enviar
          </Button>
        </div>
      </form>
    </div>
  )
}