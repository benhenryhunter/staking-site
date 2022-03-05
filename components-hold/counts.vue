<template>
    <div class="counts">
        <div class="stat">
            <div class="label">
                Total Ghosts Staked
            </div>
            <div class="value">
                {{stats.totalGhostsStakes}}
            </div>
        </div>
        <div class="stat">
            <div class="label">
                Mints Over Next 120 Days
            </div>
            <div class="value">
                {{stats.mintsBeforeDay120}}
            </div>
        </div>
        <div class="stat">
            <div class="label">
                Last pulled on
            </div>
            <div class="value">
                {{date}}
                <br/>
                {{time}} EST
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    props:{ 
        stats: {
            type: Object,
            default: "",
        }
    },
    computed: {
        date(){
            return moment(this.stats.createdAt).format("MMM DD, YYYY")
        },
        time(){
            return moment(this.stats.createdAt).format("hh:mm A")
        },
    }
}
</script>

<style lang="scss" scoped>
    .counts {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10px;
        .stat {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: solid 4px $orange;
            border-radius: 10px;
            .label {
                width: 100%;
                text-align: center;
                font-weight: bold;
                border-bottom: solid 4px $orange;
                padding: 10px 0;
            }
            .value {
                font-weight: bold;
                padding-top:20px;
                padding-bottom:20px;
            }
        } 
    }

    @media only screen and (max-width: 500px) {
        .counts {
            grid-template-columns: 1fr;
            .stat {
                margin-top: 15px;
            }
        }
    }
</style>