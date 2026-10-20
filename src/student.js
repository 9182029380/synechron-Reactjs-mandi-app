function StudentOne() {
    const { count, increment } = useCounter();

    return (
        <div>
            <h3>Student One: {count}</h3>
            <button onClick={increment}>
                Add Marks
            </button>
        </div>
    );
}
export default  StudentOne;

// function StudentTwo() {
//     const { count, increment } = useCounter();
//
//     return (
//         <div>
//             <h3>Student Two: {count}</h3>
//             <button onClick={increment}>
//                 Add Marks
//             </button>
//         </div>
//     );
// }
// export default StudentTwo;