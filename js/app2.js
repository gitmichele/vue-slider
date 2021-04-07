function init() {

    new Vue({

        el: '#app',
        data: {
            'imgs': ['img/img1.jpeg', 'img/img2.jpeg', 'img/img3.jpeg', 'img/img4.jpeg'],
            'imgsIndex': 0,
            'sliderLimit': 'imgs'.length - 1
        },
        methods: {
            nextImg: function() {
                
                if (this.imgsIndex == this.sliderLimit){

                    this.imgsIndex = 0;
                }
                else{
                    this.imgsIndex++
                }
            },
            prevImg: function () {

                if (this.imgsIndex == 0) {

                    this.imgsIndex = this.sliderLimit;
                }
                else {
                    this.imgsIndex--
                }
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', init);