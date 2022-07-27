<template>

    <my-header></my-header>

    <div id="first">
        <h1>
            My first Component!
        </h1>
        <img width="200" src="./../assets/logo.svg">
        <h2>
            {{ text }}
        </h2>
        <ul>
            <!-- <li v-for="skill in skills" :key="skill">
                {{ skill }}
            </li> -->
            <list-item v-for="skill in skills" :key="skill" :skill="skill" id="text"></list-item>

            <!-- <list-item skill="JS"></list-item> -->

        </ul>
        <button @click="hello()">Say Hi!</button>
    </div>

    <my-footer></my-footer>

</template>

<script>
import MyHeader from "./../components/MyHeader.vue"
import MyFooter from "./../components/MyFooter.vue"
import ListItem from "./../components/ListItem.vue"

export default {
    data() {
        return {
            text: 'Hello World!',
            skills : [
                'Html',
                'Css',
                'Javascript',
                'PHP'
            ]
        }
    },
    methods: {
        hello(){
            alert('Hello World!')
        }
    },
    // watch: {},
    // computed: {},
    components:{
        MyHeader,
        MyFooter,
        ListItem
    }
}

</script>

<style>
    h1{
        color: red;
    }
    ul {
        color: green
    }
</style>