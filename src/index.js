import _ from 'lodash';
import cats from './cats.js';

function component() {
    var element = document.createElement('div');

// Lodash, now imported by this script
    element.innerHTML = _.join(['Hi', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());
  console.log(cats);