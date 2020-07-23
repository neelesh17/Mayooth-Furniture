const INITIAL_STATE = {
    items: [
        {
            id: 1,
            image: '/images/product1.png',
            name: "White and Brown Sideboard",
            price: "50",
            type: "new",
            tag: "livingroom",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."
        },
        {
            id: 2,
            image: '/images/product2.png',
            name: "Orange plastic Armchairs",
            price: "20",
            type: "new",
            tag: "livingroom",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."
        },
        {
            id: 3,
            image: '/images/product3.png',
            name: "White wooden dinning room set",
            price: "90",
            type: "new",
            tag: "livingroom",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."
        },
        {
            id: 4,
            image: '/images/product4.jpg',
            name: "Old Style Wooden Chair",
            price: "150",
            type: "new",
            tag: "livingroom",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."
        },
        {
            id: 5,
            image:'/images/product5.jpg',
            name: "Pink Soaf Chair",
            price: "120",
            type: "new",
            tag: "bedroom",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."
        },
        {
            id: 6,
            image: '/images/product6.jpg',
            name: "Mehroon Comfort Chair",
            price: "190",
            type: "new",
            tag: "bedroom",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."
        },
        {
            id: 7,
            image: '/images/product7.jpg',
            name: "Bule Office Comfort Chair",
            price: "130",
            type: "new",
            tag: "bedroom",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."
        },
        {
            id: 8,
            image: '/images/Image4.png',
            name: "Set of plastic Armchairs",
            price: "150",
            type: "clearence",
            tag: "bedroom",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 9,
            image: '/images/Image5.png',
            name: "White Comfort Chair",
            price: "200",
            type: "clearence",
            tag: "kitchen&dinner",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 10,
            image: '/images/Image6.png',
            name: "White and Brown Stool",
            price: "50",
            type: "clearence",
            tag: "kitchen&dinner",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 11,
            image: '/images/product8.jpg',
            name: "White and Brown Stool",
            price: "50",
            type: "clearence",
            tag: "kitchen&dinner",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 12,
            image: '/images/product9.jpg',
            name: "White and Brown Stool",
            price: "50",
            type: "clearence",
            tag: "kitchen&dinner",
            company: "Scott",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eum temporibus reprehenderit quaerat animi numquam quo eaque repudiandae nihil, ullam qui, quas excepturi! Voluptatem praesentium illum tempora molestias ab ipsa."

        },
        {
            id: 13,
            image: '/images/product10.jpg',
            name: "White and Brown Stool",
            price: "50",
            type: "clearence",
            tag: "kitchen&dinner",
            company: "Scott",
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