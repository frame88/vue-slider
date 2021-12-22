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
                if (counter > 0) {
                    this.counter -= 1;

                }
            },
            nxt: function () {
                if (counter < 0) {
                    this.counter += 1;
    
                }
            }

        }
    }
); 