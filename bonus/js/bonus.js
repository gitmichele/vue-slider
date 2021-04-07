function init() {

    new Vue({

        el: '#app',
        data: {
            'imgs': ['img/img1.jpeg', 'img/img2.jpeg', 'img/img3.jpeg', 'img/img4.jpeg'],
            'imgsIndex': 0,
            'sliderLimit': 'imgs'.length - 1,
            'timer': 0
        },
        // mounted: function () {
        //     this.start();
        // },
        methods: {

            nextImg: function () {

                if (this.imgsIndex == this.sliderLimit) {

                    this.imgsIndex = 0;
                }
                else {
                    this.imgsIndex++
                }
            },

            start: function () {
                this.timer = setInterval(this.nextImg, 3000);
            },
            
            stop: function() {

                clearTimeout(this.timer)
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', init);