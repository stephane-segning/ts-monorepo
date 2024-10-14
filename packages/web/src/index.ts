import {sayClass} from '@stephane-gis/class';
import {saySchool} from '@stephane-gis/school';

function sayWeb() {
    console.log('Web');
    console.log('========');
    sayClass();
    console.log('========');
    saySchool();
    console.log('========');
}

sayWeb();