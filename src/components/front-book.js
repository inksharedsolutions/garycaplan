import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/book.png'
// import Accordions from '../containers/accordions'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books" >


                        <div className="content-wraps">

                            {/* <span className="italic-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                Read, and learn in various formats
                            </span> */}

                            <h1 className="heading--featured" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p data-aos="fade-up" data-aos-duration="2000">
                                Gary Caplan was born in Philadelphia and earned three bachelor’s degrees from the University of Pittsburgh, later earning M.D. and M.P.H. degrees. He serves as a colonel and preventive medicine officer in the reserves and has published articles in medical journals. Caplan became interested in reading science fiction and fantasy books as a young man and, after practicing medicine for several years, began to write his own fiction. At first strictly a hobby, his writing flourished and he decided to publish both a science fiction and sword and sorcery novels in his spare time.
                            </p>

                            <button className="btn-book-featured" data-aos="fade-up" data-aos-duration="3000">
                                <Link to="/books">
                                    Read More
                                </Link>
                            </button>

                        </div>
                        <div className="book-wraps" >
                            <img src={FrontBook} data-aos="fade-up" data-aos-duration="3000" alt="book cover" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook