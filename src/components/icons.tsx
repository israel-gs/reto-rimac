interface IconProps {
  className?: string
}

export const IconArrowLeft = ({ className }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11.5" transform="rotate(-180 12 12)" stroke="currentColor" />
    <path fillRule="evenodd" clipRule="evenodd" d="M14.0601 8.42905C13.8133 8.19032 13.4175 8.19032 13.1707 8.42905L9.93988 11.5541C9.6867 11.7989 9.6867 12.2011 9.93988 12.4459L13.1707 15.5709C13.4175 15.8097 13.8133 15.8097 14.0601 15.5709C14.3133 15.3261 14.3133 14.9239 14.0601 14.6791L11.2904 12L14.0601 9.32095C14.3133 9.07606 14.3133 8.67394 14.0601 8.42905Z" fill="currentColor" />
  </svg>
)

export const IconCoverageLR = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2603_868" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
      <rect width="48" height="48" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0_2603_868)">
      <path d="M40.4677 38.3996L16.9108 44.6765C13.7355 45.4888 10.4862 43.6427 9.67392 40.4673L3.397 16.9104C2.58469 13.735 4.43084 10.4857 7.60623 9.67343L31.1631 3.39651C34.3385 2.5842 37.5877 4.43035 38.4001 7.60574L44.677 31.1626C45.4893 34.2642 43.6431 37.5134 40.4677 38.3996Z" fill="#D7DBF5" />
      <path d="M26.8062 38.3994V31.6055C26.8062 30.7932 26.3631 29.9809 25.6246 29.6117L18.6831 25.624C17.7231 25.0332 16.4677 25.0332 15.5077 25.624L8.56618 29.6117C7.82772 30.0548 7.38464 30.7932 7.38464 31.6055V32.0486L9.67387 40.5409C9.82157 41.0578 9.96926 41.5009 10.1908 41.8701L15.5077 44.8978C15.9508 44.8978 16.4677 44.824 16.9108 44.6763L20.8985 43.6424L25.1816 41.1317C26.2154 40.5409 26.8062 39.507 26.8062 38.3994Z" fill="#545D94" />
      <path d="M15.5076 25.5503C16.4676 24.9595 17.723 24.9595 18.683 25.5503L25.6245 29.5379C26.363 29.981 26.806 30.7195 26.806 31.5318V38.3256C26.806 39.4333 26.2153 40.541 25.1814 41.0579L15.5076 25.5503Z" fill="#8C95CB" />
      <path d="M17.1325 36.627C17.1325 36.1101 16.8371 35.667 16.4679 35.4455L8.64016 30.9409C8.12323 30.6455 7.45862 31.0147 7.45862 31.6055V32.0486L9.74785 40.5409C9.89555 41.0578 10.0432 41.5009 10.2648 41.8701L15.5817 44.8978C16.0248 44.8978 16.4679 44.824 16.9848 44.6763C17.1325 44.5286 17.2063 44.307 17.2063 44.0117V36.627H17.1325Z" fill="#545D94" />
      <path d="M8.5664 29.538L15.951 25.255C16.6156 24.8857 17.5018 24.8857 18.1664 25.255L25.551 29.538C26.0679 29.8334 26.0679 30.6457 25.551 30.9411L17.7233 35.4457C17.2802 35.6673 16.7633 35.6673 16.3202 35.4457L8.49255 30.9411C8.04948 30.6457 8.04948 29.8334 8.5664 29.538Z" fill="#C8C8FA" />
      <path d="M29.8341 6.71948L10.3387 12.8487L9.52641 18.3133L6.35102 16.4672L5.76025 22.5964L8.64025 24.2949L8.34487 26.2887L10.191 25.2549L20.2341 31.0887L23.3356 26.4364L15.7295 22.0056L19.5695 19.7902C21.1203 18.9041 23.0403 18.9041 24.591 19.7902L34.5603 25.7718L38.4741 17.3533L29.8341 6.71948Z" fill="#141938" />
      <path d="M11.6676 22.1534C16.2461 13.4396 24.3692 8.71342 29.9076 11.5934C33.8215 13.6611 35.3723 18.978 34.2646 25.0334C34.1907 25.6242 34.7815 25.9934 35.2246 25.7719L39.36 23.4088C40.3938 22.818 41.28 22.0057 41.8707 20.9719L38.3261 7.60574C37.5138 4.43035 34.1907 2.5842 31.0892 3.39651L7.53226 9.67343C4.35687 10.4857 2.51072 13.8088 3.32302 16.9103L8.19687 35.1503C8.12303 31.3103 9.30456 26.658 11.6676 22.1534Z" fill="#FF858D" />
      <path d="M22.671 22.8181L22.8925 22.4489L21.8587 21.8581C21.7848 21.7843 21.711 21.7104 21.5633 21.7104C19.8648 20.8243 17.2802 22.3012 15.8771 25.0335C14.4741 27.692 14.4002 30.6458 16.0248 31.5319L17.3541 32.2704L17.6494 31.7535C19.2002 31.5319 21.0464 30.2027 22.0802 28.2089C23.1879 26.2889 23.3356 24.1473 22.671 22.8181Z" fill="#141938" />
      <path d="M22.8923 22.449C21.1939 21.5628 18.6093 23.0397 17.2062 25.772C15.8031 28.5043 15.7292 31.4582 17.4277 32.3443C19.1262 33.2305 22.0062 31.7535 23.4093 29.0212C24.8123 26.2889 24.6647 23.3351 22.8923 22.449Z" fill="#545D94" />
      <path d="M23.1875 25.9198L21.8583 25.1813C20.9721 24.7382 19.7168 25.4767 19.0521 26.8059C18.3137 28.1352 18.3137 29.6121 19.126 30.0552L20.4552 30.7936L21.1198 29.6121C21.4891 29.3167 21.8583 28.8736 22.1537 28.3567C22.3752 27.9136 22.5229 27.3967 22.5967 26.9536L23.1875 25.9198Z" fill="#FAAF37" />
      <path d="M23.188 25.9196C22.3019 25.4765 21.0465 26.215 20.3819 27.5442C19.6434 28.8734 19.6434 30.3503 20.4557 30.7933C21.3419 31.2364 22.7449 30.498 23.4096 29.1687C24.0742 27.8395 24.0003 26.4365 23.188 25.9196Z" fill="#FFCA61" />
      <path d="M22.1536 26.363C22.0059 26.2891 21.7843 26.4368 21.6366 26.6583C21.489 26.8799 21.489 27.1752 21.6366 27.2491C21.7843 27.3229 22.0797 27.1752 22.2274 26.9537C22.3013 26.7322 22.3013 26.4368 22.1536 26.363Z" fill="#545D94" />
      <path d="M22.1536 29.6117C22.0059 29.5379 21.7843 29.6856 21.6366 29.9071C21.489 30.1287 21.489 30.4241 21.6366 30.4979C21.7843 30.5718 22.0797 30.4241 22.2274 30.2025C22.3013 29.981 22.3013 29.6856 22.1536 29.6117Z" fill="#545D94" />
      <path d="M23.6309 27.2485C23.4832 27.1746 23.2616 27.3223 23.1139 27.5439C22.9663 27.7654 22.9663 28.0608 23.1139 28.1347C23.2616 28.2085 23.557 28.0608 23.7047 27.8393C23.8524 27.6177 23.7786 27.3223 23.6309 27.2485Z" fill="#545D94" />
      <path d="M20.7506 28.9474C20.6029 28.8736 20.3814 29.0213 20.2337 29.2428C20.086 29.4644 20.086 29.7598 20.2337 29.8336C20.3814 29.9075 20.6768 29.7598 20.8245 29.5382C20.9722 29.3167 20.8983 29.0213 20.7506 28.9474Z" fill="#545D94" />
      <path d="M17.1326 43.1257L18.7572 44.898C17.7972 45.4888 16.5418 45.4888 15.5818 44.898L14.4741 44.3073L17.1326 43.1257Z" fill="#545D94" />
      <path d="M25.6247 30.9409L17.7971 35.4455C17.354 35.667 17.1324 36.1101 17.1324 36.627V44.0855C17.1324 44.8978 17.9448 45.3408 18.6094 44.9716L26.1417 40.6147C26.5847 40.3932 26.8063 39.9501 26.8063 39.4332V31.6055C26.8063 31.0147 26.1417 30.6455 25.6247 30.9409Z" fill="#8C95CB" />
      <path d="M20.8987 35.1497L19.0526 36.1835C18.831 36.3312 18.6833 36.5527 18.6833 36.7743V42.6819C18.6833 43.0512 19.0526 43.2727 19.348 43.0512L21.1941 42.0173C21.4157 41.8696 21.5633 41.6481 21.5633 41.4266V35.5189C21.6372 35.1497 21.1941 34.9281 20.8987 35.1497Z" fill="#545D94" />
      <path d="M24.8124 32.9346L22.9663 33.9684C22.7447 34.1161 22.597 34.3377 22.597 34.5592V40.4669C22.597 40.8361 22.9663 41.0577 23.2617 40.8361L25.1078 39.8023C25.3293 39.6546 25.477 39.433 25.477 39.2115V33.3038C25.5509 32.9346 25.1817 32.713 24.8124 32.9346Z" fill="#545D94" />
    </g>
  </svg>
)

