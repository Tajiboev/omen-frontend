import React from 'react'

const UniverseHome = (props) => {

    return (
        <div className='panel'>
            <section>
                <div className="alliance-current subpagelist">
                    <p>Subpages:</p>
                    <ul>
                        <li>Overview</li>
                        <li>Lands/Landed On</li>
                        <li>Score History</li>
                        <li>Past rounds</li>
                    </ul>
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

                        <tr>
                            <td>2</td>
                            <td>Cluster 6</td>
                            <td>21</td>
                            <td>309799</td>
                            <td className='positive'>+8341</td>
                            <td>770.1M</td>
                            <td>761.8M</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Cluster 7</td>
                            <td>18</td>
                            <td>267542</td>
                            <td className='positive'>+8195</td>
                            <td>749.9M</td>
                            <td>741.1M</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Cluster 11</td>
                            <td>20</td>
                            <td>265385</td>
                            <td className='positive'>+4209</td>
                            <td>714.9M</td>
                            <td>702.9M</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Cluster 8</td>
                            <td>18</td>
                            <td>232640</td>
                            <td className='negative'>-446</td>
                            <td>594.5M</td>
                            <td>586.2M</td>
                        </tr>
                    </tbody>
                </table>
            </section>     
        </div>
    )
}

export default UniverseHome
