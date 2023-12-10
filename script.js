    // JavaScript code

        // Get elements
        const sideMenu = document.querySelector('.side-menu');
        const container = document.querySelector('.container');

        // Toggle side menu
        function toggleSideMenu() {
            sideMenu.classList.toggle('show-menu');
            container.classList.toggle('shift-container');
        }

        // Event listener for menu button
        document.addEventListener('DOMContentLoaded', function () {
            const menuButton = document.querySelector('.menu-btn');
            menuButton.addEventListener('click', toggleSideMenu);
        });

