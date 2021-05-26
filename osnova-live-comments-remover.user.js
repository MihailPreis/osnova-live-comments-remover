// ==UserScript==
// @name         DTF VC TJ live comments remover
// @namespace    mailto:mihail.preis@gmail.com
// @version      1.0
// @description  Remove right block with live comments
// @author       M.Price
// @copyright    © M.Price. See the LICENSE file for license rights and limitations (MIT).
// @updateURL    https://raw.github.com/MihailPreis/osnova-live-comments-remover/main/osnova-live-comments-remover.user.js
// @match        https://vc.ru/
// @match        https://dtf.ru/
// @match        https://tjournal.ru/
// @icon         https://www.google.com/s2/favicons?domain=dtf.ru
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    window.onload = () => {
        let r_block = document.getElementsByClassName('layout__right-column layout__sticky')[0]
        if (r_block !== undefined) {
            r_block.parentNode.removeChild(r_block)
        }
    }

})();