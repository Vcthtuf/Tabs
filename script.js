window.addEventListener('DOMContentLoaded', function () {

    'use strict'

    // Variables

    let blockMenu = document.querySelector('.nav_tabs > ul'),
        tabs = document.querySelectorAll('.tab'),
        tabContent = document.querySelectorAll('section');

    // Tabs

    blockMenu.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('tab')) {

            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    console.log(target);
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    function hideTabContent(a) {                        // function hide of content
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {                        // function show of content
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    // ---------------------------------------------





});