export const EventItem = ({ info }) => {
    const { event } = info;
    
    return (
        <div style={{ overflow: 'hidden'}}>
            <p>
                {event.title}
            </p>
        </div>
    );
};
