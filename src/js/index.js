/* eslint-disable no-debugger */
// jQuery
import 'jquery';

// PopperJS
import 'popper.js';

// Bootstrap 4
import 'bootstrap';

// Material Design Bootstrap
// import '../vendors/mdb/js/mdb';
// import 'mdbootstrap';

// Fontawesome 5
import './fa';

import './components/header/header';
import './components/footer/footer';


cta2.onclick = function (e) {
  alert('click on me', e);
};

document.getElementById('cta3').addEventListener('click', () => { alert('You clicked third CTA'); });
