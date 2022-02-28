<template>
    <div>
        <div class="counts">
            <div class="stat">
                <div class="label">
                    Total Ghosts Staked
                </div>
                <div class="value">
                    {{stats.totalGhostsStaked}}
                </div>
            </div>
            <div class="stat">
                <div class="label">
                    Days until next mint
                </div>
                <div class="value">
                    {{stats.daysUntilMint}}
                </div>
            </div>
            <div class="stat">
                <div class="label">
                    Available $boo
                </div>
                <div class="value">
                    {{stats.claimed + stats.claimable}}
                </div>
            </div>
            <div class="stat">
                <div class="label">
                    Total Origins Minted
                </div>
                <div class="value">
                    {{stats.totalMinted}}
                </div>
            </div>
            <div class="stat">
                <div class="label">
                    Possible Mints Before Yours*
                </div>
                <div class="value">
                    {{stats.mintsBeforeYou}}
                </div>
            </div>
            <div class="stat">
                <div class="label">
                    Origins Remaining
                </div>
                <div class="value">
                    {{4115 - stats.totalMinted}}
                </div>
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
        row-gap: 10px;
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