import "../styles/LandingPage.css";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExpandMoreOutlined, Facebook, FacebookOutlined, Twitter, X } from "@mui/icons-material";
import { Add, SportsHandball, PeopleOutline } from "@mui/icons-material";
import InstagramIcon from '@mui/icons-material/Instagram';

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll(); // Obtenir la progression du scroll
  const widthImg1 = useTransform(scrollYProgress, [0, 1], ["470px", "480px"]);
  const widthImg2 = useTransform(scrollYProgress, [0, 1], ["350px", "400px"]);
  const widthImg3 = useTransform(scrollYProgress, [0, 1], ["450px", "500px"]);
  const widthImg4 = useTransform(scrollYProgress, [0, 1], ["200px", "220px"]);

  return (
    <div className="page">
      <div className="header">
      <div>
        <img
          src="./images/logo-partiel.png"
          height={"45px"}
          width={"45px"}
          alt="Logo"
        />
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#concept">Le Concept</a></li>
            <li><a href="#team">La Team</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="actions">
        <button
          className="logButton"
          onClick={() => (window.location.href = "/login")}
        >
          Se connecter / S'inscrire
        </button>
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </div>
      <div className="thebody">
        <div className="hero" id="accueil">
          <div className="images">
            <motion.img
              className="img1"
              src="images/1.png"
              alt="Description"
              style={{ width: widthImg1, height: "auto" }}
              initial={{ x: 90 }}
              animate={{ x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.img
              className="img2"
              src="images/2.png"
              alt="Description"
              style={{ width: widthImg2, height: "auto" }}
              initial={{ opacity: 0, y: 0, x: 0 }}
              animate={{ opacity: 1, y: 30, x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.img
              className="img3"
              src="images/3.png"
              alt="Description"
              style={{ width: widthImg3, height: "auto" }}
              initial={{ opacity: 0, y: 0, x: 0 }}
              animate={{ opacity: 1, y: 0, x: 37 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
            <motion.img
              className="img4"
              src="images/4.png"
              alt="Description"
              style={{ width: widthImg4, height: "auto" }}
              initial={{ opacity: 0, y: 50, x: 30 }}
              animate={{ opacity: 1, y: 0, x: 30 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="mask"></div>

          <div className="titre">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              Bienvenue sur Sport Squad.
            </motion.h2>
          </div>

          <motion.div
            className="fleche"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <ExpandMoreOutlined style={{ fontSize: "40px" }} />
          </motion.div>
        </div>

        <div className="concept" id="concept">
          <div className="up">
            <div className="text">
              <p>
                Organisez et rejoignez des matchs de sport près de chez vous.
              </p>
              <p className="p2">
                Créez votre match en <span>quelques clics</span> et invitez vos
                amis à vous rejoindre.
              </p>
            </div>

            <div className="button">
              <button className="logButton mr-2"  onClick={() => (window.location.href = "/login")}>Créer mon match</button>
              <button className="logButton"  onClick={() => (window.location.href = "/login")}>Rejoindre un match</button>
            </div>
          </div>
          <div className="down">
            <img src="/images/interface.png" height={"700px"} alt="" />
          </div>
        </div>

        <div className="fonctionnement">
          <p className="p2">Comment ça marche ?</p>
          <p>En 3 étapes simples</p>
          <div className="stepper">
            <div>
              <p>1</p>
            </div>
            <span></span>
            <div>
              <p>2</p>
            </div>
            <span></span>
            <div>
              <p>3</p>
            </div>
          </div>

          <div className="steps">
            <div className="step">
              <Add style={{ fontSize: "30px" }} />
              <p className="ml-3">Créez votre match en quelques clics</p>
            </div>
            <div className="step">
              <PeopleOutline style={{ fontSize: "30px" }} />
              <p className="ml-3">Invitez vos amis à vous rejoindre</p>
            </div>
            <div className="step">
              <SportsHandball style={{ fontSize: "30px" }} />
              <p className="ml-3">Participez à des matchs près de chez vous</p>
            </div>
          </div>
          <p className="p2">
            Faites du <span>sport</span> où que vous soyez sur la planète.
          </p>
        </div>

        <div className="separator relative w-full h-screen overflow-hidden">
          <div className="title">
            <span>SPORTSQUAD</span>
            <p>2025 © All rights reserved</p>
          </div>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="videosection"
          >
            <source src="/video/basket.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="team"  id="team">
          <p className="p2">
            {" "}
            Notre <span>équipe</span>
          </p>

          <p>
            Nous sommes une équipe de développeurs passionnés par le sport et
            les nouvelles technologies. Nous avons créé Sport Squad pour vous
            permettre de pratiquer votre sport favori où que vous soyez sur la
            planète.
          </p>

          <div className="teamMembers">
            <div className="member">
              <img src="/images/gaia.png" height={"400px"} alt="" />
              <p>Gaia DUCOURNAU</p>
              <p>Développeur Web</p>
  
            </div>
            <div className="member">
              <img src="/images/jonathan.png" height={"400px"} alt="" />
              <p>Jonathan DAH</p>
              <p>Développeur Web</p>

            </div>
            <div className="member">
              <img src="/images/diego.png" height={"400px"} alt="" />
              <p>Diego MAS-BOUVRY</p>
              <p>Développeur Web</p>

            </div>
            <div className="member">
              <img src="/images/pierre.png" height={"400px"} alt="" />
              <p>Pierre SCHIAVON</p>
              <p>Développeur Web</p>

            </div>
            <div className="member">
              <img src="/images/doug.png" height={"400px"} alt="" />
              <p>Douglas QUASHIE</p>
              <p>Développeur Web</p>

            </div>
          </div>
        </div>
      </div>
      <div className="footer" id='footer'>
  <div className="footer-content">

    <div className="footer-section about">
      <h3>SPORTSQUAD</h3>
      <p>Trouvez des joueurs près de vous et rejoignez les matchs !</p>
    </div>
    

    <div className="footer-section links">
      <h3>Liens Rapides</h3>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">À propos</a></li>
        <li><a href="/login">S'inscrire</a></li>
      </ul>
    </div>
    
  
    <div className="footer-section contact">
      <h3>Contact</h3>
      <p>2 Place de l'Europe</p>
      <p>31200 Toulouse, France</p>
      <p>contact@ynov.com</p>
      <p>+33 1 23 45 67 89</p>
    </div>
    

    <div className="footer-section social">
      <h3>Suivez-nous</h3>
      <div className="social-icons">
        
        <a href="#"><X/></a>
        <a href="#"><FacebookOutlined/></a>
        <a href="#"><InstagramIcon/></a>
      </div>
    </div>
  </div>
  
 
  <div className="footer-bottom">
    <p>&copy; <script>document.write(new Date().getFullYear())</script> SPORTSQUAD. Tous droits réservés.</p>
  </div>
</div>
    </div>
  );
};

export default LandingPage;
