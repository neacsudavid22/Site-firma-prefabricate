import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./View.module.css"

function View({ letter = 'A' }) {
    const [imageNumber, setimageNumber] = useState(0);  // Initialize as null to handle loading
    const [sources, setSources] = useState([`${letter}0.jpg`]);  // Initialize as empty array
    const navigate = useNavigate();

    useEffect(() => {
        const getFilesUrls = async () => {
          try {
            const response = await fetch(`http://localhost:8000/api/getImages/${letter}`, {method: "GET"});
            const data = await response.json(); 
            console.log(data.imageNames)
            setSources(data.imageNames); 

          } catch (err) {
            console.error('Error fetching:', err);  
          }
        };
      
        getFilesUrls();  
    }, [letter]);
      
    const handleNext = () => {
        console.log(imageNumber);
        setimageNumber(() => imageNumber + 1 < sources.length ? imageNumber + 1 : 0);
    };

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <>
            <button onClick={handleGoBack}>Go back</button>
            <div className={styles.container}>
                <img src={`/MEDIA/FOLDER ${letter}/${sources[imageNumber]}`} alt="Image could not be loaded"></img>
            </div>
            <button onClick={handleNext}>
                Next
            </button>
        </>
    );
}

View.propTypes = {
    letter: PropTypes.string,
};

export default View;
