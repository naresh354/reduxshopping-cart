import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { setProductName, setProductQuantity, setProductPrice } from '../slices/FormSlice'
import { clearCart } from '../slices/cartSlice'

const Checkout = () => {

    const state = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const history = useHistory()

    console.log(state, "state")

    useEffect(() => {

        dispatch(setProductName(state?.cartItems?.[0]?.name))
        dispatch(setProductPrice(state?.cartTotalAmount))
        dispatch(setProductQuantity(state?.cartTotalQuantity))


    }, [state, dispatch])

    console.log(dispatch(setProductName), "product")

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(clearCart());
        toast.success("Successfully Purchased", { position: "top-center" })
        setTimeout(() => (window.location.href = "/"), 1500);
        // const data = new FormData(event.currentTarget);
        // console.log({
        //   email: data.get("email"),
        //   name: data.get("name"),
        //   email: data.get("email"),
        //   state: data.get("state"),
        //   city: data.get("city"),
        //   address: data.get("address"),

        // });
    };



    return (

        <div className='card'>
            <div className='container w-50 p-5'>

                <p className='checkoutName'>Check out</p>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" id='productName' name="productName" value={state?.cartItems?.[0]?.name} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="text" id='productAmount' name='productAmount' value={`${state?.cartTotalAmount} $`} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control type="text" id='productDescription' name="productDescription" value={state?.cartItems?.[0]?.desc} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control type="text" id='productQuantity' name="productQuantity" value={state?.cartTotalQuantity} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formGroupPassword">
                        <img src={state?.cartItems?.[0]?.image} style={{ width: "100%", height: "80vh" }} ></img>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <div className='controlButton'>



                            <Link to="/cart">
                                <Button variant="danger">Cancel</Button>
                            </Link>

                            <Button variant="success" type='submit'>Confirm</Button>

                        </div>
                    </Form.Group>




                </Form>




            </div>


        </div>
    )
}

export default Checkout