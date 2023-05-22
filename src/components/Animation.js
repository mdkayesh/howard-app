export const containerVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      // duration: 0.5,
      staggerChildren: 0.3,
      // when: "afterchildren",
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  exit: {
    x: -200,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      delayChildren: 0.6,
    },
  },
};

export const space = {
  hidden: {
    letterSpacing: "5px",
    opacity: 0,
  },
  visible: {
    letterSpacing: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    letterSpacing: "5px",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const fadeUp = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 80,
      delay: 0.6,
    },
  },
  exit: {
    y: 200,
    opacity: 0,
  },
};

export const fadeUp2 = {
  hidden: {
    y: 100,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.5,
    },
  },

  exit: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
