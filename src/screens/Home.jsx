import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { getAllEdibles } from '../actions/ediblesAction'



export default function Home() {

  const dispatch = useDispatch();

  const ediblesstate = useSelector((state) => state.getAllEdiblesReducer);
  const { edibles, error, loading } = ediblesstate;

  useEffect(() => {
    dispatch(getAllEdibles());
  }, [dispatch]);


  return (
    <div >

      <div>
        <Navbar />
      </div>

      <div>
        <Carousel />
      </div>

      <div className='row justify-content-center'>
        {loading ? (<h1>Loading </h1>) : error ? (<h1>Something went Wrong</h1>) : (

          edibles.map(edible => {
            return (
              <div className="col-md-3 m-3" key={edible._id} >
                <div>
                  <Card edible={edible} />
                </div>
              </div>
            );
          })
        )}

    

      <Footer />
    </div>
    </div>

  )

}


