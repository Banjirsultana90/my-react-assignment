import { useEffect, useState } from 'react';
import './home.css'
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = () => {
    const [cards, setcards] = useState([])
    const [selectedcard, setselectedcard] = useState([])
    const [remaining, setremaining] = useState(0)
    const [totalhour, settotalhour] = useState(0)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setcards(data))

    }, [])

    // const { name, image } = cards
    const handleClick = (card) => {
        const isExist = selectedcard.find(item => item.id == card.id)
        let time = card.Credit
        if (isExist) {
            return toast.error('Already booked')
        }

        else {
            selectedcard.forEach((item) => {
                time = time + item.Credit

            })
            const totalremaining = 20 - time

            if (totalremaining < 0) {
                // return alert ('Credit hour finished')
                return toast.error('Credit hour finished');
            }

            // console.log(totalremaining)
            settotalhour(time)
            setremaining(totalremaining)
            setselectedcard([...selectedcard, card])

        }


    }
    // console.log(selectedcard)
    return (

        <div className="home-container">
            <div>Course Registration</div>
            <div className="card-container">
                <div className="cards">


                    {
                        cards.map((card) => (
                            <div key={card.key} className='card'>
                                <div className='card-image'>
                                    <img src={card.image} />
                                    <h2>{card.name}</h2>
                                    <p className='details'>{card.details}</p>
                                    <div className='price-credit' >
                                        <p>$Price:{card.price}</p>
                                        <p>Credit:{card.Credit}hr</p>

                                    </div>
                                    <button onClick={() => handleClick(card)}>Select</button>

                                </div>

                            </div>

                        ))
                    }




                </div>
                <div className="cart">
                    <Cart selectedcard={selectedcard} totalremaining={remaining} time={totalhour}></Cart>
                </div>

            </div>
            <ToastContainer
                position="top-center" 
                hideProgressBar={false} 
                newestOnTop={true} 
                rtl={false} 
                pauseOnFocusLoss={true} 
                draggable={true} 
                pauseOnHover={true}
            />


        </div>
    );
};

export default Home;