export const IconCoverageCP = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2603_841" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
      <rect width="48" height="48" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0_2603_841)">
      <path d="M40.5414 38.3999L16.8368 44.7507C13.6614 45.6368 10.4122 43.7168 9.52606 40.5414L3.24914 16.9107C2.36298 13.7353 4.28298 10.4861 7.45837 9.5999L31.163 3.24914C34.3384 2.36298 37.5876 4.28298 38.4737 7.45837L44.8245 31.163C45.6368 34.3384 43.7168 37.5876 40.5414 38.3999Z" fill="#D7DBF5" />
      <path d="M27.9878 19.4957C27.9878 19.4957 26.5109 18.0926 26.5847 17.2803C26.6586 16.468 26.8801 16.0249 27.3232 16.0988C27.7662 16.1726 28.2832 16.8373 28.357 17.1326C28.357 17.428 28.0616 18.0926 28.357 18.4619C28.5786 18.8311 28.8739 19.4957 27.9878 19.4957Z" fill="#FF1C44" />
      <path d="M19.7908 26.8804C19.7169 27.1019 19.2738 26.8804 18.9046 28.3573C18.3138 28.9481 18.1661 29.7604 18.1661 30.2034V33.305C18.1661 33.9696 18.3877 34.5604 18.8308 35.0773C19.0523 35.2988 19.9384 34.7819 20.2338 34.9296C22.6708 36.3327 25.3292 37.6619 25.3292 37.6619C26.7323 38.4742 27.4708 39.7296 29.0954 39.7296H30.4246L31.68 30.0558L19.7908 26.8804Z" fill="#545D94" />
      <path d="M18.757 29.9078L19.2001 29.6862C19.2001 28.5047 19.5693 27.5447 19.5693 27.5447L21.1201 26.1416L19.6432 26.8801C19.5693 27.1016 19.3478 26.8801 18.9786 28.357C18.3878 28.9478 18.2401 29.7601 18.2401 30.2031V31.237C18.2401 32.197 18.2401 32.7878 18.2401 33.3047C18.2401 33.3047 18.5355 33.3785 18.5355 33.157C18.5355 31.9016 18.757 29.9078 18.757 29.9078Z" fill="#8C95CB" />
      <path d="M32.9352 13.2464C31.9752 13.7633 31.1629 14.5018 30.4245 15.3141L25.9199 20.4833C25.6245 20.8525 25.3291 21.1479 24.9599 21.3695L20.6029 24.7664C20.3075 24.9879 20.6768 25.6525 20.5291 25.9479C20.3075 26.391 19.5691 26.6864 19.5691 27.2033L19.4952 27.6464C19.4952 27.9418 20.6768 28.8279 21.046 28.0895C21.3414 27.5725 22.6706 30.7479 23.1875 30.9695L26.4368 30.6741C27.2491 31.1171 25.9199 32.9633 26.8799 32.8156L30.5722 32.5202C31.2368 32.4464 31.9014 32.2248 32.4922 31.8556L36.9968 29.271L39.5814 30.0833L43.2737 25.431L39.0645 9.62791L32.9352 13.2464Z" fill="#C8C8FA" />
      <path d="M41.6491 19.5903L41.5014 19.6642L39.5075 25.3503C38.8429 27.2703 37.5137 28.8211 35.8152 29.8549L32.7137 31.6273C31.9014 32.0703 31.0891 32.3657 30.2029 32.4396C30.2029 32.4396 28.6522 33.1042 27.3229 34.2857L26.5106 37.1657C26.5106 38.5688 27.6922 39.7503 29.0952 39.7503H30.4245C31.8275 39.7503 33.1568 39.3811 34.4122 38.7165L44.9722 32.5873C44.9722 32.1442 44.8983 31.6273 44.7506 31.1842L41.6491 19.5903Z" fill="#8C95CB" />
      <path d="M26.5106 20.2343L30.7936 15.2127C31.0152 14.9173 31.4583 14.9173 31.7536 15.1389C32.4921 15.7296 33.8213 16.9112 35.2983 17.7235C36.7752 18.6096 38.9167 19.4958 39.9506 19.865C40.3198 20.0127 40.4675 20.382 40.3198 20.7512L37.9567 26.7327C37.7352 27.2496 37.1444 27.4712 36.6275 27.3235C34.929 26.6589 31.5321 25.2558 29.6121 24.1481C28.1352 23.262 27.1013 22.3019 26.5106 21.6373C26.1413 21.1943 26.1413 20.6773 26.5106 20.2343Z" fill="#FAFBFF" />
      <path d="M28.2832 36.1109C28.1355 36.4063 29.0217 36.997 29.0217 37.4401L27.0278 37.3663L28.1355 39.5816L25.3293 38.2524L26.5109 35.077L30.794 33.6001C30.794 33.6739 28.4309 35.8155 28.2832 36.1109Z" fill="#545D94" />
      <path d="M31.6063 33.2313C30.4986 33.6744 28.4309 34.339 26.5109 33.9698L25.1078 32.419L21.2678 32.1236L19.2001 29.6867C19.2001 29.6867 19.0524 28.579 19.2001 27.3975C19.2001 27.3975 18.314 30.2036 19.1263 30.7944C19.1263 31.3852 19.2001 31.9759 19.4955 32.1975C19.6432 32.2713 19.9386 32.419 20.3817 32.6405L21.0463 33.6005L24.3694 34.7082C24.4432 34.7082 24.4432 34.7821 24.517 34.7821C25.4032 35.2252 26.1417 35.5944 26.3632 35.7421C26.6586 35.8898 26.7324 35.6682 26.7324 35.299C27.2494 35.299 28.1355 35.299 29.4647 35.0036C29.7601 34.9298 30.4986 34.4128 31.6801 33.379C31.9017 33.3052 31.754 33.1575 31.6063 33.2313Z" fill="#141938" />
      <path d="M40.0248 35.4669L39.9509 32.7346L39.3601 31.9961H37.1448L35.5201 33.1038C34.1171 34.0638 33.1571 35.6146 33.1571 37.4607L32.714 38.8638L32.8617 39.3807C32.8617 39.3807 33.3786 39.233 33.8955 38.9376L33.9694 39.0115L35.5201 39.8072L35.7417 39.0115C36.7017 38.4207 37.514 37.6084 37.9571 36.5746C39.0648 35.9838 40.0248 35.4669 40.0248 35.4669Z" fill="#141938" />
      <path d="M32.8616 39.3605C32.8616 39.3605 34.117 33.3051 37.5877 32.2713C41.0585 31.2374 39.5077 35.7421 39.5077 35.7421L40.5416 35.1513C40.5416 35.1513 41.2062 30.3513 37.5877 31.5328C32.9354 33.0098 31.5323 39.6559 31.5323 39.6559C31.9754 39.8036 32.4923 39.5821 32.8616 39.3605Z" fill="#C8C8FA" />
      <path d="M19.0522 33.0835L26.5107 37.3666C27.0276 38.5481 27.4707 39.2866 27.4707 39.2866C26.8799 39.4343 26.2153 38.622 25.6983 38.4743C25.1814 38.3266 19.4953 36.0373 19.4953 36.0373C18.9783 35.6681 18.5353 34.9297 18.3876 34.6343C18.4614 34.1173 19.0522 33.0835 19.0522 33.0835Z" fill="#141938" />
      <path d="M26.2892 21.3418C25.8461 21.9326 25.4769 22.5233 25.0338 23.1141C24.6646 23.7049 24.2215 24.2956 23.8523 24.8864C23.4092 25.4772 22.9661 26.068 22.523 26.5849C22.3753 26.7326 22.3015 26.8064 22.08 27.028C21.9323 27.1756 21.6369 27.2495 21.4153 27.1756C21.1938 27.1018 21.0461 27.028 20.8984 26.9541C20.8984 26.9541 20.8246 26.9541 20.8246 27.028C20.8246 27.1018 20.8246 27.1756 20.7507 27.3233C20.7507 27.2495 20.6769 27.1756 20.6769 27.028C20.6769 26.9541 20.6769 26.9541 20.6769 26.8803C20.6769 26.8064 20.8246 26.7326 20.8984 26.7326C21.12 26.7326 21.2676 26.8064 21.4153 26.8064C21.563 26.8064 21.6369 26.7326 21.7107 26.6587C21.7846 26.5849 21.9323 26.3633 22.0061 26.2156C22.3753 25.6249 22.8184 25.0341 23.1876 24.3695C23.6307 23.7787 24.0738 23.188 24.5169 22.671C25.1076 22.228 25.6246 21.711 26.2892 21.3418Z" fill="#8C95CB" />
      <path d="M35.9631 27.3232C35.0031 28.0617 33.8216 28.6525 32.64 29.0956C32.0493 29.3171 31.4585 29.5386 30.8677 29.6863C30.2769 29.834 29.6123 29.9817 29.1692 30.2032L29.2431 30.1294C28.9477 30.4986 28.7262 30.8679 28.4308 31.1632L28.3569 31.2371H28.2831C27.84 31.1632 27.3969 31.0894 27.0277 30.9417C27.4708 30.8679 27.9139 30.8679 28.3569 30.8679L28.2093 30.9417C28.4308 30.5725 28.6523 30.1294 28.8739 29.7602V29.6863L28.9477 29.6125C29.5385 29.2432 30.1292 29.0955 30.72 28.874C31.3108 28.6525 31.9016 28.5048 32.4923 28.3571L35.9631 27.3232Z" fill="#8C95CB" />
      <path d="M40.9109 25.6986C40.7632 26.1417 41.2801 26.4371 41.6493 26.2155L43.2739 25.1817L42.1663 21.4155C42.0924 21.5632 42.0186 21.7109 42.0186 21.8586L40.9109 25.6986Z" fill="#FF858D" />
      <path d="M28.8739 35.9628C28.8739 35.9628 29.2431 36.849 29.9816 36.9228C30.7201 36.9967 30.8677 35.3721 30.8677 35.3721L28.8739 35.9628Z" fill="#545D94" />
      <path d="M19.3478 32.8615C18.4617 32.1969 17.6493 32.7877 17.4278 33.0831L16.6155 31.3846L16.6893 29.6861C16.5417 29.5385 17.0586 28.3569 16.9109 28.2092C16.4678 27.7661 16.3201 26.6585 16.3201 26.6585C15.3601 25.92 14.3263 25.2554 13.1447 24.4431C13.1447 24.4431 10.9293 19.8646 9.7478 18.6092C8.56627 17.3538 4.80011 15.0646 3.10165 14.0308C2.95396 14.9908 2.95396 15.9508 3.24934 16.9108L8.7878 37.5138L20.234 34.8554L19.3478 32.8615Z" fill="#FFCA61" />
      <path d="M20.1601 36.7018V34.8556L18.8309 34.191L19.3478 32.8618C18.9786 32.7879 18.9047 32.7879 18.9047 32.4187C18.3878 31.7541 17.4278 31.6802 17.354 31.3849C17.1324 30.6464 17.1324 28.5049 16.9109 28.2095L15.6555 29.8341L16.6894 31.3849C16.6894 31.3849 16.6155 31.8279 12.8493 33.9695C11.7417 34.6341 9.8955 35.5202 8.41858 36.1849L9.60012 40.5418C9.8955 41.7233 10.5601 42.6833 11.3724 43.4218L18.757 39.1387C19.6432 38.6218 20.1601 37.7356 20.1601 36.7018Z" fill="#FAAF37" />
      <path d="M11.0033 39.0646L15.1386 36.7015C15.3602 36.5538 15.7294 36.7015 15.7294 36.9969V39.4338C15.7294 39.6553 15.5817 39.8769 15.3602 40.0246L11.2248 42.3877C11.0033 42.5353 10.634 42.3876 10.634 42.0923V39.6553C10.634 39.36 10.7817 39.1384 11.0033 39.0646Z" fill="#545D94" />
      <path d="M18.0925 36.5539C18.7571 35.5201 20.1602 34.8555 20.1602 34.8555V36.1847C20.1602 36.7755 19.8648 37.2924 19.3479 37.5878L17.8709 38.4001C17.5755 38.5478 17.2802 38.3262 17.354 37.957C17.5755 37.5878 17.7971 36.997 18.0925 36.5539Z" fill="#545D94" />
      <path d="M18.0925 36.5539C18.2402 36.2585 18.4617 36.037 18.7571 35.8154L18.3879 36.7754L18.7571 37.2924L19.4955 35.8893L19.5694 36.4062L20.1602 36.1847C20.1602 36.7754 19.8648 37.2924 19.3479 37.5877L17.8709 38.4C17.5755 38.5477 17.2802 38.3262 17.354 37.957C17.5755 37.5877 17.7971 36.997 18.0925 36.5539Z" fill="#FF858D" />
      <path d="M10.3385 20.5292C9.96927 19.9385 9.2308 19.7908 8.64004 20.0862L4.65234 22.3754L6.27696 28.3569L12.5539 24.8123C11.9631 23.4092 11.077 21.7108 10.3385 20.5292Z" fill="#FF858D" />
      <path d="M17.723 33.3047C17.8707 33.157 18.7568 33.2309 18.9045 32.3447L8.86145 38.0309L9.30453 39.5816L18.1661 34.4863L17.723 33.3047Z" fill="#FFCA61" />
      <path d="M18.3877 32.5661L18.9047 32.4185L19.3477 32.8615L18.9785 33.4523L16.0247 34.56L17.28 33.0092L18.3877 32.5661Z" fill="#545D94" />
      <path d="M18.4617 33.6L16.837 33.8954L17.5755 33.3785L17.2801 33.0093L8.41858 36.2585L8.64012 37.2185L15.877 34.56L18.4617 33.6Z" fill="#FF1C44" />
      <path d="M9.52637 35.8893L9.82175 36.8493L15.8771 34.5601L16.4679 33.3047L9.52637 35.8893Z" fill="#545D94" />
      <path d="M38.0309 33.3784C37.7356 33.3784 37.4402 33.4523 37.1448 33.6C35.594 34.4861 34.4863 36.2584 34.4863 38.1784C34.4863 39.1384 35.2986 39.9507 36.2586 39.9507C36.554 39.9507 36.9233 39.8769 37.1448 39.7292C38.6956 38.843 39.8033 37.0707 39.8033 35.1507C39.8033 34.1907 38.9909 33.3784 38.0309 33.3784Z" fill="#545D94" />
      <path d="M44.0863 25.5507C43.6432 25.3291 42.4616 24.8122 42.0186 24.8861C41.7232 24.8861 41.4278 25.2553 41.2801 25.6984C41.0586 25.7722 40.6893 25.9199 40.6893 26.0676C40.6893 26.2891 41.1324 26.4368 41.3539 26.4368C41.4278 26.5845 41.5755 26.6584 41.7232 26.7322C41.9447 26.8061 43.717 27.1014 44.1601 26.6584C44.677 26.1414 44.5293 25.7722 44.0863 25.5507Z" fill="#FF1C44" />
      <path d="M11.6679 39.6558H16.3941C16.6894 39.6558 16.8371 39.9511 16.6894 40.2465L15.5079 42.3142C15.3602 42.5358 15.1387 42.6835 14.9171 42.6835H10.191C9.89559 42.6835 9.74789 42.3881 9.89559 42.0927L11.0771 40.025C11.2248 39.8035 11.4464 39.6558 11.6679 39.6558Z" fill="#FAFBFF" />
    </g>
  </svg>
)

