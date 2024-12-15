import Container from '../components/Container';
import styles from './Home.module.css'

function Home(){
    return(
        <>
        <div className={styles.prefata}>
            <h1>Prefabricate din beton</h1>
            <br></br>
            <br></br>
            <p>Firma SC.PITIGOI.SRL, este o afacere de familie, începută în urmă cu peste 20 de ani, pornind de la vânzarea unui trabant . Firma Sc Pitigoi SRL vă ajută la crearea unui cuib beton. Oferim consultanță în alegerea produselor care se adaptează cerințelor și nevoilor fiecărui client.</p>
            <a href='#contact' style={{textDecoration: 'none', fontSize:"5em", color:'orange', marginTop:"1em"}}>&#8681;</a>
        </div>   
        <div style={{ justifyContent: 'center', display: 'flex'}}>
            <Container/>
        </div>
        <div className={styles.contact}>
            <div style={{justifyContent: 'left'}}>
            <h3>Contact: </h3>
            <ul>
                <li>Email: ndavid2003.dn@gmail.com</li>
                <li>Telefon: 0766280914</li>
            </ul>
            </div>
            <iframe id='contact' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11299.679878703582!2d24.23495!3d44.924963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474d19ee8d5b8e37%3A0xf902e25574f4579c!2sSC%20PITIGOI%20SRL!5e0!3m2!1sro!2sro!4v1734298304446!5m2!1sro!2sro"
            ></iframe>
        </div>
        </>
    );
}

export default Home;