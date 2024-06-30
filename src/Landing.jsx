
function Landing() {

    return (
        <>
            <section>
                <div className="landing">
                    <img src="src/assets/night-sky-starts.jpg" alt="background image of a night sky with moving starts that have been blured" id="landing-background"/>
                    <div className="landing-container">
                        <div className="landing-image">
                            <img src="src/assets/Trio.png" alt="An image of Harry Potter, Hermione Granger and Ronald Weaslie" id='hp-image'/>
                        </div>
                        <div className="landing-text">
                            <p>
                                Harry Potter World connects to an API to show information about the fictional characters found in the within the Harry Potter Universe. <br /><br />
                                This project was made using React. <br /> <br />
                                This projects front-end and back-end code can be found at my GitHub Page
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing