<template>
    <div :class="$style.btn">
        <slot/>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                
            }
        }
    }
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.btn{
    @include btn;
}
</style>