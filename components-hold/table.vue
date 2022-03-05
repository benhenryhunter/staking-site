<template>
    <table class="table">
        <th v-for="(header, i) in headers" class="" :key="`header-${i}`">
            {{header}}
        </th>
        <tr v-for="(row, x) in rows"  :key="`row-${x}`">
            <td v-for="(key, y) in keys" class="cell" :key="`key-${y}`">
                {{row[key]}}
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    props: {
        headers: {
            type: Array,
            default: [],
        },
        rows: {
            type: Array,
            default: [],
        },
        keys: { 
            type: Array,
            default: [],
        },
    }
}
</script>

<style lang="scss" scoped>

    .table {
        width: 50%;
        margin: auto;
        column-gap: 0px;
        border-spacing: 0px;
        border: solid 3px $darkGray;
        th {
            text-align: center;
            font-weight: bold;
            border: solid 1px $darkGray;
        }
        td{
            text-align: right;
            border-right:solid 1px $darkGray;
            border-left:solid 1px $darkGray;
            padding-right: 20px;
        }
    }

</style>