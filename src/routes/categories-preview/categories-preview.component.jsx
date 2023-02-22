import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.components";

import { useSelector } from 'react-redux';

import { selectCategoriesMap } from "../../components/store/categories/category.selector";

const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap)

    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => {

                    const products = categoriesMap[title];

                    return <CategoryPreview key={title} title={title} products={products} />

                })
            }
        </Fragment>
    )
}

export default CategoriesPreview;