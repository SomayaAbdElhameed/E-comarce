import React, { Component } from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
export class Blogone extends Component {
    render() {
        return (
            <div>
             


            <Gallery>
                <div className="container-fluid  iimgg">
                <div className="row ">
                <div className="col-md-4 col-sm-6 do wow fadeInLeft animated" data-wow-delay="0.2s">
                <Item
      original="\images\s1.png"
      thumbnail="\images\s1.png"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="\images\s1.png" />
      )}
    </Item>


                </div>
                <div className="col-md-4 col-sm-6  wow fadeInLeft animated" data-wow-delay="0.3s">
                <Item
      original="\images\s2.png"
      thumbnail="\images\s2.png"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="\images\s2.png" />
      )}
    </Item>
                </div>
                <div className="col-md-4 col-sm-6  wow fadeInLeft animated" data-wow-delay="0.4s">
                <Item
      original="\images\s3.png"
      thumbnail="\images\s3.png"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="\images\s3.png" />
      )}
    </Item>


                </div>



                <div className="col-md-4 col-sm-6  wow fadeInRight animated" data-wow-delay="0.2s">
                <Item
      original="\images\s4.png"
      thumbnail="\images\s4.png"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="\images\s4.png" />
      )}
    </Item>


                </div>
                <div className="col-md-4 col-sm-6   wow fadeInRight animated" data-wow-delay="0.3s">
                <Item
      original="\images\s5.png"
      thumbnail="\images\s5.png"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="\images\s5.png" />
      )}
    </Item>
                </div>
                <div className="col-md-4 col-sm-6   wow fadeInRight animated" data-wow-delay="0.4s">
                <Item
      original="\images\s6.png"
      thumbnail="\images\s6.png"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="\images\s6.png" />
      )}
    </Item>


                </div>



                <div className="col-md-4 col-sm-6   wow fadeInLeft animated" data-wow-delay="0.2s">
                <Item
      original="\images\s7.png"
      thumbnail="\images\s7.png"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="\images\s7.png" />
      )}
    </Item>


                </div>
                <div className="col-md-4 col-sm-6   wow fadeInLeft animated" data-wow-delay="0.3s">
                <Item
      original="\images\s8.png"
      thumbnail="\images\s8.png"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="\images\s8.png" />
      )}
    </Item>
                </div>
                <div className="col-md-4 col-sm-6   wow fadeInLeft animated" data-wow-delay="0.4s">
                <Item
      original="\images\s9.png"
      thumbnail="\images\s9.png"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="\images\s9.png" />
      )}
    </Item>


                </div>


                <div className="col-md-4 col-sm-6   wow fadeInRight animated" data-wow-delay="0.2s">
                <Item
      original="\images\s10.png"
      thumbnail="\images\s10.png"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="\images\s10.png" />
      )}
    </Item>


                </div>
                <div className="col-md-4 col-sm-6 wow fadeInRight animated" data-wow-delay="0.3s">
                <Item
      original="\images\s11.png"
      thumbnail="\images\s11.png"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="\images\s11.png" />
      )}
    </Item>
                </div>
                <div className="col-md-4 col-sm-6  wow fadeInRight animated" data-wow-delay="0.4s">
                <Item
      original="\images\s12.png"
      thumbnail="\images\s12.png"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="\images\s12.png" />
      )}
    </Item>


                </div>

                </div>
                </div>
    







    
    
  </Gallery>
            </div>
        )
    }
}

export default Blogone
