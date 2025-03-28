import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/LandingPage.css'
import { motion, useScroll, useTransform } from "framer-motion"
import { ExpandMoreOutlined } from '@mui/icons-material'
import { Add, SportsHandball, PeopleOutline } from '@mui/icons-material'

const LandingPage = () => {

    const { scrollYProgress } = useScroll(); // Obtenir la progression du scroll
    const widthImg1 = useTransform(scrollYProgress, [0, 1], ["470px", "480px"]);
    const widthImg2 = useTransform(scrollYProgress, [0, 1], ["350px", "400px"]);
    const widthImg3 = useTransform(scrollYProgress, [0, 1], ["450px", "500px"]);
    const widthImg4 = useTransform(scrollYProgress, [0, 1], ["200px", "220px"]);


    return (
        <div className='page'>
            <div className='header'>
                <div>
                    <img src="./images/logo-partiel.png" height={'45px'} width={'45px'} alt="" />
                </div>
                <div className='menu'>
                    <nav>
                        <ul>
                            <li>Accueil</li>
                            <li>Le Concept</li>
                            <li>La Team</li>
                            <li>Contact</li>
                        </ul>
                    </nav>

                </div>
                <div><button className='logButton'>Se connecter / S'inscrire</button></div>
            </div>
            <div className='thebody'>

                <div className='hero'>

                    <div className='images'>

                        <motion.img
                            className='img1'
                            src="images/1.png"
                            alt="Description"
                            style={{ width: widthImg1, height: "auto" }}
                            initial={{ x: 90 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        <motion.img
                            className='img2'
                            src="images/2.png"
                            alt="Description"
                            style={{ width: widthImg2, height: "auto" }}
                            initial={{ opacity: 0, y: 0, x: 0 }}
                            animate={{ opacity: 1, y: 30, x: 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        <motion.img
                            className='img3'
                            src="images/3.png"
                            alt="Description"
                            style={{ width: widthImg3, height: "auto" }}
                            initial={{ opacity: 0, y: 0, x: 0 }}
                            animate={{ opacity: 1, y: 0, x: 37 }}
                            transition={{ duration: 1.4, ease: "easeInOut" }}
                        />
                        <motion.img
                            className='img4'
                            src="images/4.png"
                            alt="Description"
                            style={{ width: widthImg4, height: "auto" }}
                            initial={{ opacity: 0, y: 50, x: 30 }}
                            animate={{ opacity: 1, y: 0, x: 30 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />


                    </div>

                    <div className='mask'>


                    </div>

                    <div className='titre'>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                        >
                            Bienvenue sur Sport Squad.
                        </motion.h2>
                    </div>

                    <motion.div
                        className='fleche'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                    >
                        <ExpandMoreOutlined style={{ fontSize: "40px" }} />
                    </motion.div>

                </div>

                <div className='concept'>


                    <div className='up'>
                        <div className='text'>

                            <p>Organisez et rejoignez des matchs de sport près de chez vous.</p>
                            <p className='p2'>Créez votre match en <span>quelques clics</span> et invitez vos amis à vous rejoindre.</p>

                        </div>

                        <div className='button'>

                            <button className='logButton mr-2'>Créer mon match</button>
                            <button className='logButton'>Rejoindre un match</button>

                        </div>
                    </div>
                    <div className='down'>

                        <img src="/images/interface.png" height={'700px'} alt="" />
                    </div>



                </div>

                <div className='fonctionnement'>
                    <p className='p2'>Comment ça marche ?</p>
                    <p>En 3 étapes simples</p>
                    <div className='stepper'>
                        <div><p>1</p></div>
                        <span></span>
                        <div><p>2</p></div>
                        <span></span>
                        <div><p>3</p></div>
                    </div>

                    <div className='steps'>

                        <div className='step'>
                            <Add style={{ fontSize: "30px" }} />
                            <p className='ml-3'>Créez votre match en quelques clics</p>
                        </div>
                        <div className='step'>
                            <PeopleOutline style={{ fontSize: "30px" }} />
                            <p className='ml-3'>Invitez vos amis à vous rejoindre</p>
                        </div>
                        <div className='step'>
                            <SportsHandball style={{ fontSize: "30px" }} />
                            <p className='ml-3'>Participez à des matchs près de chez vous</p>
                        </div>


                    </div>
                    <p className='p2'>Faites du <span>sport</span> où que vous soyez sur la planète.</p>

                </div>


                <div className="separator relative w-full h-screen overflow-hidden">

                    <div className='title'>
                        <span>SPORTSQUAD</span>
                        <p>2025 © All rights reserved</p>
                    </div>

                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                        <source src="/video/basket.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className='team'>

                    <p className='p2'> Notre <span>équipe</span></p>

                    <p>Nous sommes une équipe de développeurs passionnés
                        par le sport et les nouvelles technologies.
                        Nous avons créé Sport Squad pour vous permettre de
                        pratiquer votre sport favori où que vous soyez sur la planète.
                    </p>

                    <div className='teamMembers'>
                        <div className='member'>
                            <img src="/images/team1.png" height={'400px'} alt="" />
                            <p>John Doe</p>
                            <p>CEO</p>
                            <p>CEO</p>
                        </div>
                        <div className='member'>
                            <img src="/images/team2.png" height={'400px'} alt="" />
                            <p>Jane Doe</p>
                            <p>CTO</p>
                            <p>CTO</p>
                        </div>
                        <div className='member'>
                            <img src="/images/team3.png" height={'400px'} alt="" />
                            <p>Jack Doe</p>
                            <p>CMO</p>
                            <p>CMO</p>
                        </div>
                        <div className='member'>
                            <img src="/images/team2.png" height={'400px'} alt="" />
                            <p>Jane Doe</p>
                            <p>CTO</p>
                            <p>CTO</p>
                        </div>
                        <div className='member'>
                            <img src="/images/team3.png" height={'400px'} alt="" />
                            <p>Jack Doe</p>
                            <p>CMO</p>
                            <p>CMO</p>
                        </div>
                    </div>




                </div>
                <div>CONTACT</div>


            </div>
            <div className='footer'>
                FOOTER
            </div>

        </div>
    )
}

export default LandingPage