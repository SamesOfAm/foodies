import Link from 'next/link'
export default function MealsListPage() {
  return(
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Alle Gerichte</h1>
      <p><Link href="/meals/Kartoffelbrei">Kartoffelbrei</Link></p>
    </main>
  )
}
