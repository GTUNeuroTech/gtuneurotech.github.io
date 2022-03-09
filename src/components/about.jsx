export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <a
                  href='https://github.com/NeuroTechGTU'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  VIEW ON GITHUB
                </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
