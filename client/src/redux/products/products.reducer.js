const INITIAL_STATE = {
    items: [
        {
            id: 1,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595564397/maynooth/product1_aen8od.png',
            name: "White and Brown Sideboard",
            price: "50",
            type: "new",
            tag: "bedroom",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."
        },
        {
            id: 2,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595564398/maynooth/product2_amvjhi.png',
            name: "Orange plastic Armchairs",
            price: "20",
            type: "new",
            tag: "livingroom",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."
        },
        {
            id: 3,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595564403/maynooth/product3_igwz5m.png',
            name: "White wooden dinning room set",
            price: "90",
            type: "new",
            tag: "kitchendinner",
            company: "Masako",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."
        },
        {
            id: 4,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595564425/maynooth/product4_tobbnq.jpg',
            name: "Old Style Wooden Chair",
            price: "150",
            type: "new",
            tag: "livingroom",
            company: "Roscoe",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."
        },
        {
            id: 5,
            image:'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595564430/maynooth/product5_tvjgwg.jpg',
            name: "Pink Soaf Chair",
            price: "120",
            type: "new",
            tag: "livingroom",
            company: "Masako",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."
        },
        {
            id: 6,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595564438/maynooth/product6_geor2q.jpg',
            name: "Mehroon Comfort Chair",
            price: "190",
            type: "none",
            tag: "livingroom",
            company: "Roscoe",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."
        },
        {
            id: 7,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595564420/maynooth/product7_xzqsav.jpg',
            name: "Bule Office Comfort Chair",
            price: "130",
            type: "none",
            tag: "livingroom",
            company: "Hallie",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."
        },
        {
            id: 8,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595564395/maynooth/Image4_tpm28r.png',
            name: "Set of plastic Armchairs",
            price: "150",
            type: "none",
            tag: "kitchendinner",
            company: "Masako",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 9,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595564395/maynooth/Image5_jbiqdd.png',
            name: "White Comfort Chair",
            price: "200",
            type: "clearence",
            tag: "bedroom",
            company: "Hallie",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 10,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595564396/maynooth/Image6_urowuz.png',
            name: "White and Brown Stool",
            price: "50",
            type: "clearence",
            tag: "kitchendinner",
            company: "Roscoe",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 11,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595564431/maynooth/product8_t9wvtw.jpg',
            name: "White Plastic Chair",
            price: "60",
            type: "none",
            tag: "bedroom",
            company: "Hallie",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 12,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595564431/maynooth/product9_pvfvo7.jpg',
            name: "White and Brown Plastic Comfort Chair",
            price: "70",
            type: "clearence",
            tag: "livingroom",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 13,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595566920/maynooth/haley-owens-VQLFo5oF1t8-unsplash_kpd7lz.jpg',
            name: "White Comfort Mattress",
            price: "90",
            type: "new",
            tag: "bedroom",
            company: "Ilaria",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 14,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595566934/maynooth/jude-infantini-gRZmKaFUpBM-unsplash_salcnn.jpg',
            name: "White Pillow",
            price: "20",
            type: "none",
            tag: "bedroom",
            company: "Hallie",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 15,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595566972/maynooth/alessandro-a-dias-iYfJ88Bhidw-unsplash_zs7pr2.jpg',
            name: "White bed linnen for bed",
            price: "40",
            type: "new",
            tag: "bedroom",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 16,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595564438/maynooth/product10_qy3rkv.jpg',
            name: "Blue Comfort Chair",
            price: "90",
            type: "clearence",
            tag: "bedroom",
            company: "Ilaria",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 17,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595566968/maynooth/aw-creative-DyhArediJPs-unsplash_sjmk4j.jpg',
            name: "Colourfull Dotted Pillow set",
            price: "110",
            type: "clearence",
            tag: "bedroom",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 18,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595567071/maynooth/reisetopia-oukA5uMuALg-unsplash_ymbrvs.jpg',
            name: "Full Bedroom set",
            price: "190",
            type: "clearence",
            tag: "bedroom",
            company: "Ilaria",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 19,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595567468/maynooth/ellen-auer-LIx9GfMB6ZM-unsplash_uxr0uf.jpg',
            name: "Whit Kitchen Cupboards and Rack",
            price: "70",
            type: "clearence",
            tag: "kitchendinner",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 20,
            image: 'https://res.cloudinary.com/dqtcm5xy3/image/upload/v1595567468/maynooth/michal-parzuchowski-yASP72omEKE-unsplash_nuj6nk.jpg',
            name: "Brown Wodden Table Set",
            price: "190",
            type: "new",
            tag: "kitchendinner",
            company: "Ilaria",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        }
    ]
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
} 

export default productsReducer