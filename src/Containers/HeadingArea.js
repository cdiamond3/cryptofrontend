// import React from 'react'
// import { Header } from 'semantic-ui-react'

// export default function HeadingArea() {
//     return (
//         <div>
//             <Header as="h1"> COIN CRASH! </Header>
//         </div>
//     )
// }

import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const HeaderExampleUsersIcon = () => (
    <div>
        <Header as='h2' icon textAlign='center'>
            <Icon name='bitcoin' circular />
            <Header.Content>Coin Crash!</Header.Content>
        </Header>
    </div>
)

export default HeaderExampleUsersIcon