import {sayCore} from '@stephane-gis/core';

const sayClass = () => {
    sayCore();
    console.log('class');
}

export {sayClass};
export default sayClass;