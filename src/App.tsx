import { StrictMode, useEffect, useState } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/mainPage';
import { paths } from './pages/paths';
import { ResultPage } from './pages/results';
import { QuizCard } from './pages/questions/quizCard';
import { getDataLocalStorageQuiz } from './API/quizLocalStorage';

export const App = () => {
    const [step, setStep] = useState(getDataLocalStorageQuiz('step') as number || 1);

    return (
        <StrictMode>
            <HashRouter>
                <Routes>
                    <Route path={paths.main} element={<MainPage setStep={setStep} />} />
                    <Route path={paths.questions} element={<QuizCard step={step} setStep={setStep} />} />
                    <Route path={paths.results} element={<ResultPage/>} />
                    <Route path='*' element={<Navigate to={paths.main}/>} />
                </Routes>
            </HashRouter>
        </StrictMode>
    );
};