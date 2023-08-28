<script>
    import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();
    export let row;
    export let col;
    export let arr;
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
<div class="common" class:on={arr[row][col].status} class:off={!arr[row][col].status}
on:click={clikk}>
{arr[row][col].count}</div>

<style>
    .common {
        width: 30px;
        height: 30px;
        border: 1px;
        display: inline-flex;
        border-style: solid;
        

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
</style>