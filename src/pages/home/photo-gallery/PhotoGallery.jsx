import { useRef } from "react";
import SectionHeading from "../../../components/SectionHeading";
import { motion, useScroll, useTransform } from "motion/react";

const PhotoGallery = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scaleUp1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scaleUp2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scaleUp3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scaleUp4 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scaleUp5 = useTransform(scrollYProgress, [0, 1], [1, 8]);

  return (
    <div className=" ">
      <SectionHeading
        heading="Photo Gallery"
        subHeading="A sec in Our Photo Gallery"
      />
      <div ref={container} className="h-[300vh] relative">
        <div className="h-screen sticky top-16 bg-gray-300 overflow-hidden">
          <motion.div
            style={{ scale: scaleUp1 }}
            className="w-full h-full top-0 absolute flex justify-center items-center z-30"
          >
            <div className="w-[25vw] h-[25vh] relative">
              <img
                src="https://i.ibb.co.com/1QcptFP/UN0635918-1-jpg.webp"
                alt=""
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            style={{ scale: scaleUp2 }}
            className="w-full h-full top-0 absolute flex justify-center items-center "
          >
            <div className="w-[25vw] h-[25vh] relative right-[27vw] top-[8vw]">
              <img
                src="https://i.ibb.co.com/XCWsVQm/2150251800.jpg"
                alt=""
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            style={{ scale: scaleUp4 }}
            className="w-full h-full top-0 absolute flex justify-center items-center "
          >
            <div className="w-[25vw] h-[25vh] relative right-[27vw] bottom-[10vw]">
              <img
                src="https://i.ibb.co.com/nL05BW5/photo-doctor-holding-little-cute-baby-763111-26702.webp"
                alt=""
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            style={{ scale: scaleUp3 }}
            className="w-full h-full top-0 absolute flex justify-center items-center "
          >
            <div className="w-[25vw] h-[25vh] relative bottom-[18vw]">
              <img
                src="https://i.ibb.co.com/3MVgsk7/pexels-rdne-6129507-1.jpg"
                alt=""
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ scale: scaleUp5 }}
            className="w-full h-full top-0 absolute flex justify-center items-center "
          >
            <div className="w-[25vw] h-[25vh] relative left-[27vw] top-[8vw]">
              <img
                src="https://i.ibb.co.com/2hVxjfJ/11210-1.jpg"
                alt=""
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            style={{ scale: scaleUp2 }}
            className="w-full h-full top-0 absolute flex justify-center items-center "
          >
            <div className="w-[25vw] h-[25vh] relative left-[27vw] bottom-[10vw]">
              <img
                src="https://i.ibb.co.com/7NmpvB9/97671-1.jpg"
                alt=""
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
