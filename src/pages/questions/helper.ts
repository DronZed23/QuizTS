import { getDataLocalStorageQuiz } from '../../API/quizLocalStorage';

export const getNameWithMaxValue = () => {
    const lang = getDataLocalStorageQuiz('lang');
    const array = [];
    let nameWithMaxValue;

    for (const key in lang) {
        array.push(lang[key].value);
    }

    const maxValue = Math.max(...array);

    for (const key in lang) {
        if (lang[key].value === maxValue) {
            nameWithMaxValue = lang[key].name;
        }
    }

    return nameWithMaxValue;
};
export const getValMax = () => {
    const lang = getDataLocalStorageQuiz('lang');
    const array1 = [];

    for (const key in lang) {
        array1.push(lang[key].value);
    }

    const maxVal = Math.max(...array1);

    return maxVal;
};
