import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';


type Props ={
    setStep: (value: number) => void;
}

// eslint-disable-next-line react/prop-types
export const MainPage = ({ setStep } : Props) => {
    const navigate = useNavigate();
    const step = 1;
    const handleFinishQuiz = () => {
        navigate('/questions');
        setStep(step);
    };

    return (
        <div>
            <img className={styles.mainPageImg} src={require('./image 15.jpg')}/>
            <p className={styles.mainPageH1}><span className={styles.mainSpanText}>IT’S A</span> MATCH!</p>
            <p className={styles.mainPageP1}>Какой язык программирования тебе больше подходит?</p>
            <button onClick={handleFinishQuiz} className={styles.mainPageStartBtn}>Начать тест</button>
        </div>
    );
};
