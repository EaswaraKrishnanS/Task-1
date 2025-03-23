import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./MainContent.css";
import Image1 from "../Images/Main-1.png";
import PostImage1 from "../Images/sub-1.png";
import PostImage2 from "../Images/sub-2.png";
import PostImage3 from "../Images/sub-3.png";

const MainContent = () => {
  return (
    <Container fluid className="content-container">
      <Row className="align-items-start">
      <Col style={{ flexBasis: "60%" }} className="left-column">
          <div className="text-section-mc">
            <span className="badge-mc">Lorem Ipsum</span>
            <h1>Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.</h1>
            <p className="meta-mc">
              <span className="author-mc">Lorem Ipsum</span> &nbsp; January 20, 2025
            </p>
          </div>
          <div className="image-container-mc">
            <img src={Image1} alt="Scenic View" />
          </div>
          <div className="badge1">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque fugit amet molestiae mollitia molestias omnis corporis odio eum perferendis perspiciatis, veniam repudiandae exercitationem recusandae animi maiores. Asperiores molestias veritatis fuga.
              Molestias cumque quod sed repudiandae vel non iure aut doloremque quam voluptatum, provident enim quo temporibus expedita quidem. Suscipit, qui cumque necessitatibus cum cupiditate fugiat aut harum! Illo, atque voluptatum!
              Odio blanditiis ullam excepturi repellat architecto, earum quod ipsum odit commodi sint aliquam eveniet! Maiores nobis soluta reiciendis quisquam quo animi dolorum aspernatur unde, voluptatem eveniet deserunt placeat debitis fuga.
              Vero, eaque quam! Dolor amet explicabo nulla eius aliquam impedit placeat est, architecto sequi non similique inventore necessitatibus atque repudiandae nesciunt sed aperiam eum magni vitae sapiente sit? Inventore, officia.
              Assumenda nihil cum deserunt libero eaque sint earum voluptatum labore. Accusantium laudantium illum cumque ad labore amet in ex nam repudiandae quidem magni nemo, harum ullam temporibus quam accusamus hic?
            </p>
          </div>
          <div className="badge2">
            <h3>Lorem Ipsum Dolor Sit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Duis felis aenean ullamcorper in. Lectus ipsum justo eget commodo dictumst urna. Malesuada at ut quis mi sit augue. In orci et neque nisl et eu mauris donec mi. Arcu lectus fringilla fermentum eu elementum eget viverra accumsan. Aliquet in massa volutpat id diam auctor arcu. Justo dolor ultricies ultricies ipsum tellus ullamcorper.
              A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc elit ornare. Gravida lorem iaculis convallis quis in proin ultricies eget. Massa nullam commodo vel viverra at tortor volutpat laoreet. Est porta cursus justo fermentum ipsum id. Et enim quam eu lobortis et habitant sollicitudin quis eu. Aliquet aliquam tellus nisl erat dignissim scelerisque. Semper morbi augue turpis aliquet quam. Lacus dignissim adipiscing velit vel. Tristique congue ut faucibus lorem malesuada.
              A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc elit ornare. Gravida lorem iaculis convallis quis in proin ultricies eget. Massa nullam commodo vel viverra at tortor volutpat laoreet. Est porta cursus justo fermentum ipsum id. Et enim quam eu lobortis et habitant sollicitudin quis eu. Aliquet aliquam tellus nisl erat dignissim scelerisque. Semper morbi augue turpis aliquet quam. Lacus dignissim adipiscing velit vel. Tristique congue ut faucibus lorem malesuada.
            </p>
          </div>
        </Col>

        {/* Right Column (Sidebar - 4/12) */}
        <Col style={{ flexBasis: "40%" }} className="right-column">
          <div className="latest-post-container">
            <h4 className="section-title">Latest Post</h4>

            {/* First Post */}
            <div className="card1">
              <img alt="LOGO" src={PostImage1} className="pc-image"/>
              <div>
                <span className="badge">Lorem Ipsum</span>
                <div className="pc-title">
                  Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.
                </div>
                <p className="meta1">
                  <span className="author1">Lorem Ipsum</span> &nbsp; January 20, 2025
                </p>
              </div>
            </div>

            {/* Second Post */}
            <div className="card2">
              <img alt="LOGO" src={PostImage2} className="pc-image" />
              <div>
                <span className="badge">Lorem Ipsum</span>
                <div className="pc-title">
                  Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.
                </div>
                <p className="meta1">
                  <span className="author1">Lorem Ipsum</span> &nbsp; January 20, 2025
                </p>
              </div>
            </div>

            {/* Third Post */}
            <div className="card3">
              <img alt="LOGO" src={PostImage3} className="pc-image" />
              <div>
                <span className="badge">Lorem Ipsum</span>
                <div className="pc-title">
                  Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.
                </div>
                <p className="meta1">
                  <span className="author1">Lorem Ipsum</span> &nbsp; January 20, 2025
                </p>
              </div>
            </div>
          </div>

        </Col>
      </Row>
      
    </Container>
  );
};

export default MainContent;