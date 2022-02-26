import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ str }) => {
  // console.log(str);
  return (
    <Carousel showThumbs={false}>
      {str.map((slide) => {
        return (
          <Box>
            <Image
              src={slide}
              borderRadius="20px"
              height="250px"
              // marginTop="25px"
              marginLeft="5px"
              

            />
          </Box>
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
