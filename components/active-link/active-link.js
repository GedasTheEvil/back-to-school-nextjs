import { useRouter } from 'next/router'

export default function ActiveLink({ children, href }) {
    const router = useRouter()
    const style = {
        paddingRight: 40,
        color: router.pathname === href ? 'red' : 'grey',
    }

    console.log(router)

    const handleClick = e => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} style={style}>
            <strong>{children}</strong>
        </a>
    )
}
