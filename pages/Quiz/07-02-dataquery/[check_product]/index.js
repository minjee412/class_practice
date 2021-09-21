import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'


const PRODUCT_QUERY = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId:$productId){
            _id
            seller
            name
            detail
            price
        }
    }
`

export default function DataQuery (){
    const router = useRouter();
    console.log(router.query);
    const {data} = useQuery(PRODUCT_QUERY,{ variables: { productId : router.query.check_product} })

        console.log(data)

    return(

        <>
            <div>상품 상세 페이지 입니다.</div>
            <div>사용자 Id : {router.query._id}</div>
            
            <div>판매자: {data ? data.fetchProduct.seller: "loading..."}</div>
            <div>상품명: {data ? data.fetchProduct.name: "loading..."}</div>
            <div>상품 상세: {data ? data.fetchProduct.detail: "loading..."}</div>
            <div>상품 가격: {data ? data.fetchProduct.price: "loading..."}</div>
        </>

    )

}

