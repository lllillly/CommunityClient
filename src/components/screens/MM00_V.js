import React from "react";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";

class MM00_V extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [
        {
          menuName: "FREE BOARD",
          link: "/freeboard",
        },
        {
          menuName: "DOCUMENTS BOARD",
          link: "/docsboard",
        },
        {
          menuName: "GALLARY",
          link: "/gallaryboard",
        },
      ],
    };
  }

  render() {
    const { menus } = this.state;

    return (
      <main className="MM00_V">
        <Flip top>
          <h1 className="MM00_V__title">GJ COMMUNITY</h1>
        </Flip>
        <div className="MM00_V__menuBox">
          {menus.map((menu, idx) => {
            return (
              <Bounce bottom delay={idx * 250} key={idx}>
                <Link to={menu.link}>
                  <div className="MM00_V__menuBox__menu">{menu.menuName}</div>
                </Link>
              </Bounce>
            );
          })}
        </div>
      </main>
    );
  }
}

export default MM00_V;
