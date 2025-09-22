
import { useState } from "react";


type FlagComponentProps = {
  isSelected: boolean;
};

const Colombia = ({ isSelected }: FlagComponentProps) => {
    return (
        <>

            {isSelected ? <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_183_10817)">
                    <g clip-path="url(#clip0_183_10817)">
                        <path d="M48.3333 -0.666016H1.66667C-0.101443 -0.666016 -1.79714 0.036363 -3.04738 1.28661C-4.29762 2.53685 -5 4.23254 -5 6.00065L-5 21.0007H55V6.00065C55 4.23254 54.2976 2.53685 53.0474 1.28661C51.7971 0.036363 50.1014 -0.666016 48.3333 -0.666016Z" fill="#FBD116" />
                        <path d="M-5 21H55V32.6667H-5V21Z" fill="#22408C" />
                        <path d="M-5 35.9993C-5 37.7675 -4.29762 39.4632 -3.04738 40.7134C-1.79714 41.9636 -0.101443 42.666 1.66667 42.666H48.3333C50.1014 42.666 51.7971 41.9636 53.0474 40.7134C54.2976 39.4632 55 37.7675 55 35.9993V32.666H-5V35.9993Z" fill="#CE2028" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_d_183_10817" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.85 0 0 0 0 0.85 0 0 0 0 0.85 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_183_10817" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_183_10817" result="shape" />
                    </filter>
                    <clipPath id="clip0_183_10817">
                        <rect x="4" width="42" height="42" rx="21" fill="white" />
                    </clipPath>
                </defs>
            </svg>
                :
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                        <g clip-path="url(#clip0_183_10818)">
                            <path d="M44.3333 -0.666016H-2.33333C-4.10144 -0.666016 -5.79714 0.036363 -7.04738 1.28661C-8.29762 2.53685 -9 4.23254 -9 6.00065L-9 21.0007H51V6.00065C51 4.23254 50.2976 2.53685 49.0474 1.28661C47.7971 0.036363 46.1014 -0.666016 44.3333 -0.666016Z" fill="#FBD116" />
                            <path d="M-9 21H51V32.6667H-9V21Z" fill="#22408C" />
                            <path d="M-9 35.9993C-9 37.7675 -8.29762 39.4632 -7.04738 40.7134C-5.79714 41.9636 -4.10144 42.666 -2.33333 42.666H44.3333C46.1014 42.666 47.7971 41.9636 49.0474 40.7134C50.2976 39.4632 51 37.7675 51 35.9993V32.666H-9V35.9993Z" fill="#CE2028" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_183_10818">
                            <rect width="42" height="42" rx="21" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            }



        </>
    )
}

export default Colombia