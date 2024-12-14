import PropTypes from "prop-types";
import styles from "./CategoryCard.module.css";
import { useEffect } from "react";
import { useState } from "react";


function Card(props){
    const imageSource = `/public/MEDIA/FOLDER ${props.letter}/${props.letter}0.jpg`;
    const titlePath =`/public/MEDIA/FOLDER ${props.letter}/${props.letter}.txt`;
    const descriptionPath =`/public/MEDIA/FOLDER ${props.letter}/${props.letter}_d.txt`;
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

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

    return(
        <div className={styles.card}>
            <div className={styles.cardButton}><button style={{position: 'absolute'}}>Vezi mai mult</button></div>
            <img alt={imageSource} className={styles.cardImage} src={imageSource}></img>
            <h2>{title}</h2>
            <p className={styles.cardParagraph}>{description}</p>
        </div>
    );
}
Card.defaultProps = {
    letter: 'A'
};
Card.propTypes = {
    letter: PropTypes.string
};

export default Card;