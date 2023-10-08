import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizData, langs, RESULT_DIVIDER } from '../../utils/constans';
import { paths } from '../paths';
import { CircleCheck } from './img/CircleCheck';
import { setDataLocalStorageQuiz } from '../../API/quizLocalStorage';
import { getNameWithMaxValue, getValMax } from './helper';

type Props ={
    step: number;
    setStep: (value: number) => void;
}

export const QuizCard = ({ step , setStep } : Props) => {
    const [active, setActive] = useState(0);
    const [activeCont, setCont] = useState(0);
    const [cpp, setCpp] = useState(0);
    const [java, setJava] = useState(0);
    const [js, setJs] = useState(0);
    const [elixir, setElixir] = useState(0);
    const [golang, setGolang] = useState(0);
    const [haskell, setHaskell] = useState(0);
    const [python, setPython] = useState(0);
    const navigate = useNavigate();

    const handleClick = (optionNumber : number, CPP : number, Java : number, JavaScript : number, Elixir : number, Golang : number, Haskell : number, Python : number) => {
        setActive(optionNumber);
        setCpp(CPP);
        setJava(Java);
        setJs(JavaScript);
        setElixir(Elixir);
        setGolang(Golang);
        setHaskell(Haskell);
        setPython(Python);
        setCont(1);
    };

    useEffect(() => {
        if (step !== 0) {
            setDataLocalStorageQuiz('step', step);
        }
    }, [step]);

    const handleNextQuestion = () => {
        setStep(step + 1);
        langs.CPP.value += cpp;
        langs.Java.value += java;
        langs.JavaScript.value += js;
        langs.Elixir.value += elixir;
        langs.Golang.value += golang;
        langs.Haskell.value += haskell;
        langs.Python.value += python;
        setActive(0);
        setCont(0);
        setDataLocalStorageQuiz('lang', langs);
        if(step === quizData.length){
            console.log(getValMax());
            console.log(getNameWithMaxValue());
            navigate(paths.results.replace(':id', `${getNameWithMaxValue()}${RESULT_DIVIDER}${getValMax()}`));

        }
    };


    const doNotActivated = () =>{
        return;
    };

    return (
        <>
            {quizData.map(item => item.id === step &&
                <div className={styles.quizCardConteiner} key={item.id}>
                    <p className={styles.quizCardTestName}>Тест: какой язык программирования тебе подходит</p>
                    <p className={styles.quizCardQuestionName}>{item.question}</p>
                    <div className={styles.buttonsContainer}>
                        <button
                            className={active === 1 ? styles.active : styles.quizCardTestAnsOpt}
                            onClick={() => handleClick(
                                1,
                                item.answer1.CPP,
                                item.answer1.Java,
                                item.answer1.JavaScript,
                                item.answer1.Elixir,
                                item.answer1.Golang,
                                item.answer1.Haskell,
                                item.answer1.Python,
                            )}>
                            {item.answer1.text}
                            <CircleCheck className={active === 1 ? styles.activeCircle1 : styles.imgCircle}  />
                        </button>
                        <button
                            className={active === 2 ? styles.active : styles.quizCardTestAnsOpt}
                            onClick={() => handleClick(
                                2,
                                item.answer2.CPP,
                                item.answer2.Java,
                                item.answer2.JavaScript,
                                item.answer2.Elixir,
                                item.answer2.Golang,
                                item.answer2.Haskell,
                                item.answer2.Python
                            )}>
                            {item.answer2.text}
                            <CircleCheck className={active === 2 ? styles.activeCircle1 : styles.imgCircle}  />
                        </button>
                        <button
                            className={active === 3 ? styles.active : styles.quizCardTestAnsOpt}
                            onClick={() => handleClick(
                                3,
                                item.answer3.CPP,
                                item.answer3.Java,
                                item.answer3.JavaScript,
                                item.answer3.Elixir,
                                item.answer3.Golang,
                                item.answer3.Haskell,
                                item.answer3.Python)}>
                            {item.answer3.text}
                            <CircleCheck className={active === 3 ? styles.activeCircle1 : styles.imgCircle}  />
                        </button>
                        <button
                            className={active === 4 ? styles.active : styles.quizCardTestAnsOpt}
                            onClick={() => handleClick(
                                4,
                                item.answer4.CPP,
                                item.answer4.Java,
                                item.answer4.JavaScript,
                                item.answer4.Elixir,
                                item.answer4.Golang,
                                item.answer4.Haskell,
                                item.answer4.Python,
                            )}>
                            {item.answer4.text}
                            <CircleCheck className={active === 4? styles.activeCircle1 : styles.imgCircle}  />
                        </button>
                    </div>
                    <button
                        className={activeCont === 1? styles.activeContBtn : styles.quizCardContBtn}
                        onClick={activeCont === 1? () => handleNextQuestion() : doNotActivated}>
                        Продолжить
                    </button>
                    <p className={styles.questNum}>{item.id}/5</p>
                </div>)}
        </>
    );
};