// 1- al click su uno dei pallini mostrare l’immagine in posizione corrispondente
// 2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce

const app = new Vue(
    {
        el: '#app',
        data: {
            counter: null,
            autoPlayInterval: null,
            images: [
                // 'image1.jpg',
                // 'image2.jpg',
                // 'image3.jpg',
                // 'image4.jpg',

            ]
        },
        mounted() {

        },
        methods: {
            next: function () {
                this.counter += 1;
                if (this.counter > this.images.length - 1) {
                    this.counter = 0;
                }
            },
            prev: function () {
                this.counter -= 1;
                if (this.counter < 0) {
                    this.counter = this.images.length - 1;
                }
            },
            changeImage: function (index) {
                console.log(index);
                this.counter = index;
            },
            stopAutoplay: function () {
                console.log('stop');
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            },
            startAutoplay: function () {
                this.autoPlayInterval = setInterval(() => {
                    this.next();
                }, 1000);
            },
            isActive: function (index) {
                // (counter == index) ? 'active' : ''
                // let variabile = (counter == index) ? 'active' : '';
                if (this.counter == index) {
                    return 'active';
                }
                return '';

            }
        },
        created() {
            //simuliamo chiamata a server
            // setTimeout(() => {
            //   this.images = [
            //     'image1.jpg',
            //     'image2.jpg',
            //     'image3.jpg',
            //     'image4.jpg'
            //   ];
            // }, 1000);

            // this.images = [
            //     'image1.jpg',
            //     'image2.jpg',
            //     'image3.jpg',
            //     'image4.jpg'
            //   ];

            this.images = [
                {
                    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum repudiandae debitis perspiciatis tempore iste doloribus nisi autem! Distinctio assumenda nostrum rem doloribus sed harum vitae ab ratione suscipit officia!',
                    url: 'image1.jpg'
                },
                {
                    caption: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum repudiandae debitis perspiciatis tempore iste doloribus nisi autem! Distinctio assumenda nostrum rem doloribus sed harum vitae ab ratione suscipit officia!',
                    url: 'image2.jpg'
                },
                {
                    caption: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum repudiandae debitis perspiciatis tempore iste doloribus nisi autem! Distinctio assumenda nostrum rem doloribus sed harum vitae ab ratione suscipit officia!',
                    url: 'image3.jpg'
                },
                {
                    caption: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum repudiandae debitis perspiciatis tempore iste doloribus nisi autem! Distinctio assumenda nostrum rem doloribus sed harum vitae ab ratione suscipit officia!',
                    url: 'image4.jpg'
                },
            ];

            this.counter = 0;

            this.startAutoplay();
        }
    }
);