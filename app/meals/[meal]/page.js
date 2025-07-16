export default function MealPage({params}) {
  return(
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>{params.meal}</h1>
    </main>
  )
}
