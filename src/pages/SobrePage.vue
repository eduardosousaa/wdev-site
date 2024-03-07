<template>

    <main>

        <section class="container">

            <h1>Sobre</h1>

            <div v-html="about" class="about">
            </div>

        </section>

    </main>

</template>

<script>
    import api from '@/services/api.js';

    export default {
        name: 'SobrePage',
        data() {
            return {
                about: ''
            }
        },
        mounted() {
            api.get('/about.json').then(response => {
                this.about = response.data.about;
            })
        }
    }

</script>

<style scoped>

    main {
        align-items: center;
    }

    .about {
        margin-bottom: 40px;
        color: var(--color-text-dark);
    }

</style>