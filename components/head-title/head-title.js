import Head from 'next/head'

export default function HeadTitle({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
    )
}
