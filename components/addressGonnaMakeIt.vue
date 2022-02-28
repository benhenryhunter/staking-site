<template>
    <div class="gonna-make-it">
        <div  class="maybeGonnaMakeIt" >
            <div :class="{notGonnaMakeIt: !stats.gonnaMakeIt, gonnaMakeIt: stats.gonnaMakeIt}">YOU'RE {{stats.gonnaMakeIt ? "GONNA MAKE IT!" : 'not gonna make it.'}}</div>
            <!-- <div><span v-if="!stats.gonnaMakeIt" class="minimumStaking">Stake at least {{minimum}} ghosts to get an origin</span></div> -->
        </div>
        <div class="address-stats">
            <AddressCounts :stats="stats"/>
        </div>
    </div>
</template>

<script>
import AddressCounts from "../components/addressCounts.vue"
export default {
    props: {
        stats: {
            type: Object,
            default: {},
        },
        gonnaMakeIt: {
            type: Boolean,
            default: false
        }
    },
    components:{
        AddressCounts
    },
}
</script>

<style lang="scss" scoped>

     .maybeGonnaMakeIt {
        display: flex;
        font-weight: bold;
        font-size: 36px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
    }
    .gonnaMakeIt {
        margin-top: 15px;
        background-color: $green;
        padding: 3px 10px;
        border-radius: 5px;
    }
    .notGonnaMakeIt {
        margin-top: 15px;
        background-color: $orange;
        padding: 3px 10px;
        border-radius: 5px;
    }

</style>