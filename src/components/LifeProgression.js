import TimelineBar from './TimelineBar';

const LifeProgression = () => {
    return (
        <div className="LifeProgression">
            <TimelineBar colorClass="korea" years={2} />
            <TimelineBar colorClass="germany" years={4} />
            <TimelineBar colorClass="korea" years={2} />
            <TimelineBar colorClass="germany" years={2} />
            <TimelineBar colorClass="czech" years={8} />
            <TimelineBar colorClass="new-york" years={4} />
            <TimelineBar colorClass="dc" years={3} />
        </div>
    )
}

export default LifeProgression;
