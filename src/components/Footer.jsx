import React from 'react'

function Footer() {
  return (
    <>
    <section className="reviews" id="reviews">
        <div className="heading">
            <span>Reviews</span>
            <h1>whats Our Customer Say</h1>
        </div>
        <div className="reviews-container">
            <div className="box">
                <div className="rev-img">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.HgOMMBlkQkB1hjkmHNgPRQAAAA&pid=Api&P=0&h=180" alt=""/>
                </div>
                <h2>Someone Name</h2>
                <div className="stars">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facilis, necessitatibus odit itaque
                    numquam rerum fugit temporibus, autem, unde eum nostrum ipsa corrupti ipsum asperiores dolores ab
                    aliquam sint harum.</p>
            </div>

            <div className="box">
                <div className="rev-img">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.hZx8XluN1Xagr6SF9cocdQHaIC&pid=Api&P=0&h=180" alt=""/>
                </div>
                <h2>Someone Name</h2>
                <div className="stars">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia laborum ea nihil maiores unde odio
                    error numquam. Illo ipsam ipsum libero laborum dolore culpa! Distinctio at incidunt cumque tempora
                    quisquam?</p>
            </div>

            <div className="box">
                <div className="rev-img">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.t5Gg-YJbApcSDhWOFrkFwAHaLH&pid=Api&P=0&h=180" alt=""/>
                </div>
                <h2>Someone Name</h2>
                <div className="stars">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vitae voluptatibus beatae aliquam
                    suscipit molestias aperiam nulla hic.</p>
            </div>
        </div>
    </section>

    <section className="newsletter">
        <h2>Subscribe To Newsletter</h2>
        <div className="box">
            <input type="text" placeholder="Enter Your Email.."/>
            <a href="#" className="btn">Subscribe</a>
        </div>
    </section>
    <div className="copyright">
        <p>&#169; CarpoolVenom All Right Reserved</p>
        <div className="social">
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="#"><i className='bx bxl-instagram'></i></a>
        </div>
    </div>
    </>
  )
}

export default Footer