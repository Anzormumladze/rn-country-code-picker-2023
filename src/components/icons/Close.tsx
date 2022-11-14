import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgClose(props: SvgProps) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" width="24" height="24" {...props}>
      <Path
        fill="currentColor"
        d="M18.177 5.823l.707-.707-.707.707zm0 .354l.707.707-.707-.707zm-.354-.354l-.707-.707.707.707zM12 11.646l-.707.708a1 1 0 001.414 0L12 11.646zM6.177 5.823l-.707.707.707-.707zm-.354 0l.707.707-.707-.707zm0 .354l.707-.707-.707.707zM11.646 12l.708.707a1 1 0 000-1.414l-.708.707zm-5.823 5.823l-.707-.707.707.707zm0 .354l-.707.707.707-.707zm.354 0l.707.707-.707-.707zM12 12.354l.707-.708a1 1 0 00-1.414 0l.707.708zm5.823 5.823l-.707.707.707-.707zm.354 0l.707.707-.707-.707zm0-.354l.707-.707-.707.707zM12.354 12l-.708-.707a1 1 0 000 1.414l.708-.707zm5.116-5.47a.75.75 0 010-1.06l1.414 1.414a1.25 1.25 0 000-1.768L17.47 6.53zm1.06 0a.75.75 0 01-1.06 0l1.414-1.414a1.25 1.25 0 00-1.768 0L18.53 6.53zm-5.823 5.824L18.53 6.53l-1.414-1.414-5.823 5.823 1.414 1.415zM5.47 6.53l5.823 5.824 1.414-1.415-5.823-5.823L5.47 6.53zm1.06 0a.75.75 0 01-1.06 0l1.414-1.414a1.25 1.25 0 00-1.768 0L6.53 6.53zm0-1.06a.75.75 0 010 1.06L5.116 5.116a1.25 1.25 0 000 1.768L6.53 5.47zm5.824 5.823L6.53 5.47 5.116 6.884l5.823 5.823 1.415-1.414zM6.53 18.53l5.824-5.823-1.415-1.414-5.823 5.823L6.53 18.53zm0-1.06a.75.75 0 010 1.06l-1.414-1.414a1.25 1.25 0 000 1.768L6.53 17.47zm-1.06 0a.75.75 0 011.06 0l-1.414 1.414a1.25 1.25 0 001.768 0L5.47 17.47zm5.823-5.824L5.47 17.47l1.414 1.414 5.823-5.823-1.414-1.415zm7.237 5.824l-5.823-5.824-1.414 1.415 5.823 5.823 1.414-1.414zm-1.06 0a.75.75 0 011.06 0l-1.414 1.414a1.25 1.25 0 001.768 0L17.47 17.47zm0 1.06a.75.75 0 010-1.06l1.414 1.414a1.25 1.25 0 000-1.768L17.47 18.53zm-5.824-5.823l5.824 5.823 1.414-1.414-5.823-5.823-1.415 1.414zM17.47 5.47l-5.824 5.823 1.415 1.414 5.823-5.823L17.47 5.47z"
      />
    </Svg>
  );
}

export default SvgClose;
