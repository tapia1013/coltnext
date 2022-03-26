import Link from 'next/link';

const styles = {
  display: 'flex',
  backgroundColor: 'grey',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem'
}

const Navbar = () => {
  return (
    <div style={styles}>
      <Link href='/'>
        <button>Home Page</button>
      </Link>
      <Link href='/about'>
        <button>About Page</button>
      </Link>
      <Link href='/contact'>
        <a>Contact Page</a>
      </Link>
    </div>
  )
}

export default Navbar