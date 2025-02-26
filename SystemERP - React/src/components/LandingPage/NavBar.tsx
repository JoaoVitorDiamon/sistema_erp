import { motion } from "framer-motion";
const hoverAnimation = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
}

const pathAnimation = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1 }
}

const logoAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 }
}

export default function NavBar() {
  return (
    <motion.div variants={{
      hidden: { opacity: 0, y:75},
      visible: {opacity: 1, y:0}
    }}
    initial="hidden"
    animate="visible"
    transition={{duration:0.5, delay:0.25}}> {/*container do nav bar*/}
      <div className="flex justify-center gap-56 items-center"> {/*logo*/}

        <div className="py-2"> { /*logo*/}
          <motion.svg  width="198" height="61" viewBox="0 0 198 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path variants={pathAnimation} d=".216 28.6037 152 28.0746 152 27.447C152 26.8194 152.216 26.2993 152.647 25.8871C153.096 25.4565 153.663 25.2415 154.346 25.2415C155.011 25.2415 155.559 25.4565 155.991 25.8871C156.422 26.2993 156.638 26.8194 156.638 27.447C156.638 28.0746 156.422 28.6037 155.991 29.0343C155.559 29.4465 155.011 29.653 154.346 29.653Z" fill="#7214FF" />
            <motion.path variants={pathAnimation} d="M32.9777 2.0498C20.9867 2.0498 10.217 8.79356 5.44285 19.2253C5.2208 19.7521 5.44285 20.3844 5.99799 20.5951C6.55313 20.8059 7.2193 20.5951 7.44135 20.0683C9.88397 14.7997 13.992 10.4795 18.9882 7.73984C17.4339 9.21504 16.1015 11.0063 15.1023 12.903C14.6582 13.746 14.7692 14.7997 15.4354 15.4319C16.4346 16.4856 18.3221 15.9588 18.8772 15.4319C19.3213 15.0105 19.2103 14.4836 18.8772 13.9567C18.3221 13.1138 17.1008 13.9567 17.1008 13.9567C17.1008 13.9567 19.0993 8.37207 26.7602 4.78945C28.0925 4.47334 29.3138 4.36797 30.6462 4.2626C29.5359 5.31631 28.3146 6.26465 26.8712 7.10762C26.8712 7.10762 21.7639 10.058 20.9867 10.6902C20.5426 11.1117 20.5426 11.6386 20.8757 12.1654C21.4309 12.903 22.208 12.4815 22.4301 12.2708C23.2073 11.7439 28.0925 8.89893 28.0925 8.89893C30.9792 7.73984 33.977 4.2626 33.977 4.2626C38.9732 4.47334 43.6364 5.84316 47.6334 8.2667L44.8577 10.901C43.1923 12.4815 41.7489 13.5353 40.3056 14.2729C36.6417 16.2749 33.7549 19.2253 31.8675 22.8079C31.4233 23.6509 31.5344 24.7046 32.2005 25.3368C33.3108 26.2852 35.0873 25.8637 35.6424 25.3368L37.5299 23.5455C37.974 23.124 37.974 22.4918 37.5299 22.0703C37.0858 21.6488 36.4196 21.6488 35.9755 22.0703L33.866 23.8616C33.866 23.8616 35.6424 19.0146 41.4158 16.0642C43.0813 15.2212 44.6357 13.9567 46.4121 12.2708L49.5209 9.32041C50.076 9.7419 50.6312 10.1634 51.1863 10.5849L47.7444 13.8514C46.4121 15.0105 45.1908 16.0642 43.7474 16.9071L40.5276 18.6984C39.9725 19.0146 39.7504 19.6468 40.0835 20.1736C40.5276 20.9112 41.4158 20.7005 41.6379 20.5951L44.8577 18.8038C46.5231 17.8555 47.9665 16.6964 49.2988 15.4319L52.8517 12.0601C53.6289 12.7977 54.2951 13.5353 54.9612 14.2729L45.1908 23.5455C42.7482 25.8637 40.8607 28.498 39.6394 31.343C38.3071 34.2934 36.5306 37.1384 34.199 39.7727C33.7549 40.1941 33.866 40.8264 34.3101 41.2479C34.8652 41.7747 35.6424 41.3532 35.8645 41.1425C38.3071 38.4028 40.1945 35.3471 41.6379 32.1859C42.7482 29.5517 44.4136 27.2335 46.7452 25.0207L56.2936 15.9588C57.6259 17.8555 58.6251 19.8575 59.4023 21.9649L54.4061 26.812C52.2966 28.3926 50.4091 32.1859 50.4091 32.1859C48.9657 34.5041 46.8562 36.5062 44.4136 37.876C41.7489 39.4565 39.1953 41.2479 37.0858 43.2499L33.977 46.2003C33.5329 46.6218 32.8667 46.6218 32.4226 46.2003C32.2005 45.9896 31.8675 45.3573 32.4226 44.7251C32.8667 44.3036 32.8667 43.6714 32.4226 43.2499C31.9785 42.8284 31.2013 42.8284 30.8682 43.2499C28.9807 45.3573 30.202 47.0433 30.8682 47.6755C32.6447 49.3614 34.8652 48.3077 35.5314 47.6755L38.6402 44.7251C40.6386 42.8284 42.9702 41.0371 45.5239 39.5619C48.2996 37.9813 50.5201 35.7686 52.1855 33.2397C52.1855 33.2397 53.962 29.7624 55.9605 28.2872L60.0685 24.2831C60.5126 26.2852 60.7347 28.3926 60.7347 30.5C60.7347 43.0392 51.4083 53.5763 39.0843 56.2106C39.6394 55.7891 40.1945 55.473 40.7497 55.1568C41.3048 54.8407 41.4158 54.2085 41.0828 53.6816C40.7497 53.1548 40.0835 53.0494 39.5284 53.3655C37.4188 54.4192 34.8652 56.8428 34.8652 56.8428C34.199 56.8428 32.2005 56.9482 31.8675 56.8428L33.4219 55.3676C34.8652 53.9978 36.0865 53.1548 37.4188 52.4172L40.6387 50.6259C42.4151 49.6775 43.8585 48.5185 45.0798 47.254C45.0798 47.254 47.0783 45.3573 47.1893 45.4627C47.1893 45.4627 45.0798 48.9399 43.7474 50.3098C43.3033 50.7313 43.3033 51.3635 43.7474 51.785C44.1915 52.2065 44.8577 52.2065 45.3018 51.785C46.8562 50.2044 48.1885 48.5185 49.1878 46.5164C49.6319 45.6734 49.4098 44.6197 48.8547 43.9875C47.6334 43.0392 45.968 43.4606 45.4128 43.9875L43.5254 45.7788C42.4151 46.9379 41.0828 47.8862 39.5284 48.7292L36.3086 50.5205C34.7542 51.3635 33.4218 52.4172 31.8675 53.8924L28.9807 56.5267C23.9845 55.8944 19.4324 53.8924 15.6574 51.0474L18.8772 47.9916C20.5426 46.411 21.986 45.3573 23.4293 44.6197C27.0933 42.6177 29.98 39.6673 31.8675 36.0847C32.3116 35.2417 32.3116 34.188 31.4233 33.4504C30.9792 33.0289 29.0918 32.5021 28.0925 33.4504L26.205 35.2417C25.0948 36.4008 23.7624 37.3491 22.208 38.1921L18.9882 39.9834C17.2118 40.9317 15.7684 42.0908 14.5471 43.3553L11.1053 46.6218C10.5501 45.8842 9.99499 45.252 9.55088 44.5144L19.0993 35.4524C21.6529 32.9235 23.4293 30.2893 24.6507 27.5496C26.3161 23.6509 28.8697 20.0683 32.2005 16.9071L33.4219 15.748C34.088 15.1158 34.9762 12.7977 33.4219 11.3225C32.0895 10.058 30.091 10.058 28.7587 11.3225L25.6499 14.2729C23.6514 16.1695 21.3198 17.9608 18.7662 19.436C15.8795 21.122 13.6589 23.2294 12.1045 25.7583C12.1045 25.7583 10.106 29.7624 8.4406 30.7107L5.66491 33.345C5.33183 32.5021 5.2208 31.5537 5.2208 30.5C5.2208 29.8678 4.77669 29.4463 4.11052 29.4463C3.44436 29.4463 3.00024 29.8678 3.00024 30.5C3.00024 46.2003 16.4346 58.9502 32.9777 58.9502C49.5209 58.9502 62.9552 46.2003 62.9552 30.5C62.9552 14.7997 49.5209 2.0498 32.9777 2.0498ZM5.88697 36.0847L9.77294 32.3967C12.1045 30.6054 13.881 27.0228 13.881 27.0228C15.3243 24.7046 17.3228 22.8079 19.8765 21.3327C22.5411 19.7521 25.0948 17.9608 27.2043 15.9588L30.3131 13.0084C30.7572 12.5869 31.3123 12.5869 31.8675 13.0084C32.5336 13.5353 32.0895 14.2729 31.8675 14.4836L30.6462 15.6427C27.0933 19.0146 24.4286 22.8079 22.6522 26.9174C21.5419 29.4463 19.8765 31.8698 17.5449 34.188L8.4406 42.8284C7.2193 40.6156 6.33108 38.4028 5.88697 36.0847ZM12.5486 48.3077L16.1015 44.9358C17.2118 43.7768 18.5441 42.8284 20.0985 41.9855L23.3183 40.1941C25.0948 39.2458 26.5381 38.0867 27.7594 36.8223C27.7594 36.8223 29.7579 35.031 29.869 35.031C29.869 35.031 25.5389 41.1425 22.3191 42.8284C20.6537 43.6714 19.0993 44.9358 17.3228 46.6218L13.992 49.7829C13.5479 49.2561 12.9927 48.8346 12.5486 48.3077Z" fill="white" />
            <motion.path variants={pathAnimation} d="M3.33752 23.8578C3.23052 24.1852 3.12351 24.5781 3.01651 24.9709C2.9095 25.2983 3.33752 25.6911 3.87255 25.7566C3.97955 25.7566 4.9426 25.8221 5.15661 25.2328C5.26362 24.9054 5.37062 24.5781 5.47763 24.2507C5.58463 23.9233 5.26362 23.5305 4.72859 23.465C4.08656 23.2686 3.44453 23.465 3.33752 23.8578Z" fill="white" />
            <motion.path variants={pathAnimation} d="M76.2667 41.5052V49.8452H74.8987V41.5052H76.2667ZM84.9147 49.8452H83.5467L79.4307 43.6172V49.8452H78.0627V41.4932H79.4307L83.5467 47.7092V41.4932H84.9147V49.8452ZM92.0992 41.5052V42.6212H89.8792V49.8452H88.5112V42.6212H86.2792V41.5052H92.0992ZM94.8526 42.6092V45.0572H97.7326V46.1732H94.8526V48.7292H98.0926V49.8452H93.4846V41.4932H98.0926V42.6092H94.8526ZM105.814 43.9052C105.598 43.4892 105.298 43.1772 104.914 42.9692C104.53 42.7532 104.086 42.6452 103.582 42.6452C103.03 42.6452 102.538 42.7692 102.106 43.0172C101.674 43.2652 101.334 43.6172 101.086 44.0732C100.846 44.5292 100.726 45.0572 100.726 45.6572C100.726 46.2572 100.846 46.7892 101.086 47.2532C101.334 47.7092 101.674 48.0612 102.106 48.3092C102.538 48.5572 103.03 48.6812 103.582 48.6812C104.326 48.6812 104.93 48.4732 105.394 48.0572C105.858 47.6412 106.142 47.0772 106.246 46.3652H103.114V45.2732H107.71V46.3412C107.622 46.9892 107.39 47.5852 107.014 48.1292C106.646 48.6732 106.162 49.1092 105.562 49.4372C104.97 49.7572 104.31 49.9172 103.582 49.9172C102.798 49.9172 102.082 49.7372 101.434 49.3772C100.786 49.0092 100.27 48.5012 99.8856 47.8532C99.5096 47.2052 99.3216 46.4732 99.3216 45.6572C99.3216 44.8412 99.5096 44.1092 99.8856 43.4612C100.27 42.8132 100.786 42.3092 101.434 41.9492C102.09 41.5812 102.806 41.3972 103.582 41.3972C104.47 41.3972 105.258 41.6172 105.946 42.0572C106.642 42.4892 107.146 43.1052 107.458 43.9052H105.814ZM113.391 49.8452L111.471 46.5092H110.427V49.8452H109.059V41.5052H111.939C112.579 41.5052 113.119 41.6172 113.559 41.8412C114.007 42.0652 114.339 42.3652 114.555 42.7412C114.779 43.1172 114.891 43.5372 114.891 44.0012C114.891 44.5452 114.731 45.0412 114.411 45.4892C114.099 45.9292 113.615 46.2292 112.959 46.3892L115.023 49.8452H113.391ZM110.427 45.4172H111.939C112.451 45.4172 112.835 45.2892 113.091 45.0332C113.355 44.7772 113.487 44.4332 113.487 44.0012C113.487 43.5692 113.359 43.2332 113.103 42.9932C112.847 42.7452 112.459 42.6212 111.939 42.6212H110.427V45.4172ZM121.669 48.1412H118.177L117.577 49.8452H116.149L119.137 41.4932H120.721L123.709 49.8452H122.269L121.669 48.1412ZM121.285 47.0252L119.929 43.1492L118.561 47.0252H121.285ZM127.732 41.5052C128.62 41.5052 129.396 41.6772 130.06 42.0212C130.732 42.3572 131.248 42.8452 131.608 43.4852C131.976 44.1172 132.16 44.8572 132.16 45.7052C132.16 46.5532 131.976 47.2892 131.608 47.9132C131.248 48.5372 130.732 49.0172 130.06 49.3532C129.396 49.6812 128.62 49.8452 127.732 49.8452H125.008V41.5052H127.732ZM127.732 48.7292C128.708 48.7292 129.456 48.4652 129.976 47.9372C130.496 47.4092 130.756 46.6652 130.756 45.7052C130.756 44.7372 130.496 43.9812 129.976 43.4372C129.456 42.8932 128.708 42.6212 127.732 42.6212H126.376V48.7292H127.732ZM137.32 49.9292C136.544 49.9292 135.828 49.7492 135.172 49.3892C134.524 49.0212 134.008 48.5132 133.624 47.8652C133.248 47.2092 133.06 46.4732 133.06 45.6572C133.06 44.8412 133.248 44.1092 133.624 43.4612C134.008 42.8132 134.524 42.3092 135.172 41.9492C135.828 41.5812 136.544 41.3972 137.32 41.3972C138.104 41.3972 138.82 41.5812 139.468 41.9492C140.124 42.3092 140.64 42.8132 141.016 43.4612C141.392 44.1092 141.58 44.8412 141.58 45.6572C141.58 46.4732 141.392 47.2092 141.016 47.8652C140.64 48.5132 140.124 49.0212 139.468 49.3892C138.82 49.7492 138.104 49.9292 137.32 49.9292ZM137.32 48.7412C137.872 48.7412 138.364 48.6172 138.796 48.3692C139.228 48.1132 139.564 47.7532 139.804 47.2892C140.052 46.8172 140.176 46.2732 140.176 45.6572C140.176 45.0412 140.052 44.5012 139.804 44.0372C139.564 43.5732 139.228 43.2172 138.796 42.9692C138.364 42.7212 137.872 42.5972 137.32 42.5972C136.768 42.5972 136.276 42.7212 135.844 42.9692C135.412 43.2172 135.072 43.5732 134.824 44.0372C134.584 44.5012 134.464 45.0412 134.464 45.6572C134.464 46.2732 134.584 46.8172 134.824 47.2892C135.072 47.7532 135.412 48.1132 135.844 48.3692C136.276 48.6172 136.768 48.7412 137.32 48.7412ZM147.411 42.6092V45.0572H150.291V46.1732H147.411V48.7292H150.651V49.8452H146.043V41.4932H150.651V42.6092H147.411ZM156.668 49.8452L154.748 46.5092H153.704V49.8452H152.336V41.5052H155.216C155.856 41.5052 156.396 41.6172 156.836 41.8412C157.284 42.0652 157.616 42.3652 157.832 42.7412C158.056 43.1172 158.168 43.5372 158.168 44.0012C158.168 44.5452 158.008 45.0412 157.688 45.4892C157.376 45.9292 156.892 46.2292 156.236 46.3892L158.3 49.8452H156.668ZM153.704 45.4172H155.216C155.728 45.4172 156.112 45.2892 156.368 45.0332C156.632 44.7772 156.764 44.4332 156.764 44.0012C156.764 43.5692 156.636 43.2332 156.38 42.9932C156.124 42.7452 155.736 42.6212 155.216 42.6212H153.704V45.4172ZM165.75 43.9892C165.75 44.4132 165.65 44.8132 165.45 45.1892C165.25 45.5652 164.93 45.8732 164.49 46.1132C164.05 46.3452 163.486 46.4612 162.798 46.4612H161.286V49.8452H159.918V41.5052H162.798C163.438 41.5052 163.978 41.6172 164.418 41.8412C164.866 42.0572 165.198 42.3532 165.414 42.7292C165.638 43.1052 165.75 43.5252 165.75 43.9892ZM162.798 45.3452C163.318 45.3452 163.706 45.2292 163.962 44.9972C164.218 44.7572 164.346 44.4212 164.346 43.9892C164.346 43.0772 163.83 42.6212 162.798 42.6212H161.286V45.3452H162.798Z" fill="white" />
            <motion.path variants={pathAnimation} d="M80.207 35.0272C78.8723 35.0272 77.6763 34.8105 76.619 34.3772C75.5616 33.9439 74.7123 33.3025 74.071 32.4532C73.447 31.6039 73.1176 30.5812 73.083 29.3852H77.815C77.8843 30.0612 78.1183 30.5812 78.517 30.9452C78.9156 31.2919 79.4356 31.4652 80.077 31.4652C80.7356 31.4652 81.2556 31.3179 81.637 31.0232C82.0183 30.7112 82.209 30.2865 82.209 29.7492C82.209 29.2985 82.053 28.9259 81.741 28.6312C81.4463 28.3365 81.0736 28.0939 80.623 27.9032C80.1896 27.7125 79.5656 27.4959 78.751 27.2532C77.5723 26.8892 76.6103 26.5252 75.865 26.1612C75.1196 25.7972 74.4783 25.2599 73.941 24.5492C73.4036 23.8385 73.135 22.9112 73.135 21.7672C73.135 20.0685 73.7503 18.7425 74.981 17.7892C76.2116 16.8185 77.815 16.3332 79.791 16.3332C81.8016 16.3332 83.4223 16.8185 84.653 17.7892C85.8836 18.7425 86.5423 20.0772 86.629 21.7932H81.819C81.7843 21.2039 81.5676 20.7445 81.169 20.4152C80.7703 20.0685 80.259 19.8952 79.635 19.8952C79.0976 19.8952 78.6643 20.0425 78.335 20.3372C78.0056 20.6145 77.841 21.0219 77.841 21.5592C77.841 22.1485 78.1183 22.6079 78.673 22.9372C79.2276 23.2665 80.0943 23.6219 81.273 24.0032C82.4516 24.4019 83.405 24.7832 84.133 25.1472C84.8783 25.5112 85.5196 26.0399 86.057 26.7332C86.5943 27.4265 86.863 28.3192 86.863 29.4112C86.863 30.4512 86.5943 31.3959 86.057 32.2452C85.537 33.0945 84.7743 33.7705 83.769 34.2732C82.7636 34.7759 81.5763 35.0272 80.207 35.0272ZM94.0451 16.5932V34.8452H89.5991V16.5932H94.0451ZM103.871 35.0272C102.536 35.0272 101.34 34.8105 100.283 34.3772C99.2257 33.9439 98.3764 33.3025 97.735 32.4532C97.111 31.6039 96.7817 30.5812 96.747 29.3852H101.479C101.548 30.0612 101.782 30.5812 102.181 30.9452C102.58 31.2919 103.1 31.4652 103.741 31.4652C104.4 31.4652 104.92 31.3179 105.301 31.0232C105.682 30.7112 105.873 30.2865 105.873 29.7492C105.873 29.2985 105.717 28.9259 105.405 28.6312C105.11 28.3365 104.738 28.0939 104.287 27.9032C103.854 27.7125 103.23 27.4959 102.415 27.2532C101.236 26.8892 100.274 26.5252 99.529 26.1612C98.7837 25.7972 98.1424 25.2599 97.605 24.5492C97.0677 23.8385 96.799 22.9112 96.799 21.7672C96.799 20.0685 97.4144 18.7425 98.645 17.7892C99.8757 16.8185 101.479 16.3332 103.455 16.3332C105.466 16.3332 107.086 16.8185 108.317 17.7892C109.548 18.7425 110.206 20.0772 110.293 21.7932H105.483C105.448 21.2039 105.232 20.7445 104.833 20.4152C104.434 20.0685 103.923 19.8952 103.299 19.8952C102.762 19.8952 102.328 20.0425 101.999 20.3372C101.67 20.6145 101.505 21.0219 101.505 21.5592C101.505 22.1485 101.782 22.6079 102.337 22.9372C102.892 23.2665 103.758 23.6219 104.937 24.0032C106.116 24.4019 107.069 24.7832 107.797 25.1472C108.542 25.5112 109.184 26.0399 109.721 26.7332C110.258 27.4265 110.527 28.3192 110.527 29.4112C110.527 30.4512 110.258 31.3959 109.721 32.2452C109.201 33.0945 108.438 33.7705 107.433 34.2732C106.428 34.7759 105.24 35.0272 103.871 35.0272ZM126.393 16.5932V20.1552H121.557V34.8452H117.111V20.1552H112.275V16.5932H126.393ZM133.07 20.1552V23.8472H139.024V27.2792H133.07V31.2832H139.804V34.8452H128.624V16.5932H139.804V20.1552H133.07ZM163.361 16.5932V34.8452H158.915V23.8992L154.833 34.8452H151.245L147.137 23.8732V34.8452H142.691V16.5932H147.943L153.065 29.2292L158.135 16.5932H163.361ZM177.92 31.6212H171.108L170.016 34.8452H165.362L171.966 16.5932H177.114L183.718 34.8452H179.012L177.92 31.6212ZM176.776 28.1892L174.514 21.5072L172.278 28.1892H176.776Z" fill="white" />
          </motion.svg >
        </div> {/* fim do logo*/}
        <div className="flex gap-12 flex-row justify-center"> {/*container do menu*/}
          <ul className="flex gap-12 flex-row justify-center">
            <li><a href="" className="text-nav font-medium font-poppins">Inicio</a></li>
            <li><a href="" className="text-nav font-medium font-poppins">Sobre</a></li>
            <li><a href="" className="text-nav font-medium font-poppins">Funcionalidades</a></li>
            <li><a href="" className="text-nav font-medium font-poppins">Precos</a></li>
          </ul>


        </div> {/*fim do container do menu*/}
        <div>
          <button className="bg-button text-white px-4 py-2 rounded-4xl font-poppins  font-medium tracking-wide">Demostração</button>
        </div>
      </div>
    </motion.div>//fim do container do nav bar

  )
}
