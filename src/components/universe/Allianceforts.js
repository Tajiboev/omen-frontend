import React from 'react'

const Allianceforts = (props) => {

    return (
        <div className='panel'>
            <section className='planet'>
                <div>Planet tools/links:  </div>
                <ul>
                    <li>All planets</li>
                    <li>Planets that Can be attacked</li>
                    <li>Top crashers in last 24 ticks, last 72 tick, last week</li>
                    <li>Top 100 Scanners, Top 100 Distwhores (that are known)</li>
                    <li>Alliance forts</li>
                    <li>Coords have to be set in Prefs page for this part to work</li>
                </ul>
            </section>
            <br/>
            <section>
                <table>
                    <thead>
                        <th>#</th>
                        <th>Coords</th>
                        <th>Members</th>
                        <th>Value</th>
                        <th>Alliance</th>
                    </thead>						
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>1:1</td>
                            <td>4</td>
                            <td>45054853</td>
                            <td>Cluster 1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1:1</td>
                            <td>4</td>
                            <td>45054853</td>
                            <td>Cluster 1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1:1</td>
                            <td>4</td>
                            <td>45054853</td>
                            <td>Cluster 1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1:1</td>
                            <td>4</td>
                            <td>45054853</td>
                            <td>Cluster 1</td>
                        </tr>
                    </tbody>
                </table>
            </section>     
        </div>
    )
}

export default Allianceforts
