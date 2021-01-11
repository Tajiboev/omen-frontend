import React from 'react'

const UniverseHome = (props) => {

    return (
        <div className='panel'>
            <section>
                <div className="alliance-current subpagelist">
                    <p>Subpages:</p>
                    <ul>
                        <li>Main</li>
                        <li>Latest round alliances</li>
                    </ul>
                </div>
                <table>
                    <caption>Planetarion previous rounds</caption>
                    <thead>
                        <th>Round</th>
                        <th>#1</th>
                        <th>#2</th>
                        <th>#3</th>
                        <th>Alliance</th>
                        <th>Galaxy</th>
                    </thead>						
                    <tbody>              					
                        <tr>
                            <td>Round 89 - Disconnected</td>
                            <td>Jintao</td>
                            <td>Caj</td>
                            <td>TeK</td>
                            <td>CaRnage</td>
                            <td>6:5</td>
                        </tr>
                        <tr>
                            <td>Round 88 - Vengeance</td>
                            <td>gmufc</td>
                            <td>ReligFree</td>
                            <td>Lacter</td>
                            <td>Zero Tolerance</td>
                            <td>2:5</td>
                        </tr>
                    </tbody>
                </table>
            </section>     
        </div>
    )
}

export default UniverseHome
