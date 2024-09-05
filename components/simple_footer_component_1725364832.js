<!--
INSTRUCTION: Summary: This component contains the app's logo and name in a large, bold font, and on the same line.
INSTRUCTION: There is an additional line of subtext underneath the first line.
INSTRUCTION: Both of these lines are center aligned.
-->

<template>
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-purple-900 to-pink-800 bg-opacity-70 backdrop-filter backdrop-blur-lg min-h-550px">
        <div id="footer-container" class="max-w-screen-xl p-8 py-10 mx-auto lg:py-16 md:p-12 lg:p-14">
            <hr id="footer-divider" class="my-8 border-pink-300 border-opacity-30 sm:mx-auto lg:my-10">
            <div id="footer-content" class="text-center">
                <div class="flex">
                    <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-pink-200 hover:text-white transition duration-300">
                        <img id="footer-logo" src="https://makeinfinite-mentat-dev.azurewebsites.net/get_image/Car_Building_App_1725364830/logo.svg" class="h-8 mr-4 sm:h-10" alt="Landwind Logo" />
                        AutoCraft
                    </a>
                </div>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-between">
                <div id="footer-text" class="flex-1 block text-sm text-center md:text-left text-pink-200 mb-4 md:mb-0">
                    © 2023 AutoCraft. Empowering automotive enthusiasts to build their dream cars.
                </div>
                <div class="flex-1 flex justify-center md:justify-end">
                    <button class="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out backdrop-filter backdrop-blur-sm bg-opacity-70">
                        <i class='bx bx-rocket mr-2'></i>
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'SimpleFooterComponent',
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
}
</script>
