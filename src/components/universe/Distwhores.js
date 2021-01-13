import React from 'react'

const Distwhores = (props) => {

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
                        <th>Race</th>
                        <th>Dist</th>
                        <th>%con</th>
                        <th>DAge</th>
                        <th>Nick</th>
                        <th>Alliance</th>
                        <th>AR</th>
                    </thead>						
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>5:2:7</td>
                            <td>Goo</td>
                            <td>165</td>
                            <td>35.9%</td>
                            <td>274h</td>
                            <td></td>
                            <td>Cluster 5</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>5:2:7</td>
                            <td>Goo</td>
                            <td>165</td>
                            <td>35.9%</td>
                            <td>274h</td>
                            <td></td>
                            <td>Cluster 5</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>5:2:7</td>
                            <td>Goo</td>
                            <td>165</td>
                            <td>35.9%</td>
                            <td>274h</td>
                            <td></td>
                            <td>Cluster 5</td>
                            <td>1</td>
                        </tr>                      
                    </tbody>
                </table>
            </section>     
        </div>
    )
}

export default Distwhores
