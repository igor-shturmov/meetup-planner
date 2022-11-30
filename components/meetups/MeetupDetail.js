import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
    return (
        <section className={classes.detail}>
            <img src={props.image} alt={props.title}/>
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const { meetupId } = context.parent;
    console.log(meetupId);

    return {
        props: {
            meetupData: {
                id: meetupId,
                title: 'A Second Meetup',
                description: 'This is a Second meetup!',
                address: 'Kyiv',
                image: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSFwb75IxVUyUYGr3fL8Y2s5clAcmEuOZgh09FQIGj8TsHrX9RXcVypnj-rY3aTv5P1'
            }
        }
    };
}

export default MeetupDetail;
