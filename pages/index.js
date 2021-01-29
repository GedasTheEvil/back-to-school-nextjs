import Link from 'next/link'
import HeadTitle from '../components/head-title/head-title'
import Footer from '../components/footer/footer'
import Navigation from '../components/navigation/navigation'

export default function Home() {
    return (
        <div className='container'>
            <HeadTitle title='Back to school with Next.js' />
            <Navigation />
            <main className='main'>
                <h1 className='title'>
                    Back to school with{' '}
                    <a href='https://nextjs.org' target='_blank'>
                        Next.js!
                    </a>
                </h1>
                <div className='grid'>
                    <Link href='/products-ssg'>
                        <a className='card'>
                            <h3>Products SSG &rarr;</h3>
                            <p>Next.js will pre-render this page at build time</p>
                        </a>
                    </Link>
                    <Link href='/products-ssr'>
                        <a className='card'>
                            <h3>Products SSR &rarr;</h3>
                            <p>Next.js will prerender this page on each request</p>
                        </a>
                    </Link>
                    <a
                        href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                        className='card'
                        target='_blank'
                    >
                        <h3>Deploy &#8599;</h3>
                        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    )
}
