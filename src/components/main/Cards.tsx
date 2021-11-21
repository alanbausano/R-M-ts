import { useCharacterDetails } from '../hooks/useCharacterDetails/index'
import { CardDetails } from './CardDetails'

export default function Cards() {
  const { characters, isLoading } = useCharacterDetails()
  return (
    isLoading ? <h1>Loading characers...</h1> : (<section className="cards">
      <CardDetails characters={characters} />
    </section>)
  )
}
