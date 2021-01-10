import React from 'react'

const UniverseHome = (props) => {
    const {current, past, cluster} = props
    return (
        <div className='panel'>
            {current && 
            <section>
                <div className="alliance-current subpagelist">
                    <p>Subpages:</p>
                    <div>Overview</div>
                    <div>Lands/Landed On</div>
                    <div>Score History</div>
                    <div>Past rounds</div>
                </div>
                <table>
                    <thead>
                        <th>Rank</th>
                        <th>Alliance</th>
                        <th>Mem</th>
                        <th>Size</th>
                        <th>/ 24h</th>
                        <th>Score</th>
                        <th>Value</th>
                    </thead>						
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Cluster 3</td>
                            <td>19</td>
                            <td>319344</td>
                            <td></td>
                            <td>949.7M</td>
                            <td>937.8M</td>
                        </tr>
                    </tbody>
                </table>
            </section>     
            }
        </div>
    )
}

export default UniverseHome
