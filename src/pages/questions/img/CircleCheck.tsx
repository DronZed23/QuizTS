import React from 'react';
type Props = {
    className: string;
}
export const CircleCheck = ({ className } : Props) => (
    <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_479_1851)">
            <path d="M24 4C13 4 4 13 4 24C4 35 13 44 24 44C35 44 44 35 44 24C44 13 35 4 24 4Z" fill="#9DE89E"/>
            <path d="M32.4 20.6L22.8 30.2C22 31 20.8 31 20 30.2L15.6 25.8C14.8 25 14.8 23.8 15.6 23C16.4 22.2 17.6 22.2 18.4 23L21.4 26L29.6 17.8C30.4 17 31.6 17 32.4 17.8C33.2 18.6 33.2 19.8 32.4 20.6Z" fill="white"/>
        </g>
        <defs>
            <clipPath id="clip0_479_1851">
                <rect width="48" height="48" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);
