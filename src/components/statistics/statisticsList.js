import Statistics from "./statistiks";
function StatisticsList({items}){
    return(
        <section>
                <h2>Upload stats</h2>

        <ul>
{items.map(item=>(
    <li key={item.id}>
    <Statistics
    percentage={item.percentage}
    label={item.label}
    id={item.id}
    />
    </li>
))}
</ul>
</section>
    );
}
export default StatisticsList;
