//jshint esversion:6
const numbers = [1,2,3,4,5]
function List(){
        const numbersToDisplay = numbers.map(function(n){
        return <li key={n.toString()}>{n}</li> //you can replace toString() to index and declace index in the function above
    })
    return <div>
        <input/>
        <br />
        <button>Add value</button>


        <ul>
            {numbersToDisplay}
        </ul>
    </div>

}

export default List;