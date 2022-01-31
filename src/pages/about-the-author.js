import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.png'
import { Helmet } from 'react-helmet'
import Slider from "react-slick";

const ATB = (props) => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
    }

    return (
        <>
            <Layout>
                <Helmet title="Author | Gary Caplan" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt=" Gary Caplan"/>
                            </div>
{/* 
                            <div className="author-philosophy">
                                Persever to win. Determination, diligence, and hard work result in success. Although the dream may delay tarry for it. Backward never, forward ever. One day at a time. When you loose don't give up, get up again and continue where you left off. Set short and long term goals in life and progress in life. Every down experience is a lesson not to be repeated. Heed to warning signs. Every individual needs a mentor to look up to for effective balanced growth in life. - Dr. Henreitta Abbey
                            </div> */}

                        </div>

                        <article className="article-section column" id="author">
                                <p>
                                Gary Caplan was born in Philadelphia and earned three bachelor’s degrees from the University of Pittsburgh, later earning M.D. and M.P.H. degrees. He serves as a colonel and preventive medicine officer in the reserves and has published articles in medical journals. Caplan became interested in reading science fiction and fantasy books as a young man and, after practicing medicine for several years, began to write his own fiction. At first strictly a hobby, his writing flourished and he decided to publish both a science fiction and sword and sorcery novels in his spare time.
                                </p>   
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name"> Gary Caplan</span>
                                </span>
                            </p>

                        </article>

                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;