import React, {useState} from 'react';
import Button from "./Button";




function ProductDetails(props){
    console.log("Product detail component executed");
    let badgeClass = 'badge-margin-left-240 badge ';
    badgeClass += props.isAvailable ? 'bg-success' : 'bg-danger';

    // let productCount = 0;
    let [productCount, upadeCount] = useState(0)
 
function displayFormattedProductCount() {
    return productCount > 0 ? productCount : 0;
}

    let  incrementProductCount= function(){
        // productCount++;
        // console.log(productCount);
        upadeCount(++productCount)
    }
    
    let  decrementProductCount= function(){
        // productCount--;
        // console.log(productCount);
        upadeCount(--productCount)
    }
    
    return (
        <div className="d-flex align-items-center justify-content-start mt-1" >
                                <h6 className="font-weight-bold my-2" style={{ marginRight: 30 }}>₹{props.price}</h6>
                                <Button eventHandler = {decrementProductCount} disable={productCount == 0} > - </Button>
                                <span style={{ padding: '0px 20px', fontSize: 15 }}>
                                    {displayFormattedProductCount()}
                                    </span>
                                <Button eventHandler={incrementProductCount}> + </Button>
                                <span className={badgeClass}>{props.isAvailable ? 'Available' : 'Unavailable'}</span>
                                
                            </div>
    // )

    // return React.createElement('div',{className:"d-flex align-items-center justify-content-start mt-1"},
                // React.createElement('h6',{className:"font-weight-bold my-2" ,style:{marginRight: 30}}, "₹" + props.price),
                // React.createElement(Button, {}, "-"),
                // React.createElement('span', {style:{padding: '0px 20px' ,fontSize : 15}},displayFormattedProductCount()),
                // React.createElement(Button, {}, "-"),
                // React.createElement('span', {className: badgeClass} , props.isAvailable ? 'Available' : 'Unavailable')
                   )
}



export default ProductDetails;