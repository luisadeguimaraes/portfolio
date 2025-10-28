


type FlagComponentProps = {
  isSelected: boolean;
};

const Peru = ({ isSelected }: FlagComponentProps) => {
    return (
        <>
            {isSelected ?
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_183_10814)">
                        <g clip-path="url(#clip0_183_10814)">
                            <path d="M1.66667 -0.666504C-0.101443 -0.666504 -1.79714 0.0358747 -3.04738 1.28612C-4.29762 2.53636 -5 4.23205 -5 6.00016L-5 36.0002C-5 37.7683 -4.29762 39.464 -3.04738 40.7142C-1.79714 41.9644 -0.101443 42.6668 1.66667 42.6668H15V-0.666504H1.66667Z" fill="#D91023" />
                            <path d="M15 -0.666504H35V42.6668H15V-0.666504Z" fill="white" />
                            <path d="M48.3333 -0.666504H35V42.6668H48.3333C50.1014 42.6668 51.7971 41.9644 53.0474 40.7142C54.2976 39.464 55 37.7683 55 36.0002V6.00016C55 4.23205 54.2976 2.53636 53.0474 1.28612C51.7971 0.0358747 50.1014 -0.666504 48.3333 -0.666504Z" fill="#D91023" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d_183_10814" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.85 0 0 0 0 0.85 0 0 0 0 0.85 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_183_10814" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_183_10814" result="shape" />
                        </filter>
                        <clipPath id="clip0_183_10814">
                            <rect x="4" width="42" height="42" rx="21" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                :
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                        <g clip-path="url(#clip0_183_10815)">
                            <path d="M-2.33333 -0.666504C-4.10144 -0.666504 -5.79714 0.0358747 -7.04738 1.28612C-8.29762 2.53636 -9 4.23205 -9 6.00016L-9 36.0002C-9 37.7683 -8.29762 39.464 -7.04738 40.7142C-5.79714 41.9644 -4.10144 42.6668 -2.33333 42.6668H11V-0.666504H-2.33333Z" fill="#D91023" />
                            <path d="M11 -0.666504H31V42.6668H11V-0.666504Z" fill="white" />
                            <path d="M44.3333 -0.666504H31V42.6668H44.3333C46.1014 42.6668 47.7971 41.9644 49.0474 40.7142C50.2976 39.464 51 37.7683 51 36.0002V6.00016C51 4.23205 50.2976 2.53636 49.0474 1.28612C47.7971 0.0358747 46.1014 -0.666504 44.3333 -0.666504Z" fill="#D91023" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_183_10815">
                            <rect width="42" height="42" rx="21" fill="white" />
                        </clipPath>
                    </defs>
                </svg>


            }

        </>
    )
}

export default Peru