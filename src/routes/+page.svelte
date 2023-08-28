<script>
    import Slider from '@bulatdashiev/svelte-slider'
    import Box from "./box.svelte"
    let arr = Array.from({ length: 10 }, () =>
  Array.from({ length: 10 }, () => ({ count: 0, status: false }))
);
const update = () => {arr=arr;}
function setf(arr, row, col ) {
        const numRows = arr.length;
        const numCols = arr[0].length;
        if (row < 0 || row >= numRows || col < 0 || col >= numCols) {
            return;
        }
        arr[row][col].status = false;
        updateAdjacentCounts(arr, row, col, -1);
}
function sett(arr, row, col ) {
        const numRows = arr.length;
        const numCols = arr[0].length;
        if (row < 0 || row >= numRows || col < 0 || col >= numCols) {
            return;
        }
        arr[row][col].status = true;
        updateAdjacentCounts(arr, row, col, +1);
}
function updateAdjacentCounts(arr, row, col, increment) {
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
    for (let i=0; i<10; i++){
        for (let j=0; j<10; j++){
            if (arr[i][j].status==true && (arr[i][j].count<2 || arr[i][j]>3)) setf(arr,i,j);
            else if (arr[i][j].count===3 && arr[i][j].status===false) sett(arr,i,j);
        }
    }
    arr=arr
};

let intervalId;
function startFunction() {
    intervalId = setInterval(revaluate, val[0]); // Call the function every 1000 milliseconds (1 second)
  }

  function stopFunction() {
    clearInterval(intervalId);
    intervalId = null;
  }

function clear(){
    arr = Array.from({ length: 10 }, () =>
  Array.from({ length: 10 }, () => ({ count: 0, status: false }))
);
}
let val=[0,990]
</script>


<link href='https://fonts.googleapis.com/css?family=Overpass' rel='stylesheet'>
<nav>
<span style="display:flex">
    <img alt='img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Glider.svg/800px-Glider.svg.png" width="50" height="50" style="padding-right: 20px; padding-top: 20px padding-left: 20px">
    <h1 align='left' style="padding-left=500px padding-right: 50px"> Game of life</h1>
    <div style="display: flex; width:300px ">
        <Slider class="slide" min=0 max=1000 step="10" bind:value={val} />
       
        </div> {val[0]}
        <button on:click={startFunction} class="obtn">Start</button>
<button on:click={stopFunction} class="obtn">Stop</button>
<button on:click={clear} class="gbtn">Clear</button>
</span>
</nav>



{#key arr}
{#each {length: 10} as _,i}
<div style="display: flex; align-items: center; margin: auto">
{#each {length: 10} as _,j}
<Box row={i} col={j}  {arr} on:changed={update}></Box>
{/each}
</div>
{/each}
{/key}


<style>
    :global(body) {
        background-color: #1e1e1e;
        color: #f2f2f2;
        font-family: "Overpass"
    }
    nav {
        background-color: #353535;
        margin: 0px 0px 0px 0px;
    }
    .obtn {
        height: 30px;
        width: 100px;
        margin: 10px;
        background-color: #ff774d;
        color: #1c1c1c;
        border-radius: 5px;
        border: 0px;
        font-style: bold;
        font-size: large;
    }
    .gbtn{
        height: 30px;
        width: 100px;
        margin: 10px;
        background-color: #767676;
        color: #ffffff;
        border-radius: 5px;
        border: 0px;
        font-style: bold;
        font-size: large;
    }
    :root {
  --track-bg: #292929;
  --progress-bg: #767676;
  --thumb-bg: #ff774d;
}

</style>