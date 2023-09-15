import { useEffect, useState } from 'react';
import './home.css'
import Cart from '../Cart/Cart';



const Home = () => {
    const [cards, setcards] = useState([])
    const[selectedcard, setselectedcard]=useState([])
    const [remaing , setremaining]=useState(0)
    const[totalhour,settotalhour]=useState(0)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setcards(data))

    }, [])
    
    // const { name, image } = cards
    const handleClick=(card)=>{
        const isExist=selectedcard.find(item=>item.id==card.id)
        let time=card.Credit
        if(isExist){
            return alert('Already booked')
        }
        else{
            selectedcard.forEach((item)=>{
                time=time+item.Credit
                
            })
            const totalremaining=20-time
            // console.log(totalremaining)
            settotalhour(time)
            setremaining(totalremaining)
            setselectedcard([...selectedcard,card])

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
                                    <img src={card.image}/>
                                    <h2>{card.name}</h2>
                                    <p className='details'>{card.details}</p>
                                    <div className='price-credit' >
                                        <p>$Price:{card.price}</p>
                                        <p>Credit:{card.Credit}hr</p>
                                        
                                    </div>
                                    <button onClick={()=>handleClick(card)}>Select</button>

                                </div>

                            </div>

                        ))
                    }
                    



                </div>
                <div className="cart">
                    <Cart selectedcard={selectedcard}></Cart>
                </div>

            </div>

        </div>
    );
};

export default Home;