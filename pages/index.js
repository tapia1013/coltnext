import Link from 'next/link'

const Index = () => {
  console.log("********RUNNING INDEX COMPONENT!********");
  return (
    <>
      <Link href='/about'>
        <a>About Page</a>
      </Link>
      <h1>Index Page!!!</h1>
    </>
  )
}

export default Index;