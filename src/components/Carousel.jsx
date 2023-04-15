import Carousel from 'react-bootstrap/Carousel';


function CarouselFadeExample() {
 
  return (
    
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://source.unsplash.com/random/900x700/?burger "
          alt="First slide"
        />
        <Carousel.Caption>
          <form className="d-flex">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> 
            {/* value={search} onChange={(e)=>{setSearch(e.target.value)}} /> */}
            <button className="btn btn-outline-success text-white text-light bg-success  my-2  my-sm-0" type="submit">Search</button>
          </form>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://source.unsplash.com/random/900x700/?pizza "
          alt="Second slide"
        />

        <Carousel.Caption>
          <form className="d-flex">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> 
            {/* value={search} onChange={(e)=>{setSearch(e.target.value)}} /> */}
            <button className="btn btn-outline-success text-light bg-success  my-2  my-sm-0" type="submit">Search</button>
          </form>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://source.unsplash.com/random/900x700/?cake "
          alt="Third slide"
        />

        <Carousel.Caption>
          <form className="d-flex">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> 
            {/* value={search} onChange={(e)=>{setSearch(e.target.value)}} /> */}
            <button className="btn btn-outline-success text-light bg-success  my-2  my-sm-0" type="submit">Search</button>
          </form>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;