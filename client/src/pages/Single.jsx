import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Pangong from '../images/pangong.jpg';
import User from '../images/user.jpg';
import Edit from '../images/edit.png';
import Delete from '../images/delete.png';
import KhardhungLa from '../images/Khardhung-la.jpg';
const Single = () => {
  return (
    <div className= "single">
      <div className="content">
        <img src={Pangong} alt="" />
        <div className="user">
          <img src={User} alt="" />
        <div className="info">
          <span>Abhi</span>
          <p>Posted 5 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
            </div>  
        </div>
        <h1>A Sparkling Jewel of Ladakh</h1>
        <p>Pangong Tso or Pangong Lake (Tibetan: སྤང་གོང་མཚོ;[3] Chinese: 班公错; pinyin: Bān gōng cuò; Hindi: पैंगोंग झील, romanized: Paiṅgoṅg jhīl) is an endorheic lake spanning eastern Ladakh and West Tibet situated at an elevation of 4,225 m (13,862 ft). It is 134 km (83 mi) long and divided into five sublakes, called Pangong Tso, Tso Nyak, Rum Tso (twin lakes) and Nyak Tso. Approximately 50% of the length of the overall lake lies within Tibet administered by China, 40% in Indian-administered Ladakh, and the remaining 10% is disputed and is a de facto buffer zone between India and China. The lake is 5 km (3.1 mi) wide at its broadest point. All together it covers almost 700 km2. During winter the lake freezes completely, despite being saline water. It has a land-locked basin separated from the Indus River basin by a small elevated ridge, but is believed to have been part of the Indus basin in prehistoric times.</p>
      </div>
  <Menu />
    </div>
  )
}

export default Single