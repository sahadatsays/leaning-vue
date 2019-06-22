/*
var data = {
    title: "Practices Vuejs - Basic To  Advance.",
    isTitleShow: true
};
*/

var app = new Vue({
    data: {
        title: "Practices Vuejs - Basic To  Advance.",
        isTitleShow: true
    },
    /*
    beforeCreate: () => {
        console.log("beforeCreate() running...");
    },
    created: () => {
        console.log("created() running...");
    },
    beforeMount: () => {
        console.log("beforeMount() running...");
    },
    mounted: () => {
        console.log("mounted() running...");
    },
    beforeUdpate: () => {
        console.log("beforeUpdate() running...");
    },
    updated: () => {
        console.log("updated() running...");
    },
    beforeDestroy: () => {
        console.log("beforeDestroy() running...");
    },
    destroyed: () => {
        console.log("destroyed() running...");
    },
    */
    methods: {
        changeTitle: function () {
            this.title = "This is Updated Title";
        }
    }
});
// app.$mount("#app");

// console.log(app.$refs.btn.innerText);

Vue.component('hello', {
    props: ['name'],
    template: '<p>Hi {{ name }}</p>'
});


/* *
    App 2
*/
var app2 = new Vue({
    template: '<h1>Hello App 2 title</h2>',
});

Vue.component('list', {
    template: '<h2>Name List</h2>',
});

app2.$mount();
console.log(app2.$options);

document.getElementById("app2").appendChild(app2.$el);


/* 
    App 3
*/

var app = new Vue({
    el: "#app3",
    data: {
        title: "Practices Vuejs - Basic To  Advance.",
        isTitleShow: true
    },
    beforeCreate() {
        console.log('beforeCreate()... activated');
    },
    created() {
        console.log('created()... activated');
    },
    beforeMount() {
        console.log('beforeMount()... activated');
    },
    mounted() {
        console.log('mounted()... activated');
    },
    beforeUpdate() {
        console.log('beforeUpdate()... activated');
    },
    updated() {
        console.log('updated()... activated');
    },
    beforeDestroy() {
        console.log('beforeDestroy()... activated');
    },
    destroyed() {
        console.log('destroyed()... activated');
    },
    methods: {
        changeTitle: function () {
            this.title = "This is Updated Title";
        },
        destroy() {
            this.$destroy();
            console.log('Everything are destroy !');
        }
    }
});