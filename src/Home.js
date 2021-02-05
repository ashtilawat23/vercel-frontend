import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXJ8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Rent Computers"
                description="User experience stock branding business-to-business ecosystem freemium value proposition bootstrapping validation equity client market startup. Paradigm shift freemium branding long tail interaction design return on investment focus bootstrapping success partner network sales"
            />
            <Card
                src="https://images.unsplash.com/photo-1511184059754-e4b5bbbcef75?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtZXJhfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Rent Cameras"
                description="Stealth low hanging fruit early adopters incubator pivot mass market. Success iteration leverage. Paradigm shift series A financing facebook buzz iPad agile development investor burn rate twitter."
            />
            <Card
                src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Rent Drones"
                description="Supply chain facebook user experience iPhone freemium channels android prototype termsheet funding social proof equity beta ramen. Churn rate advisor entrepreneur gamification holy grail validation infographic rockstar business-to-business crowdsource."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://images.unsplash.com/photo-1506947411487-a56738267384?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmV8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Rent a GoPRO Mavic Pro"
                description="Incubator sales low hanging fruit success value proposition network effects creative lean startup traction A/B testing supply chain series A financing entrepreneur."
                price="$50/day"
            />
            <Card
                src="https://images.unsplash.com/photo-1515248137880-45e105b710e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hY3xlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Rent a iMac"
                description="Advisor success first mover advantage product management angel investor learning curve pitch. Niche market churn rate beta responsive web design bootstrapping channels agile development."
                price="$150/day"
            />
            <Card
                src="https://images.unsplash.com/photo-1558023567-20c42af0b4b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YWUlMjAxfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Rent a Canon AE-1"
                description="Seed round social media hackathon. Niche market marketing pitch leverage creative funding alpha success responsive web design direct mailing equity influencer investor."
                price="$40/night"
            />
            </div>
        </div>
    )
}

export default Home