<template>
  <div class="verify">
    <Header/>
    <div class="metamask-btn" @click="getAddresses">
        Verify With Metamask
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue"
import axios from "axios"
export default {
    components: {
        Header,
    },
    methods:{
        async getAddresses(){
            if(window.ethereum) {
                try {
                    const accounts = await ethereum.send('eth_requestAccounts');
                    // console.log(accounts.result[0])
                    this.verifyStake(accounts.result[0])
                } catch(err){
                    console.log(err);
                    alert("Could not connect to wallet")
                }
            }
        },
        async verifyStake(address) {
            const res = await axios.get(`${process.env.API_URL}/verifyStaking/${address}/${this.$route?.query?.userId || ''}`)
            if(res.status !== 200){
                console.log("error")
            } else {
                if(res.data?.data?.staking) {
                    alert("Thanks for connecting!  Check Discord!")
                    window.location = "/amigonnamakeit?address="+address
                } else {
                    alert("Looks like the address you connected isn't staking any origins")
                }
            }
        }
    },
    mounted(){
        if(!this.$route?.query?.userId){
            alert("Discord bot probably isn't working right if you're seeing this")
        }
    }
}
</script>

<style lang="scss" scoped>
    .metamask-btn {
        position: relative;
        height: 20px;
        box-sizing: border-box;
        padding: 1px 12px 1px 12px;
        background-color: $green;
        color: #fff;
        border-radius: 2px;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
        display: flex;
        align-content: center;
        align-items: center;
        width: max-content;
    }

    .verify {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-top:10vh;
    }
</style>
