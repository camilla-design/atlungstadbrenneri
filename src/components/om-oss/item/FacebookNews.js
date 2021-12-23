import { Component } from "react";

class FacebookNews extends Component {
  render() {
    return (
      <> 
      <div className="category-container mt-5">
      <h1>Nyheter</h1>

          <hr></hr>
          </div>
        <div className="facebook-body  menu-navigation mt-5">
          
          <div className="mt-3 facebook-news">
            <iframe
              title="facebook timeline plugin"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fatlungstadbrenneri&tabs=timeline&width=300&height=2000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="300"
              height="2000"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="mt-3 facebook-news">
            <iframe
              title="facebook event plugin"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fatlungstadbrenneri&tabs=events&width=300&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="300"
              height="800"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </>
    );
  }
}

export default FacebookNews;
