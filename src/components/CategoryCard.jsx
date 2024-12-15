import PropTypes from "prop-types";
import styles from "./CategoryCard.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 


function Card({ letter = 'A' }){
    const imageSource = `/public/MEDIA/FOLDER ${letter}/${letter}0.jpg`;
    const titlePath =`/public/MEDIA/FOLDER ${letter}/${letter}.txt`;
    const descriptionPath =`/public/MEDIA/FOLDER ${letter}/${letter}_d.txt`;
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchTitle = async () => {
            try {
                const response = await fetch(titlePath);
                if (!response.ok)
                    throw new Error(`Couldn't load the title from path: ${titlePath}`);
                const text = await response.text();
                setTitle(text);
            } catch (err) {
                console.error(err);
                setTitle("Error on title");
            }
        };
        fetchTitle();
    }, [titlePath]);

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const response = await fetch(descriptionPath);
                if (!response.ok)
                    throw new Error(`Couldn't load the description from path: ${descriptionPath}`);
                const text = await response.text();
                setDescription(text);
            } catch (err) {
                console.error(err);
                setDescription("Error on description");
            }
        };
        fetchDescription();
    }, [descriptionPath]); 

    const handleNavigation = () => {
        navigate(`/item/${letter}`); 
    };

    return(
        <div className={styles.card}>
            <div className={styles.cardButton}>
                <button style={{position: 'absolute'}} onClick={handleNavigation}>Vezi mai mult</button>
                </div>
            <img alt={imageSource} className={styles.cardImage} src={imageSource}></img>
            <h2>{title}</h2>
            <p className={styles.cardParagraph}>{description}</p>
        </div>
    );
}

Card.propTypes = {
    letter: PropTypes.string
};

export default Card;