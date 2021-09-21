import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

const PRODUCT_MUTATION = gql`
mutation createProduct( $seller: String, $createProductInput: CreateProductInput!){
    createProduct(seller: $seller, createProductInput: $createProductInput){
        _id
    }
}
`

export default function DynamicRouting(){
    const router = useRouter();

    const [ product ] = useMutation(PRODUCT_MUTATION)
    
    const [ mySeller, setSeller ] = useState('')
    const [ myProduct, setProduct ] = useState('')
    const [ myDetail, setDetail ] = useState('')
    const [ myPrice, setPrice ] = useState('')


    function onChangeSeller(event){
        setSeller(event.target.value)
    }

    function onChangeProduct(event){
        setProduct(event.target.value)
    }

    function onChangeDetail(event){
        setDetail(event.target.value)
    }

    function onChangePrice(event){
        setPrice(event.target.value)
    }
    
    
    async function onClickMutation(){
        try{
            const result = await product({
                variables: {
                    seller: mySeller,
                    createProductInput: {
                        name: myProduct,
                        detail: myDetail,
                        price: Number(myPrice)
                    }
                }
            })
                console.log(result)
                console.log(result.data.createProduct._id)
                router.push(`/Quiz/07-02-dataquery/${result.data.createProduct._id}`)
                
        } 
            catch(error){ 
                console.log(error)
            }
        
    }

    return(
        <>
            판매자: <input type="text" onChange={onChangeSeller}></input> <br/> <br/>
            상품명: <input type="text" onChange={onChangeProduct}></input> <br/> <br/>
            상품내용: <input type="text" onChange={onChangeDetail}></input> <br/> <br/>
            상품가격: <input type="text" onChange={onChangePrice}></input> <br/> <br/>
            <button onClick={onClickMutation}>상품 등록</button>
        </>
    )

}