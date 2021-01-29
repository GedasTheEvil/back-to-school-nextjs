import { getSingleProduct } from '../../api-client/product-api'
import ProductTile from '../../components/product-tile/product-tile'
import HeadTitle from '../../components/head-title/head-title'
import BackToHome from '../../components/back-to-home/back-to-home'
import Navigation from '../../components/navigation/navigation'

export default function Product({ product }) {
    return (
        <div className='container'>
            <Navigation />
            <BackToHome />
            <HeadTitle title='Products SSR' />
            <main className='main'>
                <h1 className='title'>Products SSR</h1>
                <div className='grid'>
                    <ProductTile product={product} />
                </div>
            </main>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const product = await getSingleProduct(params.id)

    if (!product)
        return {
            notFound: true,
        }

    return {
        props: {
            product,
        },
    }
}
