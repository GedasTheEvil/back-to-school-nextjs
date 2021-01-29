import ActiveLink from '../active-link/active-link'

export default function Navigation() {
    return (
        <div style={{ margin: 20 }}>
            <ActiveLink href='/'>Home</ActiveLink>
            <ActiveLink href='/products-ssg'>Products SSG</ActiveLink>
            <ActiveLink href='/products-ssr'>Products SSR</ActiveLink>
        </div>
    )
}
