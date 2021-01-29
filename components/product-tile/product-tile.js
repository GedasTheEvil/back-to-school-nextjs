import Link from 'next/link'
import styles from './product-tile.module.css'

export default function ProductTile({ uri, product }) {
    const { id, image, title, description, price } = product

    return uri ? (
        <Link href={uri ? uri : '/'}>
            <a className={styles.card}>
                <img src={image} alt={title} style={{ width: '200px' }} />
                <h2>{title}</h2>
                <div>{price}</div>
            </a>
        </Link>
    ) : (
        <div className={styles.card}>
            <img src={image} alt={title} style={{ width: '200px' }} />
            <h2>{title}</h2>
            <div>{price}</div>
            <div>{description}</div>
        </div>
    )
}
