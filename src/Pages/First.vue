<template>
    <my-header></my-header>

    <div id="first">
        <h1 v-color.opacity.fontLarge="{ color: 'blue' }">My first Component!</h1>
        <img width="200" src="./../assets/logo.svg" />
        <h2 v-color.fontSmall="{ color: 'yellow' }">
            {{ text }}
        </h2>
        <ul>
            <!-- <li v-for="skill in skills" :key="skill">
                {{ skill }}
            </li> -->
            <list-item
                v-for="skill in skills"
                :key="skill"
                :skill="skill"
                id="text"
            ></list-item>

            <!-- <list-item skill="JS"></list-item> -->
        </ul>
        <button @click.left="hello()">Say Hi!</button>
    </div>

    <my-footer> Another Value! </my-footer>
</template>

<script>
// import MyHeader from "./../components/MyHeader.vue"
import MyFooter from "./../components/MyFooter.vue";
import ListItem from "./../components/ListItem.vue";

export default {
    data() {
        return {
            text: "Hello World!",
            skills: ["Html", "Css", "Javascript", "PHP"],
        };
    },
    methods: {
        hello() {
            alert("Hello World!");
        },
    },
    // watch: {},
    // computed: {},
    components: {
        // MyHeader,
        MyFooter,
        ListItem,
    },
    directives: {
        color: (el, binding) => {
            // this will be called for both `mounted` and `updated`
            console.log(binding.modifiers.opacity);
            el.style.color = binding.value.color;
            el.style.fontSize = "50px";

            if (binding.modifiers.opacity) el.style.opacity = "0.1";
            if (binding.modifiers.fontLarge) el.style.fontSize = "large";
            if (binding.modifiers.fontSmall) el.style.fontSize = "small";
        },
    },
};
</script>

<style>
h1 {
    color: red;
}
ul {
    color: green;
}
</style>