export const IconCoverageAV = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.5605 38.4177L16.873 44.7562C13.6888 45.6192 10.4154 43.7444 9.55246 40.5603L3.21396 16.8727C2.35097 13.6886 4.2555 10.4152 7.43962 9.55221L31.1272 3.21371C34.3113 2.35073 37.5847 4.25525 38.4477 7.43938L44.7862 31.1269C45.6194 34.311 43.7446 37.5845 40.5605 38.4177Z" fill="#D7DBF5" />
    <path d="M41.3043 15.325L39.8759 16.6641C39.8759 16.6641 31.9007 11.6945 31.6328 11.516C31.365 11.3672 29.1332 15.1762 28.7165 15.4143L4.16602 29.5792L23.4196 33.1799L41.6911 23.3597C42.3756 22.9431 41.3043 15.325 41.3043 15.325Z" fill="#141938" />
    <path d="M26.2763 15.8906L25.0563 15.474C24.7884 15.3847 24.5206 15.2061 24.3421 14.9978L23.8957 14.4622C23.6576 14.1646 23.1815 14.1944 22.9732 14.5514L22.5566 15.2656C22.4673 15.4144 22.4078 15.593 22.4078 15.8013V17.5273L21.1282 19.164L17.0513 21.5149C16.9025 21.6041 16.8132 21.7529 16.8132 21.9315V22.4969C16.8132 22.6754 16.9025 22.8242 17.0513 22.9135L20.8306 25.0859C21.0091 25.2049 21.2472 25.2049 21.4258 25.0859L25.7407 22.6457C25.8597 22.5862 25.9192 22.4671 25.9192 22.3183V21.9315L27.2881 17.9439C27.5559 17.1107 27.1096 16.1882 26.2763 15.8906Z" fill="#545D94" />
    <path d="M32.3173 20.3247L31.0972 19.908C30.8294 19.8188 30.5615 19.6402 30.383 19.4319L29.9366 18.8963C29.6985 18.5987 29.2224 18.6284 29.0141 18.9855L28.7463 19.4617C28.5677 19.789 28.4487 20.1461 28.4487 20.5032V22.497C28.4487 22.7053 28.3297 22.9136 28.1511 23.0326L27.1989 23.5981L23.122 25.949C22.9732 26.0382 22.8839 26.187 22.8839 26.3656V26.931C22.8839 27.1095 22.9732 27.2583 23.122 27.3476L26.9013 29.5199C27.0798 29.639 27.3179 29.639 27.4964 29.5199L31.8114 27.0798C31.9304 27.0202 31.9899 26.9012 31.9899 26.7524V26.3656L33.3588 22.378C33.6266 21.515 33.1803 20.6222 32.3173 20.3247Z" fill="#545D94" />
    <path d="M14.9979 16.7236L14.1945 20.4732L17.2 18.5984L17.3191 20.2053L19.8188 20.8898L18.0333 22.1694L19.0451 25.175L10.8318 20.8898L12.2304 18.7472L14.9979 16.7236Z" fill="#FFCA61" />
    <path d="M22.9435 18.0928L21.1877 20.0568L23.6874 19.9378L23.5982 20.89L25.2051 21.1876L25.6217 19.2533L22.9435 18.0928Z" fill="#FFCA61" />
    <path d="M5.38624 26.1572C5.29697 26.3655 4.88035 26.1275 4.52325 27.5856C3.95785 28.1213 3.7793 28.9247 3.7793 29.3414V32.2874C3.7793 32.9123 3.9876 33.4777 4.40422 33.9539C4.58277 34.1622 5.47552 33.6861 5.74334 33.8348C8.06448 35.174 10.5642 36.3941 10.5642 36.3941C11.9033 37.1678 12.6175 38.3581 14.1649 38.3581L14.5815 37.5546L16.5753 29.1628L5.38624 26.1572Z" fill="#FF858D" />
    <path d="M39.876 12.3195L30.77 7.11184C29.8772 6.60595 28.7464 6.60595 27.8537 7.11184L19.6702 12.7957C19.2238 13.0932 18.7179 13.3015 18.1823 13.3908L16.5456 13.6289L15.9802 14.0455C15.7123 14.2538 15.4743 14.5216 15.3255 14.849L14.6708 16.2774L11.7545 18.7473L10.832 20.2352L6.13019 23.8657C5.86236 24.074 6.21946 24.7287 6.07067 24.9965C5.83261 25.3834 5.17792 25.7107 5.17792 26.1869L5.11841 26.6332C5.11841 26.9308 6.21946 27.7938 6.57656 27.0796C6.81463 26.6035 9.90948 27.7045 10.3559 27.9723L11.695 29.5495C12.4687 29.9959 11.1891 31.7219 12.0818 31.6028L15.5933 31.335C16.248 31.2755 17.4086 31.6921 17.974 31.3648C20.2356 30.1447 23.0329 27.3177 23.2114 27.3772L26.0682 19.64C30.5617 15.831 35.3825 15.1168 39.876 12.3195ZM24.8779 20.265L22.6162 25.919C22.4674 26.2761 22.1401 26.5142 21.7533 26.5142L11.5462 20.6518C11.4867 20.384 11.5462 20.0864 11.7545 19.8484L12.2306 18.9854L14.9981 16.7237L15.8314 15.0275C16.0694 14.7597 16.4563 14.7299 16.7241 14.968C17.111 15.3251 17.1407 16.2476 17.8549 16.7833C18.3608 17.1404 19.5214 17.1106 20.0868 17.4082C21.5152 18.2117 23.5387 19.0746 24.5505 19.4615C24.8481 19.5805 24.9969 19.9376 24.8779 20.265Z" fill="#C8C8FA" />
    <path d="M42.078 13.9263C41.6912 13.3906 41.1555 13.0038 40.5901 12.6764L39.8759 12.3193L38.4773 13.1823C42.2268 17.4377 36.2157 25.8296 35.5312 26.2164L33.4482 27.3175C33.8053 26.9306 34.0136 26.4545 34.0136 25.9188L34.1326 20.6219C34.1326 20.2053 34.1028 19.7886 34.0136 19.372L33.1506 15.5035C33.0315 14.9976 32.4661 14.7298 31.99 14.9976L27.7643 17.4377C26.8716 17.9436 26.1872 18.7769 25.8598 19.7291L24.4909 23.6572C24.3719 23.9846 24.2529 24.3119 24.0743 24.6095C23.9553 24.8475 23.866 25.1154 23.8065 25.3832C23.1221 26.8116 22.021 27.9722 20.6521 28.7756L17.6763 30.4718C16.9324 30.8885 16.0991 31.186 15.2659 31.2753C15.2659 31.2753 13.778 31.8705 12.5281 33.0608L11.7842 35.8283C11.7842 37.1972 12.8852 38.2983 14.2541 38.2983L16.9324 36.8401C17.349 36.2747 17.7953 33.656 20.5629 33.1501L24.6397 34.1619L34.579 28.4185L40.5306 24.2524C41.5424 23.6572 42.9113 23.0025 43.1196 21.842C43.1791 21.6039 43.2089 21.3361 43.2089 21.098V17.2294C43.2089 16.0986 42.822 14.9083 42.078 13.9263ZM25.7408 24.1631L26.8121 20.5028C27.1394 19.4315 27.8536 18.509 28.8356 17.9436L32.4661 15.8308L33.2399 19.2232C33.3589 19.7886 33.1208 20.3541 32.6447 20.6814L26.4252 24.669C26.0681 24.8773 25.6217 24.55 25.7408 24.1631Z" fill="#8C95CB" />
    <path d="M42.5243 21.0091C42.5243 21.0091 41.4828 20.4139 41.4233 20.4734C41.3637 20.5329 39.727 20.8305 39.727 20.8305L37.4654 22.7946L35.5311 27.9725L36.7512 27.2881L38.1796 28.0915L42.3755 23.6575L42.4648 23.2409L42.6433 22.0506L42.5243 21.0091Z" fill="#141938" />
    <path d="M40.7091 22.0205C40.4115 22.0205 40.1139 22.1098 39.8759 22.2586C38.3582 23.1216 37.3464 24.7583 37.3464 26.633C37.3464 27.5555 38.0904 28.3292 39.0427 28.3292C39.3402 28.3292 39.6378 28.24 39.9056 28.0912C41.3936 27.2282 42.4351 25.5915 42.4351 23.7167C42.4053 22.7942 41.6316 22.0205 40.7091 22.0205Z" fill="#545D94" />
    <path d="M40.3818 20.2651C39.1319 20.6519 38.1499 21.3959 37.3762 22.2589C37.1084 22.5564 36.1263 23.9848 35.9478 24.3717C35.5312 25.1752 35.2634 25.9191 35.0848 26.5738C34.7575 27.6451 34.6384 28.4783 34.6384 28.4783L35.9478 27.7344C35.9478 27.7344 37.0786 21.991 40.3818 20.9793C41.0067 20.8007 41.215 20.8305 41.5423 20.9197C41.8697 21.0388 42.316 21.2471 42.4351 21.5744C42.6731 22.1993 42.5541 23.0326 42.4053 23.6277C42.7922 23.1219 43.0302 22.5564 43.1493 21.9613C43.06 21.5149 42.9112 21.0685 42.6434 20.7114C42.4648 20.4734 41.0067 20.0568 40.3818 20.2651Z" fill="#C8C8FA" />
    <path d="M4.40422 29.0436L4.79108 28.8651C4.79108 27.764 5.11842 26.782 5.11842 26.782L6.57657 25.4727L5.17793 26.1571C5.08866 26.3654 4.91011 26.1273 4.52325 27.5855C3.95785 28.1211 3.7793 28.9246 3.7793 29.3412V30.3232C3.7793 31.216 3.7793 31.7814 3.7793 32.2575C3.7793 32.2575 4.07688 32.317 4.07688 32.1385C4.19591 30.9482 4.40422 29.0436 4.40422 29.0436Z" fill="#8C95CB" />
    <path d="M13.4507 34.9656C13.3019 35.2335 14.1351 35.8286 14.1351 36.275L12.2306 36.1857L13.3019 38.2688L10.6237 37.019L11.7247 33.9836L15.8016 32.6147C15.8313 32.6147 13.5995 34.6978 13.4507 34.9656Z" fill="#FF858D" />
    <path d="M16.6347 32.1684C15.5634 32.585 13.6291 33.1801 11.7543 32.8528L10.3855 31.3946L6.75496 31.0971L4.79092 28.8652C4.79092 28.8652 4.67189 27.8237 4.79092 26.6631C4.79092 26.6631 3.95769 29.3413 4.76116 29.9365C4.76116 30.4721 4.85044 31.0673 5.11826 31.2459C5.2373 31.3351 5.53488 31.4839 5.95149 31.6922L6.57642 32.6445L9.73079 33.6265C9.7903 33.6563 9.82006 33.686 9.87958 33.7158C10.7128 34.1324 11.3972 34.4895 11.6353 34.6383C11.9329 34.8168 12.0222 34.5788 12.0222 34.2217C12.4983 34.2217 13.3613 34.1919 14.6409 33.9538C14.9087 33.8943 15.6229 33.3884 16.7835 32.4362C16.8728 32.3171 16.7537 32.1386 16.6347 32.1684Z" fill="#141938" />
    <path d="M4.67204 32.0791L11.7545 36.156C12.2306 37.2868 12.677 37.9415 12.677 37.9415C12.1116 38.12 11.4569 37.2868 10.9808 37.138C10.5047 36.9892 5.08866 34.8169 5.08866 34.8169C4.58277 34.4598 4.13639 33.7456 4.04712 33.448C4.07688 33.0611 4.67204 32.0791 4.67204 32.0791Z" fill="#FF1C44" />
    <path d="M11.5758 20.8901C11.1295 21.4258 10.8021 22.021 10.4153 22.5864C10.0582 23.1518 9.6713 23.7469 9.28444 24.3123C8.86783 24.8777 8.45121 25.4431 7.97508 25.949C7.91556 26.0085 7.85605 26.0681 7.79653 26.1276C7.73702 26.1871 7.6775 26.2466 7.58822 26.3359C7.43943 26.4847 7.17161 26.574 6.9633 26.5144C6.75499 26.4847 6.6062 26.3359 6.48717 26.3061C6.45741 26.3061 6.45741 26.2764 6.45741 26.3061C6.42765 26.3359 6.42765 26.3656 6.42765 26.3954C6.3979 26.4847 6.3979 26.574 6.3979 26.6632C6.36814 26.574 6.33838 26.4847 6.33838 26.3954C6.33838 26.3359 6.33838 26.3061 6.36814 26.2466C6.3979 26.1871 6.48717 26.1276 6.54669 26.1276C6.75499 26.1573 6.90379 26.2169 7.05258 26.2169C7.17161 26.2169 7.26088 26.1573 7.35016 26.0383C7.37992 25.9788 7.43943 25.9193 7.46919 25.83C7.49895 25.7705 7.55847 25.6812 7.61798 25.6217C7.97508 25.0563 8.36194 24.4611 8.74879 23.8957C9.13565 23.3303 9.55227 22.7649 10.0284 22.259C10.2665 21.9912 10.5045 21.7531 10.7724 21.5151C10.9509 21.277 11.2187 21.0389 11.5758 20.8901Z" fill="#8C95CB" />
    <path d="M20.7414 26.6035C20.2653 26.9606 19.7594 27.288 19.2237 27.5558C18.6881 27.8236 18.1524 28.0617 17.587 28.27C17.0216 28.4783 16.4562 28.6568 15.8908 28.8354L15.0576 29.0734C14.7898 29.1627 14.4922 29.252 14.2839 29.3413L14.3732 29.252C14.1351 29.6091 13.8673 29.9364 13.5994 30.2638L13.5102 30.3531L13.4209 30.3233C13.0043 30.234 12.6174 30.1447 12.2008 30.0257C12.6174 29.9662 13.034 29.9662 13.4507 29.9662L13.2721 30.0555C13.4507 29.6686 13.659 29.3115 13.8673 28.9247L13.897 28.8651L13.9565 28.8354C14.2541 28.6568 14.5219 28.5676 14.8195 28.4485C15.0874 28.3295 15.3849 28.2402 15.6528 28.1509C16.2182 27.9724 16.7836 27.7938 17.3192 27.6451L18.9857 27.1392L20.7414 26.6035Z" fill="#8C95CB" />
    <path d="M24.1338 34.549L24.848 32.8825L23.985 30.9185H21.9019L20.3843 31.9898L18.6285 33.8348L17.6763 35.4417C17.6763 35.4417 18.3309 34.9953 19.0749 34.5787C21.3663 33.3289 24.1338 34.549 24.1338 34.549Z" fill="#141938" />
    <path d="M22.2591 33.6263C21.9317 33.4477 21.4853 33.5965 21.1282 33.9536L19.2535 32.8525L18.5095 34.1917L20.4438 35.3225C20.3843 35.7688 20.4736 36.1259 20.7711 36.3045L21.1282 36.5128L22.6162 33.8346C22.6162 33.8346 22.2888 33.656 22.2591 33.6263Z" fill="#545D94" />
    <path d="M22.616 33.8346C22.1399 33.5966 21.4555 33.9834 21.0686 34.7274C20.6818 35.4713 20.652 36.2748 21.1281 36.5129C21.6043 36.7509 22.378 36.3641 22.7648 35.6201C23.1517 34.8762 23.0922 34.0727 22.616 33.8346Z" fill="#8C95CB" />
    <path d="M17.4976 35.7098C17.4976 35.7098 18.1226 35.2336 18.5392 34.1921C18.7177 33.7457 19.0451 34.1921 19.3427 33.716C19.9973 32.6447 20.9496 31.6329 22.259 31.246C25.5919 30.2343 24.104 34.5492 24.104 34.5492L25.086 33.9838C25.086 33.9838 25.7109 29.4308 22.2887 30.5021C20.4437 31.0972 19.3427 31.6329 18.5094 32.853C18.3606 33.0613 18.1821 33.8945 18.1821 33.8945L16.5156 34.9361C16.5156 34.9361 16.7239 35.9776 16.6644 36.2157C16.5454 36.6025 16.9025 36.9001 16.9025 36.9001C17.4381 36.5132 17.3489 36.2157 17.4976 35.7098Z" fill="#C8C8FA" />
  </svg>
)
