import React from 'react'
import "./RedditPolicy.css"
function RedditPolicy() {
  return (
    <div className='redditPolicy'>
        <table>
            <thead>
                <tr>
                    <th>User Agreement</th>
                    <th>Content Policy</th>
                </tr>
                <tr>
                    <th>Privacy Policy</th>
                    <th>Moderator Code Of Conduct</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>English</td>
                    <td>Deutsch</td>
                </tr>
                <tr>
                    <td>Français</td>
                    <td>Español</td>
                </tr>
                <tr>
                    <td>Italiano</td>
                    <td>Português</td>
                </tr>
            </tbody>
        </table>
        <p>Reddit Inc © 2023. All rights reserved</p>
    </div>
  )
}

export default RedditPolicy