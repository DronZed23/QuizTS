import styles from './styles.module.css';
import { RebootIcon } from './img/rebootIcon';
import { setDataLocalStorageQuiz } from '../../API/quizLocalStorage';
import { paths } from '../paths';
import { useNavigate } from 'react-router-dom';
import { PopUpNotification } from './PopUpNotifications';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { langs, RESULT_DIVIDER } from '../../utils/constans';
import CPP from'./img/CPP.png';
import ELIXIR from'./img/Elixir.png';
import JAVA from'./img/Java.png';
import JAVASCRIPT from'./img/JavaScript.png';
import GOLANG from'./img/Golang.png';
import HASKELL from'./img/Haskell.png';
import PYTHON from'./img/Python.png';


const  FALLBACK_VALUES = ['', ''];

export const ResultPage = () => {
    const { id } = useParams<{id: string}>();
    const [selectedLanguage, value ] = id ? id.split(RESULT_DIVIDER) : FALLBACK_VALUES;
    const navigate = useNavigate();
    const [popUpVisibility, setPopupVisibility] = useState(false);
    let val = 0;
    let pict = '';
    if(selectedLanguage === 'CPP'){
        // @ts-ignore
        val = (Math.floor((100 * value)/30+50));
        pict = CPP;

    }
    if(selectedLanguage === 'Java'){
        // @ts-ignore
        val = (Math.floor(((100 * value)/28)+50));
        pict = JAVA;
    }
    if(selectedLanguage === 'JavaScript'){
        // @ts-ignore
        val = (Math.floor(((100 * value)/30)+50));
        pict = JAVASCRIPT;
    }
    if(selectedLanguage === 'Elixir'){
        // @ts-ignore
        val = (Math.floor(((100 * value)/28)+50));
        pict = ELIXIR;
    }
    if(selectedLanguage === 'Golang'){
        // @ts-ignore
        val = (Math.floor(((100 * value)/30)+50));
        pict = GOLANG;
    }
    if(selectedLanguage === 'Haskell'){
        // @ts-ignore
        val = (Math.floor(((100 * value)/28)+50));
        pict = HASKELL;
    }
    if(selectedLanguage === 'Python'){
        // @ts-ignore
        val = (Math.floor(((100 * value)/26)+50));
        pict = PYTHON;

    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleToRestartTest = () => {
        langs.CPP.value = 0;
        langs.Java.value = 0;
        langs.JavaScript.value = 0;
        langs.Elixir.value = 0;
        langs.Golang.value = 0;
        langs.Haskell.value = 0;
        langs.Python.value = 0;
        setDataLocalStorageQuiz('lang', langs);
        navigate(paths.main);

    };

    useEffect(() => {
        if(popUpVisibility) {
            const timer = setTimeout(() => {
                setPopupVisibility(false);
            }, 2000);

            return () => clearTimeout(timer);
        }

    }, [popUpVisibility]);

    const handleShare = () => {
        setPopupVisibility(true);
        navigator.clipboard.writeText(window.location.href);
    };

    return (
        <div>
            <p className={styles.resultLogo}>ЯЗЫКИ ПРОГРАММИРОВАНИЯ</p>
            <div className={styles.resultCardContainer}>
                <p className={styles.resultTestName}>Тест: какой язык программирования тебе подходит</p>
                <p className={styles.resultPercent}>на {val}%</p>
                <p className={styles.resultNameLang}>{selectedLanguage}</p>
                <button className={styles.resultShareBtn} onClick={() => handleShare()}>Поделиться</button>
                <img
                    className={styles.resultLangImg}
                    src={pict}
                />
            </div>
            <button className={styles.resultStartOver} onClick={() => handleToRestartTest()}>Попробовать снова <RebootIcon className={styles.rebootIcon}/></button>
            <button className={styles.resultShareBtn1} onClick={() => handleShare()}>Поделиться</button>
            <PopUpNotification popUpVisibility={popUpVisibility} setPopupVisibility={setPopupVisibility} />;

        </div>
    );
};
