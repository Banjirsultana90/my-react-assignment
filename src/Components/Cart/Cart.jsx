/* eslint-disable react/jsx-key */


const Cart = ({selectedcard}) => {
    return (
        <div  className="">
            <h3>Credit hour remaing:</h3>
            <h4>Course Name: </h4>
            {selectedcard.map((card)=>(
                <li>{card.name}</li> 
                
            ))}
            <h4>Total Credit Hour : </h4>
            
        </div>
    );
};

export default Cart;