function init() {

    new Vue({

        el: '#app',
        data: {
            'imgNum': 1,
            'sliderLimit': 4
        },
        methods: {

            nextImg: function () {

                if (this.imgNum == this.sliderLimit) {

                    this.imgNum = 1
                }
                else {
                    this.imgNum++
                }
            },
            prevImg: function () {

                if (this.imgNum == 1) {

                    this.imgNum = 4
                }
                else {
                    this.imgNum--
                }
            },
        }
    });
};

document.addEventListener('DOMContentLoaded', init);