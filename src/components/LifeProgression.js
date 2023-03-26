import TimelineBar from './TimelineBar';

const LifeProgression = () => {
    return (
        <div className="LifeProgression">
            <h1>Where Have I Lived?</h1>
            <TimelineBar colorClass="korea" years={2} marginLeft="0%" place="Korea"/>
            <TimelineBar colorClass="germany" years={4} marginLeft="8%" place="Germany"/>
            <TimelineBar colorClass="korea" years={2} marginLeft="24%" place="Korea"/>
            <TimelineBar colorClass="germany" years={2} marginLeft="32%" place="Germany"/>
            <TimelineBar colorClass="czech" years={8} marginLeft="40%" place="Czechia"/>
            <TimelineBar colorClass="new-york" years={4} marginLeft="72%" place="New York"/>
            <TimelineBar colorClass="dc" years={3} marginLeft="88%" place="Washington"/>
        </div>
    )
}

export default LifeProgression;
