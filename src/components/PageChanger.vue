<template>
    <ul class="pagination pagination-lg justify-content-center">
        <li class="page-item" v-if="page > 1">
            <router-link class="page-link" :to="{ path: '/onb' + (page) }" tabindex="-1">
                <i class="fa fa-angle-left"></i>
                <span class="sr-only">Previous</span>
            </router-link>
        </li>
        
        <li class="page-item" v-bind:class="{ active: p === page }" v-for="p in pages" :key="p">
            <router-link class="page-link" :to="{ path: '/onb' + (p+1) }">{{ p }}</router-link>
        </li>

        <li class="page-item" v-if="page < pages">
            <router-link class="page-link" :to="{ path: '/onb' + (page+2) }">
                <i class="fa fa-angle-right"></i>
                <span class="sr-only">Next</span>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name:"pagechanger",
    props: {
        page: Number
    },
    data() {
        return {
            pages: 3
        }
    }
}
</script>