import React from "react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  onClick?: () => void;
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  className,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`absolute cursor-pointer left-8 top-[53px] ${className || ""}`}
      aria-label="Go back"
    >
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="back-circle" style="width: 44px; height: 44px"> <foreignObject x="-40" y="-40" width="124" height="124"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_2382_202_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22Z" fill="#1D1D1D" fill-opacity="0.4"></path> <defs> <clipPath id="bgblur_0_2382_202_clip_path" transform="translate(40 40)"><path d="M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22Z"></path> </clipPath></defs> </svg>',
          }}
        />
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg layer-name="icon arrow left" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="back-arrow" style="position: absolute; left: 18px; top: 16px"> <path d="M6.37686 13L1.4375 8.06061C0.854167 7.47728 0.854167 6.52274 1.4375 5.9394L6.37686 1" stroke="#E1E1E1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
          }}
        />
      </div>
    </button>
  );
};
