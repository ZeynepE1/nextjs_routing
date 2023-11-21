
import Link from 'next/link'
export default function Home() {
  return (<div>
    {/*  static route  */}
    <Link href='/aboutUs'>About Us</Link>
    <br />
    <br />
    <Link href='/docs/post-1' >Post-1</Link>
    <br />
    <br />
    <Link href='/docs/post-2' >Post-2</Link>
    <br />
    <br />
    {/* https://nextjs.org/docs/app/api-reference/components/link */}
    <Link
      className='test'
      href={{
        pathname: '/aboutUs',
        query: {
          name: 'Next.js',
          surname: 'ff'
        }
      }}
    >Hakkımızda obje ile</Link>
  </div>)

}
