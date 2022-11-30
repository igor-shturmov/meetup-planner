import MeetupList from "../components/meetups/MeetupList";

const DUMMY_LIST = [{
    id: 'm1',
    title: 'A First Meetup',
    description: 'This is a first meetup!',
    address: 'Tallinn',
    image: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcS-yEf9jmyVJLP5ciQS8_wK8o8ZiJw7RB0tZ0Dj8MlmWGe0vCJ-BZfv6a1sWHqvozL9'
}, {
    id: 'm2',
    title: 'A Second Meetup',
    description: 'This is a Second meetup!',
    address: 'Kyiv',
    image: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSFwb75IxVUyUYGr3fL8Y2s5clAcmEuOZgh09FQIGj8TsHrX9RXcVypnj-rY3aTv5P1'
}];

function HomePage(props) {
    return <MeetupList meetups={props.meetups}/>
}

// export async function getServerSideProps(context) {
//     const { req, res } = context;
//     return {
//         props: {
//             meetups: DUMMY_LIST
//         }
//     };
// }

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_LIST
        },
        revalidate: 10
    };
}

export default HomePage;
