import React from 'react';
import { useForm } from 'react-hook-form'
const EditProductPage = () => {
    const { register, error, handleSubmit } = useForm();
    const onSubmit = ( data )=>{console.log(data)}
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <input type="text" ref={register} name="productName"></input>
                <input type="text" ref={register} name="productPrice"></input>
                <input type="text" ref={register} name="productImage"></input>
                <input type="text" ref={register} name="productCategory"></input>
                <input type="text" ref={register} name="productSubCategory"></input>
                <input type="text" ref={register} name="productBrand"></input>
                <input type="text" ref={register} name="productQuantity"></input>
                <input type="text" ref={register} name="productSupplier"></input>
                <input type="text" ref={register} name="productDescription"></input>
                <input type="text" ref={register} name="productColor"></input>
                <input type="text" ref={register} name="productSize"></input>
                <input type="submit" />
            </form>
        </div>
    );
};

export default EditProductPage;