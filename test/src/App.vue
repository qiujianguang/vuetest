<template>
    <div id="app">
        <!-- <ShowBoke></ShowBoke> -->
        <!-- <AddBoke></AddBoke> -->
        <BokeHead></BokeHead>
        <router-view></router-view>
    </div>
</template>

<script>
import AddBoke from './components/AddBoke'
import ShowBoke from './components/ShowBoke'
import BokeHead from './components/BokeHead'

export default {
    name: 'app',
    components: {
        ShowBoke,AddBoke,BokeHead
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: normal;
}
a{
    text-decoration: none;
}
</style>
