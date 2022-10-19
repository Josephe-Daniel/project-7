import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <div className="main_content">
        <Header />
        <Banner />
        <section>
          <div className="collapse_box">
            <Collapse
              label="Fiabilité"
              content={
                <p>
                  Les annonces postées sur Kasa garantissent une fiabilité
                  totale. Les photos sont conformes aux logements, et toutes les
                  informations sont régulièrement vérifiées par nos équipes.
                </p>
              }
            />
            <Collapse
              label="Respect"
              content={
                <p>
                  La bienveillance fait partie des valeurs fondatrices de Kasa.
                  Tout comportement discriminatoire ou de perturbation du
                  voisinage entraînera une exclusion de notre plateforme.
                </p>
              }
            />
            <Collapse
              label="Service"
              content={
                <p>
                  Nos équipes se tiennent à votre disposition pour vous fournir
                  une expérience parfaite. N'hésitez pas à nous contacter si
                  vous avez la moindre question.
                </p>
              }
            />
            <Collapse
              label="Responsabilité"
              content={
                <p>
                  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                  que pour les voyageurs, chaque logement correspond aux
                  critères de sécurité établis par nos services. En laissant une
                  note aussi bien à l'hôte qu'au locataire, cela permet à nos
                  équipes de vérifier que les standards sont bien respectés.
                  Nous organisons également des ateliers sur la sécurité
                  domestique pour nos hôtes.
                </p>
              }
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
