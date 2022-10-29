import { Text } from "./components/Text"
import "./styles/index.css"

export function App() {
  return (
    <div className="bg-natureBlue h-screen flex items-center justify-center">
      <div className="bg-transWhite w-2/3 h-3/6 rounded-4xl flex flex-row">
        <div className="w-3/6 h-full flex justify-center gap-6">
          <Text size="md" className="text-gray-400 text mt-12">
            Dados Pessoais
          </Text>
        </div>
        <div className="bg-gray-300 w-3/6 h-full rounded-4xl">

        </div>
      </div>
    </div>
  )
}