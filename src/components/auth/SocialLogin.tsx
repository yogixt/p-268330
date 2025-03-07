import React from "react";

interface SocialLoginProps {
  onGoogleLogin?: () => void;
  onFacebookLogin?: () => void;
  onAppleLogin?: () => void;
}

export const SocialLogin: React.FC<SocialLoginProps> = ({
  onGoogleLogin,
  onFacebookLogin,
  onAppleLogin,
}) => {
  return (
    <div className="absolute -translate-x-2/4 text-center left-2/4 bottom-[52px] max-sm:fixed max-sm:w-full max-sm:px-5 max-sm:py-0 max-sm:bottom-[30px]">
      <div className="text-[#FF7D39] text-sm font-semibold mb-5">
        Or continue with
      </div>
      <div className="flex gap-2.5 justify-center">
        <button
          onClick={onGoogleLogin}
          className="w-[60px] h-10 flex items-center justify-center cursor-pointer bg-[#ECECEC] rounded-[10px]"
          aria-label="Sign in with Google"
        >
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg layer-name="ph:google-logo-bold" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="google-icon"> <path d="M12.0001 21.375C10.4582 21.3753 8.94003 20.9954 7.58009 20.2688C6.22016 19.5421 5.06043 18.4913 4.20366 17.2094C3.34688 15.9275 2.81951 14.4541 2.66826 12.9196C2.51702 11.3852 2.74656 9.83714 3.33657 8.41261C3.92657 6.98809 4.85882 5.73108 6.05072 4.75294C7.24261 3.77481 8.65736 3.10574 10.1696 2.80503C11.6819 2.50432 13.245 2.58123 14.7204 3.02897C16.1958 3.47671 17.5381 4.28144 18.6282 5.37188C18.7331 5.47639 18.8163 5.60058 18.8731 5.73733C18.9298 5.87408 18.9591 6.02068 18.9591 6.16875C18.9591 6.31682 18.9298 6.46343 18.8731 6.60017C18.8163 6.73692 18.7331 6.86111 18.6282 6.96563C18.4147 7.17295 18.1289 7.28892 17.8313 7.28892C17.5337 7.28892 17.2479 7.17295 17.0344 6.96563C16.3761 6.30043 15.5918 5.77298 14.7275 5.41404C13.8631 5.05511 12.936 4.87186 12.0001 4.875C10.6391 4.87596 9.30698 5.26664 8.16112 6.00085C7.01525 6.73506 6.10363 7.78208 5.53407 9.01806C4.9645 10.2541 4.76083 11.6273 4.94713 12.9754C5.13344 14.3235 5.70193 15.59 6.58536 16.6252C7.4688 17.6604 8.63022 18.4209 9.93227 18.8168C11.2343 19.2127 12.6225 19.2275 13.9327 18.8593C15.2428 18.4911 16.4201 17.7554 17.3253 16.7392C18.2305 15.723 18.8258 14.4688 19.0407 13.125H12.0001C11.7017 13.125 11.4155 13.0065 11.2046 12.7955C10.9936 12.5845 10.8751 12.2984 10.8751 12C10.8751 11.7016 10.9936 11.4155 11.2046 11.2045C11.4155 10.9935 11.7017 10.875 12.0001 10.875H20.2501C20.5484 10.875 20.8346 10.9935 21.0455 11.2045C21.2565 11.4155 21.3751 11.7016 21.3751 12C21.3701 14.4849 20.3808 16.8666 18.6237 18.6237C16.8666 20.3807 14.4849 21.37 12.0001 21.375Z" fill="black"></path> </svg>',
              }}
            />
          </div>
        </button>
        <button
          onClick={onFacebookLogin}
          className="w-[60px] h-10 flex items-center justify-center cursor-pointer bg-[#ECECEC] rounded-[10px]"
          aria-label="Sign in with Facebook"
        >
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg layer-name="ic:sharp-facebook" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="facebook-icon"> <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="black"></path> </svg>',
              }}
            />
          </div>
        </button>
        <button
          onClick={onAppleLogin}
          className="w-[60px] h-10 flex items-center justify-center cursor-pointer bg-[#ECECEC] rounded-[10px]"
          aria-label="Sign in with Apple"
        >
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg layer-name="ic:baseline-apple" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="apple-icon"> <path d="M17.0502 20.28C16.0702 21.23 15.0002 21.08 13.9702 20.63C12.8802 20.17 11.8802 20.15 10.7302 20.63C9.29016 21.25 8.53016 21.07 7.67016 20.28C2.79016 15.25 3.51016 7.59 9.05016 7.31C10.4002 7.38 11.3402 8.05 12.1302 8.11C13.3102 7.87 14.4402 7.18 15.7002 7.27C17.2102 7.39 18.3502 7.99 19.1002 9.07C15.9802 10.94 16.7202 15.05 19.5802 16.2C19.0102 17.7 18.2702 19.19 17.0402 20.29L17.0502 20.28ZM12.0302 7.25C11.8802 5.02 13.6902 3.18 15.7702 3C16.0602 5.58 13.4302 7.5 12.0302 7.25Z" fill="black"></path> </svg>',
              }}
            />
          </div>
        </button>
      </div>
    </div>
  );
};
