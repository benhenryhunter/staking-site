<template>
   <div class="main">
       <Header/>
        <div class="body">
            <p>Enter your wallet address and we'll check if you're currently going to make it before we run out of ethereal's origins</p>
        </div>
        <div class="form">
            <div class="input">
                <div class="label">
                </div>
                <input type="text" name="walletAddress" v-model="address" />
            </div>
            <div class="submit">
                <Spinner v-if="loading"/> 
                <button v-else @click="checkAddress">AM I GONNA MAKE IT?</button>
            </div>
            <div class="share">
                <a v-if="stats.gonnaMakeIt" class="btn" target="_blank" :href="`https://twitter.com/intent/tweet?text=${shareLink}`"><font-awesome-icon class="icon" :icon="['fab', 'twitter']"  />Tweet</a>
            </div>
        </div>
        <div class="stats">
            <AddressGonnaMakeIt v-if="fetched" :stats="stats"/>
            <div class="footer"  v-if="fetched">
                * These are approximations and not exact numbers
                <br/>
                Built by <a href="https://twitter.com/philosowrapter">@philoswrapter</a>
                <br/>
                No need but if you feel like it: 0x9194851F2A28e209216bEB93b736Ff3cF8579948
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Header from "../components/header.vue"
import AddressGonnaMakeIt from "../components/addressGonnaMakeIt.vue"
export default {
    data:()=>({
        address: "",
        loading: false,
        stats: {},
        fetched: false
    }),
    components: {
        Header,
        AddressGonnaMakeIt
    },
    methods: {
        async checkAddress() {
            if(!this.address){
                alert("Please enter a valid address")
                return
            }
            this.loading = true;
            const res = await axios.get(`https://staking-api.guanaco.dev/stats/${this.address}`);
            const res2 = await axios.get(`https://staking-api.guanaco.dev/stats`);
            // const res = await axios.get(`http://localhost:8080/stats/${this.address}`);
            // const res2 = await axios.get(`http://localhost:8080/stats`);
            this.loading = false;
            const totalboo = (res.data.data.stats.claimedBoo + res.data.data.stats.unclaimedBoo).toFixed(2);
            var daysTilMint;
            var gonnaMakeIt = false;
            var mintsBeforeYou = 0;
            if(totalboo >= 1200) {
                daysTilMint = 0
                gonnaMakeIt = true
            } else if(res.data.data.stats.stakedGhosts != 0) {
                daysTilMint = Math.ceil((1200 - totalboo)/(10*res.data.data.stats.stakedGhosts))
                mintsBeforeYou = res2.data.data.totals.reduce((sum, ele) => ele.daysTilMint < daysTilMint ? sum+ele.holders*(Math.ceil(daysTilMint/ele.daysTilMint)) : sum, 0)
                gonnaMakeIt = (res.data.data.mintedOrigins + mintsBeforeYou) < 4115
            }
            this.stats = {
                totalGhostsStaked: res.data.data.stats.stakedGhosts,
                daysUntilMint: daysTilMint,
                claimed: res.data.data.stats.claimedBoo,
                claimable: res.data.data.stats.unclaimedBoo,
                totalMinted: res.data.data.mintedOrigins,
                mintsBeforeYou,
                gonnaMakeIt
            }
            this.fetched = true
        },
    },
    computed: {
        shareLink() {
            return `🎉🎉I'm going to get an @Etherealswtf Origin🎉🎉%0a%0a👻- ${this.stats.totalGhostsStaked} Ghosts Staked%0a💰- ${this.stats.claimed + this.stats.claimable} $boo bucks earned%0a📅- ${this.stats.daysUntilMint} days until I can mint%0a%0aAre you gonna make it? Find out here https://guanaco.dev/amigonnamakeit`
        }
    }
}
</script>

<style lang="scss" scoped>
    .main {
        max-width: 60vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        .stats {
            margin-top: 30px;
        }
        .body {
            max-width: 500px;
        }
        .form {
            // margin-top: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .input {
                input {
                    color: $darkGray;
                    width: 60vw;
                    max-width: 500px;
                    font-weight: bold;
                    border-radius: 3px;
                    border: none;
                    font-size:16px;
                }
            }
            .submit {
                margin-top: 20px;
                button {
                    font-size: 18px;
                    font-weight: bold;
                    background-color: $orange;
                    border: none;
                    border-radius: 2px;
                    padding: 4px 6px;
                    cursor: pointer;
                    &:active{
                        background-color: $burntOrange;
                    }
                }
            }
        }
    }

    .footer {
        margin-top: 20px;
    }

    .share {
        margin-top: 5px;
    }

    a.btn {
        position: relative;
        height: 20px;
        box-sizing: border-box;
        padding: 1px 12px 1px 12px;
        background-color: #1d9bf0;
        color: #fff;
        border-radius: 2px;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
        display: flex;
        align-content: center;
        align-items: center;
        .icon {
            padding-right: 5px;
            height: 15px;
        }
    }

</style>