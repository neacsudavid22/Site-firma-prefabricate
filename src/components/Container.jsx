import Card from './CategoryCard'
import styles from "./Container.module.css";

function Container(){
    return(
        <div className={styles.container}>
         <Card letter='A'/>
         <Card letter='B'/>
         <Card letter='C'/>
         <Card letter='D'/>
         <Card letter='E'/>
         <Card letter='F'/>
         <Card letter='G'/>
         <Card letter='H'/>
         <Card letter='I'/>
         <Card letter='J'/>
        </div>
    );
}

export default Container