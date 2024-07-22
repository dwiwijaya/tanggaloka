<template>
    <header>
        <div class="flex items-center justify-between h-20 px-10 bg-white border border-b">
            <div class="brand flex items-center gap-2">
                <img class="w-8" src="../assets/logo.png" alt="" srcset="">
                <p class="font-bold text-lg text-neutral-600">justCalendar</p>
            </div>
            <div class="flex gap-2">
                <button @click="$emit('set-prev-year')" class="fad fa-chevron-left btn"></button>
                <button class="btn" disabled>{{ year }}</button>
                <button @click="$emit('set-next-year')" class="fad fa-chevron-right btn"></button>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    props: {
        year: {
            type: Number,
            required: true
        }
    }
}

</script>