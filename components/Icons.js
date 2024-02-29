export const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const EmailIcon = ({ size, color, ...props }) => {
  return (
    <svg
      fill={color || "#222222"}
      xmlns="http://www.w3.org/2000/svg"
      height={size || 72}
      viewBox="0 -960 960 960"
      width={size || 72}
      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
    </svg>
  );
};

export const Done = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || "24"}
      viewBox="0 -960 960 960"
      width={size || "24"}
    >
      <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
    </svg>
  );
};

export const PhoneIcon = ({ size, color, ...props }) => {
  return (
    <svg
      className={`w-6 h-6  dark:text-white ${color || "text-gray-800"}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z" />
    </svg>
  );
};

export const HomeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
    </svg>
  );
};
export const PlumbingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M771-593 630-734l-85 84-85-84 113-114q12-12 27-17.5t30-5.5q16 0 30.5 5.5T686-848l85 85q18 17 26.5 39.5T806-678q0 23-8.5 45T771-593ZM220-409q-18-18-18-42.5t18-42.5l98-99 85 85-99 99q-17 18-41.5 18T220-409Zm-43 297q-11-12-17-26.5t-6-30.5q0-16 5.5-30.5T177-226l283-282-127-128q-18-17-18-41.5t18-42.5q17-18 42-18t43 18l127 127 57-57 112 114q12 12 12 28t-12 28q-12 12-28 12t-28-12L290-112q-12 12-26.5 17.5T234-89q-15 0-30-6t-27-17Z" />
    </svg>
  );
};
export const HVACIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M480-240q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm0-80q-29 0-56-10.5T375-360h210q-22 19-49 29.5T480-320Zm-138-80q-8-14-13-29t-7-31h316q-2 16-7 31t-13 29H342Zm-20-100q2-16 7-31t13-29h276q8 14 13 29t7 31H322Zm53-100q22-19 49-29.5t56-10.5q29 0 56 10.5t49 29.5H375ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
    </svg>
  );
};
export const ValveIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M440-640v-120H280v-80h400v80H520v120h-80ZM160-120v-320h80v40h120v-120h-40v-80h320v80h-40v120h120v-40h80v320h-80v-40H240v40h-80Zm80-120h480v-80H520v-200h-80v200H240v80Zm240 0Z" />
    </svg>
  );
};

export const AboutUsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
    </svg>
  );
};

export const RebatesIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" />
    </svg>
  );
};

export const CrossIcon = () => {
  return (
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18 18 6m0 12L6 6"
      />
    </svg>
  );
};

export const FacebookIcon = () => {
  return (
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const InstagramIcon = () => {
  return (
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
        stroke="#33363F"
        stroke-width="2"
      />
      <circle cx="16.5" cy="7.5" r="1.5" fill="#33363F" />
      <circle cx="12" cy="12" r="3" stroke="#33363F" stroke-width="2" />
    </svg>
  );
};

export const Hamburger = () => {
  return (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M5 7h14M5 12h14M5 17h14"
      />
    </svg>
  );
};
