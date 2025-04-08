// // "use client"

// // import  React from "react"
// // import { useRef, useEffect } from "react"
// // import { motion, useInView, useAnimation } from "framer-motion"

// // export default function AnimatedSection({ children, delay = 0, className = "",  }) {
// //   const ref = useRef(null)
// //   const isInView = useInView(ref, { once: true, margin: "-100px" })
// //   const controls = useAnimation()

// //   useEffect(() => {
// //     if (isInView) {
// //       controls.start("visible")
// //     }
// //   }, [isInView, controls])

// //   return (
// //     <motion.div
// //       ref={ref}
// //       initial="hidden"
// //       className={className}
// //       animate={controls}
// //       variants={{
// //         hidden: { opacity: 0, y: 30 },
// //         visible: {
// //           opacity: 1,
// //           y: 0,
// //           transition: {
// //             duration: 0.8,
// //             delay: delay,
// //             ease: [0.22, 1, 0.36, 1],
// //           },
// //         },
// //       }}
// //     >
// //       {children}
// //     </motion.div>
// //   )
// // }

// "use client"

// import React from "react"
// import { useRef, useEffect } from "react"
// import { motion, useInView, useAnimation } from "framer-motion"

// export default function AnimatedSection({ 
//   children, 
//   delay = 0, 
//   className = "",
//   direction = "up", // Added direction prop for more animation options
//   duration = 0.8,   // Added customizable duration
// }) {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { 
//     once: true, 
//     margin: "-100px",
//     amount: 0.2 // Trigger animation when 20% of element is in view
//   })
//   const controls = useAnimation()

//   // Define animation variants based on direction
//   const getVariants = () => {
//     const variants = {
//       hidden: { opacity: 0 },
//       visible: {
//         opacity: 1,
//         transition: {
//           duration: duration,
//           delay: delay,
//           ease: [0.22, 1, 0.36, 1],
//         },
//       },
//     }

//     // Add directional animation
//     switch (direction) {
//       case "up":
//         variants.hidden.y = 30
//         variants.visible.y = 0
//         break
//       case "down":
//         variants.hidden.y = -30
//         variants.visible.y = 0
//         break
//       case "left":
//         variants.hidden.x = 30
//         variants.visible.x = 0
//         break
//       case "right":
//         variants.hidden.x = -30
//         variants.visible.x = 0
//         break
//       case "scale":
//         variants.hidden.scale = 0.95
//         variants.visible.scale = 1
//         break
//     }

//     return variants
//   }

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible")
//     }
//   }, [isInView, controls])

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       className={`will-change-transform ${className}`}
//       animate={controls}
//       variants={getVariants()}
//     >
//       {children}
//     </motion.div>
//   )
// }

"use client"
import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function AnimatedSection({ children, delay = 0, className = "", direction = "up", duration = 0.8 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "0px",
    amount: 0.1, // Trigger animation earlier
  })
  const controls = useAnimation()

  // Enhanced animation variants with more dynamic effects
  const getVariants = () => {
    const variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1], // Enhanced easing for smoother motion
        },
      },
    }

    // More dramatic directional animations
    switch (direction) {
      case "up":
        variants.hidden.y = 50
        variants.visible.y = 0
        break
      case "down":
        variants.hidden.y = -50
        variants.visible.y = 0
        break
      case "left":
        variants.hidden.x = 50
        variants.visible.x = 0
        break
      case "right":
        variants.hidden.x = -50
        variants.visible.x = 0
        break
      case "scale":
        variants.hidden.scale = 0.9
        variants.visible.scale = 1
        break
      case "rotate":
        variants.hidden.rotate = -5
        variants.hidden.scale = 0.95
        variants.visible.rotate = 0
        variants.visible.scale = 1
        break
      case "fade":
        // Just fade with no movement
        break
    }

    return variants
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      className={`will-change-transform ${className}`}
      animate={controls}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  )
}
