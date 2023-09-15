/* eslint-disable react/jsx-key */
import './cart.css'


const Cart = ({ selectedcard, totalremaining, time }) => {
    return (
        <div className="cart">
            <h3 className='hour'>Credit hour remaing:{totalremaining}</h3>
            <hr className='hr' />
            <h3>Course Name: </h3>
            <ul className='ul'>
                {selectedcard.map((card, index) => (
                    <li key={index}>
                        {card.name}
                    </li>
                ))}
            </ul>

            <hr className='hr' />
            <p>Total Credit Hour {time}: </p>

        </div>
    );
};

export default Cart;