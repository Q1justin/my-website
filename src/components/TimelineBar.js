
const TimelineBar = ({
    colorClass,
    years,
    marginLeft,
    place
}) => {

    const barWidth = Math.min(years / 25) * 100 + '%';

    return (
        <div className="TimelineBar" style={{'width': barWidth, 'marginLeft': marginLeft}}>
            <p>{place}</p>
            <div className={`bar ${colorClass}`}  />
            <p>{years} years</p>
        </div>
    )
}

export default TimelineBar;
