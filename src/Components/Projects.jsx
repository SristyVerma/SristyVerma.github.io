import {
  Box,
  HStack,
  Img,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import img1 from "./imges/img1.jpg";
import clickcart from "./imges/Click-Cart.png";
import bellavita from "./imges/bellavita.png";
import fathom from "./imges/fathom.png";
import { LinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "../Components/Projects/Project.module.css";
import chakra from "./imges/chakra.png";
AOS.init();

function Projects() {
  return (
    <div  className={style.project} id="projects">
      <div>Projects</div>
    <Stack  p={[2, 10]}>
      <SimpleGrid columns={[1, 1, 2, 2]} justifyContent={"space-between"}>
      <VStack 
          className="projectContainer project-card"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          p={[2, 5]}
          spacing={2}
          borderRadius="25px"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        >
          <Text align="left" fontSize="2xl" fontWeight="semibold" className='project-title'>
            Zara.com
          </Text>
          <Box className="image-container1">
            <Img src={img1} alt="img" className='project-image'/>
          </Box>
          <Text textAlign={"center"} width="80%" className={`${style.discription} project-description`}>
          Zara is one of the largest international fashion companies. It belongs to Inditex, one of the world's largest distribution groups.
          </Text>
          <HStack>
            <div className={`${style.techStack} project-tech-stack`}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              />
              <img
                src="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
                alt="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
              />
              <img
                src="https://usefulangle.com/img/thumb/javascript.png"
                alt="https://usefulangle.com/img/thumb/javascript.png"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              />
              <img src={chakra} alt={chakra} />
            </div>
          </HStack>
          <HStack>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/rajkumarsahu89/Zara-clone"
            >
              <button className={`${style.button} project-github-link`}>
                <FaGithub bg={"transparent"} />
                Github
              </button>
            </a>

            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://cerulean-blancmange-9d2121.netlify.app/"
            >
              <button className={`${style.button} project-deployed-link`}>
                <LinkIcon bg={"transparent"} />
                Live
              </button>
            </a>
          </HStack>
        </VStack>
        <VStack
          className="projectContainer project-card"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          spacing={2}
          p={[2, 5]}
          borderRadius="25px"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        >
          <Text fontSize="2xl" fontWeight="semibold" className='project-title'>
           Click-Cart.com
          </Text>
          <Box className="image-container4">
            <Img src={clickcart} alt="img" className='project-image' />
          </Box>
          <Text textAlign={"center"} width="80%" className={`${style.discription}  project-description`} >
           
          Click-cart is a clone of Flipkart.It is an ecommerce website which provides 
          electronics products,beauty products,clothing etc.
          </Text>
          <HStack>
            <div className={`${style.techStack} project-tech-stack`}>
              
              <img
                src="data:image/png;base64,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"
                alt="https://spsanchore13.github.io/shantilal/static/media/mongodb.0781b723446e1f8a1734f7831a9c3313.svg"
              />
              {/* <img
                src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
                alt="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
              /> */}
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              /> */}
              {/* <img
                src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                alt="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
              /> */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              />
              <img
                src="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
                alt="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
              />
              <img
                src="https://usefulangle.com/img/thumb/javascript.png"
                alt="https://usefulangle.com/img/thumb/javascript.png"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              />
              <img src={chakra} alt={chakra} />
            </div>
          </HStack>
          <HStack>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/abhi-swami/civil-kettle-7397"
            >
              <button className={`${style.button} project-deployed-link `}>
                <FaGithub bg={"transparent"} />
                Github
              </button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://civil-kettle-7397.vercel.app/"
            >
              {" "}
              <button className={`${style.button} project-github-link`}>
                <LinkIcon bg={"transparent"} />
                Live
              </button>
            </a>
          </HStack>{" "}
        </VStack>

        

        <VStack
          className="projectContainer project-card"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          spacing={2}
          p={[2, 5]}
          borderRadius="25px"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        >
          <Text fontSize="2xl" fontWeight="semibold" className='project-title'>
            bellavitaorganic.com
          </Text>
          <Box className="image-container2">
            <Img src={bellavita} alt="img" className="project-image"/>
          </Box>
          <Text textAlign={"center"} width="80%" className={`${style.discription} project-description`}>
          A cloned version of Bellavita Organic which offers beauty products and health care products
          </Text>
          <HStack>
            <div className={`${style.techStack} project-tech-stack`}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              />
              <img
                src="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
                alt="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
              />
              <img
                src="https://usefulangle.com/img/thumb/javascript.png"
                alt="https://usefulangle.com/img/thumb/javascript.png"
              />
             
            </div>
          </HStack>
          <HStack>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/Rafayal383/Bellavita-Organic-Cloned"
            >
              <button className={`${style.button} project-github-link`}>
                <FaGithub bg={"transparent"} />
                Github
              </button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://sparkling-sable-5e1c8b.netlify.app/"
            >
              {" "}
              <button className={`${style.button} project-deployed-link`}>
                <LinkIcon bg={"transparent"} />
                Live
              </button>
            </a>
          </HStack>{" "}
        </VStack>

        <VStack
          className="projectContainer project-card"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          spacing={2}
          p={[2, 5]}
          borderRadius="25px"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        >
          <Text fontSize="2xl" fontWeight="semibold" className='project-title'>
            fathomhealth.com
          </Text>
          <Box className="image-container3">
            <Img src={fathom} alt="img" className="project-image"/>
          </Box>
          <Text textAlign={"center"} width="80%" className={`${style.discription} project-description`}>
          It is a clone of fathomhealth website. fathom health website which is provide a AI build service for medical coding.As a member of a team of 5 full stack developers, develop high-quality front-end code with an emphasis on web standards and scalability.
          </Text>
          <HStack>
            <div className={`${style.techStack} project-tech-stack`}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              />
              <img
                src="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
                alt="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
              />
              <img
                src="https://usefulangle.com/img/thumb/javascript.png"
                alt="https://usefulangle.com/img/thumb/javascript.png"
              />
            </div>
          </HStack>
          <HStack>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/prasannaj-15/Fathom-health-clone"
            >
              <button className={`${style.button} project-github-link`}>
                <FaGithub bg={"transparent"} />
                Github
              </button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://deluxe-sunflower-248179.netlify.app/"
            >
              {" "}
              <button className={`${style.button} project-deployed-link`}>
                <LinkIcon bg={"transparent"} />
                Live
              </button>
            </a>
          </HStack>{" "}
        </VStack>
      </SimpleGrid>
    </Stack></div>
  );
}

export default Projects;
