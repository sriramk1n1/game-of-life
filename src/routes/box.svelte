<script>
    import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
let mouseclicked=true;
    export let row;
    export let col;
    export let arr;
    export let view;
    function toggleElement(arr, row, col) {
        const numRows = arr.length;
        const numCols = arr[0].length;
        if (row < 0 || row >= numRows || col < 0 || col >= numCols) {
            return;
        }
        const status = arr[row][col].status;
        if (status === true) {
            arr[row][col].status = false;
            updateAdjacentCounts(arr, row, col, -1);
            arr=arr;
        } else {
            arr[row][col].status = true;
            updateAdjacentCounts(arr, row, col, 1);
            arr=arr;
        }
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
    
    const clikk = () => {
    toggleElement(arr, row, col);
    dispatch('changed');
    arr=arr;

}

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="common" class:min={arr.length<=12} class:medium={arr.length<20 && arr.length>12} class:on={arr[row][col].status} class:off={!arr[row][col].status}
on:click={clikk} on:mouseleave|preventDefault|capture|stopPropagation={(e)=>{
    if (e.buttons===1 && arr[row][col].status===false){
        clikk();
    }
}} on:mousedown|preventDefault>
<span class:disp={!view}>{arr[row][col].count}</span>
</div>

<style>
    .disp {
        display: none;
    }
    .common {
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        border: 1px;
        border-style: solid;
        min-width: 20px;
        min-height: 20px;
        
    }
    .min {
        min-width: 50px;
        min-height: 50px;
    }
    .medium {
        min-width: 30px;
        min-height: 30px;
    }
    .on {
        
        background-color: #ff774d;
        border-color: red;
        color: #1c1c1c;
    }
    .off {
        background-color:#2e2e2e;
        border-color: black;
        color: #858585;
    }


@media (max-width: 600px){
    .common {
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        border: 1px;
        border-style: solid;
        min-width: 20px;
        min-height: 20px;
        
    }
    .min {
        min-width: 30px;
        min-height: 30px;
    }
    .medium {
        min-width: 30px;
        min-height: 30px;
    }
}
</style>