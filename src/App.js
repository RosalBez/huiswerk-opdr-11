import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import Logo from "./assets/screenshot-logo.png"
import Form from "./components/Form"

function App() {
    const [amountOfStrawberries, setAmountOfStrawberries] = useState(0)
    const [amountOfBananas, setAmountOfBananas] = useState(0)
    const [amountOfApples, setAmountOfApples] = useState(0)
    const [amountOfKiwis, setAmountOfKiwis] = useState(0)


    return (

    <>
        <header>
            <img src={Logo} alt="Fruitmand Bezorgservice"/>
        </header>

        <main>
            <div className="div1">
                <h2 className='button'> 🍓 Aardbeien</h2>
                <div className="div2">
                    <Button
                        buttonClass='button'
                        buttonType="button"
                        handleClick={() => setAmountOfStrawberries(amountOfStrawberries === 0 ? 0 : amountOfStrawberries - 1)}
                    >
                        -
                    </Button>
                    <p> {amountOfStrawberries}</p>

                    <Button
                        buttonType="button"
                        handleClick={() => setAmountOfStrawberries(amountOfStrawberries + 1)}
                    >
                        +
                    </Button>
                </div>
            </div>

            <div className="div1">
                <h2> 🍌 Bananen</h2>
                <div className="div2">
                    <Button
                        buttontype="button"
                        handleClick={() => setAmountOfBananas(amountOfBananas === 0 ? 0 : amountOfBananas - 1)}
                    >
                        -
                    </Button>
                    <p> {amountOfBananas}</p>
                    <Button
                        buttonType="button"
                        handleClick={() => setAmountOfBananas(amountOfBananas + 1)}
                    >
                        +
                    </Button>
                </div>
            </div>

            <div className="div1">
                <h2> 🍏 Appels</h2>
                <div className="div2">
                    <Button
                        buttontype="button"
                        handleClick={() => setAmountOfApples(amountOfApples === 0 ? 0 : amountOfApples - 1)}
                    >
                        -
                    </Button>
                    <p> {amountOfApples}</p>
                    <Button
                        buttonType="button"
                        handleClick={() => setAmountOfApples(amountOfApples + 1)}
                    >
                        +
                    </Button>
                </div>
            </div>

            <div className="div1">
                <h2> 🥝 Kiwi's</h2>
                <div className="div2">
                    <Button
                        buttontype="button"
                        handleClick={() => setAmountOfKiwis(amountOfKiwis === 0 ? 0 : amountOfKiwis - 1)}
                    >
                        -
                    </Button>
                    <p> {amountOfKiwis}</p>
                    <Button
                        buttonType="button"
                        handleClick={() => setAmountOfKiwis(amountOfKiwis + 1)}
                    >
                        +
                    </Button>
                </div>
            </div>

            <div>
                <Button
                    buttonType="button"
                    handleClick={() => setAmountOfStrawberries(0) + setAmountOfKiwis(0) + setAmountOfApples(0) + setAmountOfBananas(0)}
                >
                    Reset
                </Button>

            </div>

        </main>

        <footer>
            <Form/>



        </footer>

    </>

)


}


export default App;
