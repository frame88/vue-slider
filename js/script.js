const app = new Vue(
    {
        el: '#app',
        data: {
            counter: 0,
            images: [
                'image1.jpg',
                'image2.jpg',
                'image3.jpg',
                'image4.jpg',
            ]
        },
        methods: {
            prv: function () {
                this.counter -= 1;
                if (this.counter < 0) {
                    this.counter = this.images.length - 1;
                }
            },
            nxt: function () {
                this.counter += 1;
                this.counter += 1;
                if (this.counter > this.images.length - 1) {
                    this.counter = 0;
                }    
                
            }

        }
    }
); 


