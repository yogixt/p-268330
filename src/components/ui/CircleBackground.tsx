import React from "react";

interface CircleBackgroundProps {
  className?: string;
}

export const CircleBackground: React.FC<CircleBackgroundProps> = ({
  className,
}) => {
  return (
    <div className={className}>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="248" height="295" viewBox="0 0 248 295" fill="none" xmlns="http://www.w3.org/2000/svg" class="circle-bg-1" style="position: absolute; width: 635px; height: 635px; left: 142px; top: -340px"> <circle cx="317.5" cy="-22.5" r="317.5" fill="#FFA360" fill-opacity="0.1"></circle> </svg>',
          }}
        />
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="333" height="272" viewBox="0 0 333 272" fill="none" xmlns="http://www.w3.org/2000/svg" class="circle-bg-2" style="position: absolute; width: 496px; height: 496px; left: 57px; top: -224px"> <circle cx="248" cy="24" r="246.5" stroke="#FFA360" stroke-opacity="0.08" stroke-width="3"></circle> </svg>',
          }}
        />
      </div>
      <div className="absolute w-[372px] h-[372px] left-[-323px] rotate-[27.089deg] border-2 border-solid border-[rgba(255,163,96,0.22)] top-[625px] max-sm:hidden" />
      <div className="absolute w-[372px] h-[372px] left-[-265px] border-2 border-solid border-[rgba(255,163,96,0.22)] top-[684px] max-sm:hidden" />
    </div>
  );
};
