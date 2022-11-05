
const TimelineBar = ({
    colorClass,
    years
}) => {

    const barWidth = Math.min(years / 25) * 100 + '%';
    const marginLeft = 0;

    return (
        <div className="TimelineBar">
            <div className={`bar ${colorClass}`}  style={{'width': barWidth}}/>
            <p>{years} years</p>
        </div>
    )
}

export default TimelineBar;
