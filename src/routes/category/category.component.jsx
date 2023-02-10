import './category.styles.scss';

import { Link, useParams } from 'react-router-dom';

import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../components/contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const { category } = useParams();

    console.log(category)

    const { categoriesMap } = useContext(CategoriesContext)

    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category])

    return (
        <>
            <h2 className='category-title'>
                {category.toUpperCase()}
            </h2>

            <div className='category-container'>
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </>
    )

}

export default Category;