<script>
    import Slider from '@bulatdashiev/svelte-slider'
    import Box from "./box.svelte"
    import Icon from "$lib/gol.svg"
    import ShowIcon from "$lib/show.png"
    import HideIcon from "$lib/hide.png"

    let no;
    let val=[250,1000];
    let val2=[10,30];
    $: no = val2[0];
    $: reconstructarr(val2[0]);
    let view=false;
    let running=false;
    let intervalId;
    let arr = Array.from({ length:  no}, () =>
    Array.from({ length: no }, () => ({ count: 0, status: false })));

    const update = () => {arr=arr;}
    const reconstructarr = () => {
        let arr2;
        arr2 = Array.from({ length:  no}, () =>
        Array.from({ length: no }, () => ({ count: 0, status: false })));
        arr=arr2;
        update();
    }
    const setf = (arr, row, col ) => {
        const numRows = arr.length;
        const numCols = arr[0].length;
        if (row < 0 || row >= numRows || col < 0 || col >= numCols) {
            return;
        }
        arr[row][col].status = false;
        updateAdjacentCounts(arr, row, col, -1);
}
    const sett = (arr, row, col ) => {
            const numRows = arr.length;
            const numCols = arr[0].length;
            if (row < 0 || row >= numRows || col < 0 || col >= numCols) {
                return;
            }
            arr[row][col].status = true;
            updateAdjacentCounts(arr, row, col, +1);
    }
    const updateAdjacentCounts = (arr, row, col, increment) => {
            const directions = [
                [-1, 0], [1, 0], [0, -1], [0, 1],
                [-1, -1], [-1, 1], [1, -1], [1, 1]
            ];

            for (const [dx, dy] of directions) {
                const newRow = row + dx;
                const newCol = col + dy;

                if (newRow >= 0 && newRow < arr.length && newCol >= 0 && newCol < arr[0].length) {
                    arr[newRow][newCol].count = arr[newRow][newCol].count + increment;
                }
            }
    }
    const revaluate = () => {
        for (let i=0; i<no; i++){
            for (let j=0; j<no; j++){
                if (arr[i][j].status==true && (arr[i][j].count<2 || arr[i][j]>3)) setf(arr,i,j);
                else if (arr[i][j].count===3 && arr[i][j].status===false) sett(arr,i,j);
            }
        }
        arr=arr
    };


    const startFunction = () => {
        running=true;
        intervalId = setInterval(revaluate, val[0]); // Call the function every 1000 milliseconds (1 second)
    }

    const stopFunction = () => {
        running=false;
        clearInterval(intervalId);
        intervalId = null;
    }

    const clear = () => {
        arr = Array.from({ length: no }, () =>
        Array.from({ length: no }, () => ({ count: 0, status: false })));
    }
</script>


<link href='https://fonts.googleapis.com/css?family=Overpass' rel='stylesheet'>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100&display=swap" rel="stylesheet">

<nav class="navbar">
    <div class="navleft">
    <img alt='img' src={Icon} width="50" height="50" style="padding-right: 5px; padding-top: 20px padding-left: 20px">
    <h1 align='left' id='name'> Conway's <span style="color: #858585">Game of Life</span></h1>
    </div>
    <div class="navright">
        <div class="slide" on:mousewheel|preventDefault={(e)=>{
            val2[0] += (e.deltaY<0&&val2[0]<30)?1:0;
            val2[0] -= (e.deltaY>0&&val2[0]>3)?1:0;
        }}><Slider max=30 step="1" bind:value={val2} /></div>
        <span style="padding-top: 20px; padding-right: 30px">{val2[0]}x{val2[0]}</span>
        <div class="slide" on:mousewheel|preventDefault={(e)=>{
            val[0] += (e.deltaY<0&&val[0]<1000)?100:0;
            val[0] -= (e.deltaY>0&&val[0]>100)?100:0;
        }}><Slider max=1000 step="10" bind:value={val} /></div>
        <span style="padding-top: 20px; padding-right: 30px">{val[0]}ms</span>
        <button on:click={startFunction} class={running==true?"gbtn":"obtn"}>Start</button>
        <button on:click={stopFunction} class={running==false?"gbtn":"obtn"}>Stop</button>
        <button on:click={clear} class="gbtn">Clear</button>
        <button on:click={()=> view=!view} class="gbtn"><img src={view==false?HideIcon:ShowIcon} alt="show/hide" id="showhide" height="30px" width="30px"></button>
    </div>
</nav>

{#key arr}
<div class="boxes">
    {#each {length: no} as _,i}
        <div style="display:inline-block ">
            {#each {length: no} as _,j}
                <Box row={i} col={j}  {arr} on:changed={update} {view}></Box>
            {/each}
        </div>
    {/each}
</div>
{/key}


<style>
    .boxes {
        padding-top: 10px;
        display: flex;
        justify-content: center;
        height: 100vh;
        max-width: 100%;
        max-height: 90vh;
        overflow: hidden;
    }

    .navbar {
        font-family: "Fira Sans","Overpass","Arial";
        background-color: #353535;
        overflow: hidden;
    }
    .slide{
        width:200px;
        padding-top: 10px;
    }
    .navright {
        display: flex;
        justify-content: flex-end;
        float: right;
    }
    .navleft {
        display: flex;
        justify-content: flex-start;
        float: left;
        height: 7vh;
    }
    #name {
        overflow: hidden;
        margin: 0;
        padding-top: 12px;
        padding-left: 0px;
    }

    .obtn:hover {
        box-shadow: 5px 5px 30px -10px, -5px -5px 30px -10px;
    }
    .gbtn:hover {
        box-shadow: 5px 5px 30px -10px black, -5px -5px 30px -10px black;
    }

    :global(body) {
        background-color: #1e1e1e;
        color: #f2f2f2;
        font-family: "Overpass";
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    .obtn {
        font-size: large;
        grid-area: btn;
        height: 30px;
        width: 100px;
        margin: 10px;
        background-color: #ff774d;
        color: #1c1c1c;
        border-radius: 5px;
        border: 0px;

    }
    .gbtn{
        font-size: large;
        height: 30px;
        width: 100px;
        margin: 10px;
        background-color: #767676;
        color: #ffffff;
        border-radius: 5px;
        border: 0px;

    }
    :root {
  --track-bg: #292929;
  --progress-bg: #767676;
  --thumb-bg: #ff774d;
}



@media (max-width:600px){
    .navright{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .boxes {
        padding-top: 10px;
        display: flex;
        justify-content: center;
        height: 100vh;
        max-width: 100%;
        max-height: 90vh;
        overflow: hidden;
    }

    .navbar {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        font-family: "Fira Sans","Overpass","Arial";
        background-color: #353535;

    }
    .slide{
        width:100px;
        padding-top: 10px;
        padding-left: 20px;
    }
    
    #name {
        overflow: hidden;
        margin: 0;
        padding-top: 12px;
        padding-left: 0px;
    }
    .obtn {
        font-size: smaller;
        grid-area: btn;
        height: 30px;
        width: 60px;
        margin: 10px;
        background-color: #ff774d;
        color: #1c1c1c;
        border-radius: 5px;
        border: 0px;

    }
    .gbtn{
        font-size: smaller;
        height: 30px;
        width: 60px;
        margin: 10px;
        background-color: #767676;
        color: #ffffff;
        border-radius: 5px;
        border: 0px;

    }
}
</style>