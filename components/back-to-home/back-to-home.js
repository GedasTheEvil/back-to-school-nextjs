import Link from 'next/link'

export default function BackToHome() {
    return (
        <Link href='/'>
            <a>
                <h2>&larr; Back to Home</h2>
            </a>
        </Link>
    )
}
