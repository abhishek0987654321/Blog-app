import React from 'react'
import KhardhungLa from '../images/Khardhung-la.jpg';
import Darjelling from '../images/darjelling.jpg';
import Manali from '../images/manali.jpg';
import Kodaikanal from '../images/kodaikanal.jpg';
import Jaipur from '../images/jaipur.jpg';

const Menu = () => {

    const Posts = [
        {
          id: 1,
          title: "Khardhung La Pass",
          desc: "Maintained by the Border Roads Organisation, the pass is strategically important to India as it is used to carry supplies to the Siachen Glacier. The road is one of the world's highest motorable roads. The elevation of Khardung La is 5,359 m (17,582 ft).",
          src: KhardhungLa,
        },
        // {
        //   id: 2,
        //   title: "Manali",
        //   desc: "Maintained by the Border Roads Organisation, the pass is strategically important to India as it is used to carry supplies to the Siachen Glacier. The road is one of the world's highest motorable roads. The elevation of Khardung La is 5,359 m (17,582 ft).",
        //   src: Manali,
        // },
        {
          id: 3,
          title: "Darjelling",
          desc: "Darjeeling, often called the Queen of the Hills, is a picturesque hill station in West Bengal, India, renowned for its stunning views of the Himalayas, particularly Kanchenjunga, and its world-famous tea plantations. It's a former British hill station characterized by its cool, pleasant climate, lush valleys, and vibrant cultural heritage.",
          src: Darjelling,
        },
        {
          id: 4,
          title: "Kodaikanal",
          desc: "Kodaikanal is one of the very popular holiday destination hill resorts in South India. This hill station stands 7200 feet above sea level and situated in upper palani hills of the westernghats near Madurai in Tamil Nadu. Kodaikanal is also popularly known as the princes of Hill Stations.",
          src: Kodaikanal,
        },
        {
          id: 5,
          title: "Jaipur",
          desc: "Jaipur, also known as the 'Pink City', is the capital of Rajasthan, India. It's a vibrant city known for its historical architecture, including forts and palaces, bustling bazaars, and rich cultural heritage.",
          src: Jaipur,
        }
    
      ];

  return (
    <div className="menu">
        <h1>Other posts you may like</h1>
        {Posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.src} alt={post.title} />
                <h2>If you like this post!</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu
